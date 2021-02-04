import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, Paper } from '@material-ui/core';

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
  const history = useHistory();
  const [spectacle, setSpectacle] = useState([]);

  const URL_API = process.env.REACT_APP_API_URL;
  const classes = useStyles();

  useEffect(() => {
    axios.get(`${URL_API}/spectacles/${id}`).then((res) => {
      setSpectacle(res.data);
      console.log(res.data);
    });
  }, []);

  return (
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
          onClick={() => history.push('/reservation')}
        >
          Réserver
        </button>
      </div>
    </Paper>
  );
}

export default EventPage;
