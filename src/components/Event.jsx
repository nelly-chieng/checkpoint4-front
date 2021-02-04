import { makeStyles, Paper } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  picBig: {
    width: '100%',
  },
});

function Event() {
  const URL_API = process.env.REACT_APP_API_URL;
  const classes = useStyles();

  const [spectacles, setSpectacles] = useState([]);

  useEffect(() => {
    axios.get(`${URL_API}/spectacles`).then((res) => {
      setSpectacles(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      {spectacles.map((spectacle) => (
        <Paper>
          <img
            className={classes.picBig}
            src={spectacle.imgUrl}
            alt="magic pic"
          />
        </Paper>
      ))}
      {/* <Paper className="picBg picBg1">1</Paper>
  <Paper className="picBg picBg2">2</Paper>
  <Paper className="picBg picBg3">3</Paper>
  <Paper className="picBg picBg4">4</Paper>
  <Paper className="picBg picBg5">5</Paper>
  <Paper className="picBg picBg6">6</Paper> */}
    </>
  );
}

export default Event;
