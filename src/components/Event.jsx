import { makeStyles, Paper } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  picBig: {
    width: '100%',
    heigth: '100%',
  },
  banner: {
    backgroundColor: '#292F35',
  },
  title: {
    position: 'relative',
    top: '-6.5vw',
    textAlign: 'left',
    zIndex: 2,
    color: 'white',
    margin: 0,
    fontFamily: 'Poiret One',
    fontSize: '6vw',
    height: 0,
  },
  link: {
    textDecoration: 'none,',
  },
});

function Event() {
  const URL_API = process.env.REACT_APP_API_URL;
  const classes = useStyles();

  const [spectacles, setSpectacles] = useState([]);

  useEffect(() => {
    axios.get(`${URL_API}/spectacles`).then((res) => {
      setSpectacles(res.data);
    });
  }, []);

  return (
    <>
      {spectacles.map((spectacle) => (
        <Paper className={classes.banner}>
          <Link className={classes.link} to={`/event/${spectacle.id}`}>
            <img
              className={classes.picBig}
              src={spectacle.imgUrl}
              alt="magic pic"
            />
          </Link>
          <p className={classes.title}>{spectacle.name}</p>
        </Paper>
      ))}
    </>
  );
}

export default Event;
