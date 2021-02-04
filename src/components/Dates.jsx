import { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Material CSS
const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableContainer: {
    maxWidth: 900,
    margin: 'auto',
    marginTop: 20,
  },
  tableHead: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    backgroundColor: '#cecccc',
  },
});
// end Material CSS

function Dates() {
  const URL_API = process.env.REACT_APP_API_URL;
  const [representations, setRepresentations] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get(`${URL_API}/spectacles/city&date`).then((res) => {
      setRepresentations(res.data);
    });
  }, []);

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.firstRow}>
            <TableCell className={classes.tableHead}>Spectacles</TableCell>
            <TableCell className={classes.tableHead} align="right">
              Villes
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Dates
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {representations.map((representation) => (
            <TableRow key={representation.spectacle_name}>
              <TableCell component="th" scope="row">
                {representation.spectacle_name}
              </TableCell>
              <TableCell align="right">{representation.city_name}</TableCell>
              <TableCell align="right">{representation.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Dates;
