import PropTypes from 'prop-types';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

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

function TableContainer({ ...representations }) {
  const classes = useStyles();

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
TableContainer.propTypes = {
  representations: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TableContainer;
