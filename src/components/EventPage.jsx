import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, Paper, TableContainer } from '@material-ui/core';

// Material CSS
const useStyles = makeStyles({
  blocDescription: {
    color: 'white',
    width: '30vh',
    margin: 'auto',
  },
  bloc: {
    backgroundColor: '#010101',
    display: 'flex',
    flexWrap: 'wrap',
  },
  img: {
    maxWidth: '100%',
  },
  title: {
    fontFamily: 'Poiret One',
    fontSize: '2rem',
  },
  button: {
    color: 'white',
    background: 'black',
    border: ' 1px solid white',
    borderRadius: '5px',
  },
});

// End Material CSS

function EventPage() {
  const { id } = useParams();
  const [spectacle, setSpectacle] = useState([]);
  const [representations, setRepresentations] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const URL_API = process.env.REACT_APP_API_URL;
  const classes = useStyles();

  useEffect(() => {
    axios.get(`${URL_API}/spectacles/${id}`).then((res) => {
      setSpectacle(res.data);
      console.log(res.data);
    });
    axios.get(`${URL_API}/spectacles/city&date${id}`).then((res) => {
      setRepresentations(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Paper className={classes.bloc}>
        <img
          src={spectacle.imgXLurl}
          alt={spectacle.name}
          className={classes.img}
        />
        <div className={classes.blocDescription}>
          <h3 className={classes.title}>{spectacle.name}</h3>
          <p className={classes.description}> {spectacle.description}</p>
          <button
            type="button"
            className={classes.button}
            onClick={() => setIsClicked(!isClicked)}
          >
            Réserver
          </button>
        </div>
      </Paper>
      <div>
        {isClicked && <TableContainer representations={representations} />}
      </div>
    </>
  );
}

export default EventPage;
