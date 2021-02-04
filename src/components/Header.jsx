import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// material UI css
const useStyles = makeStyles({
  root: {
    marginBottom: 0,
    backgroundColor: '#292f36',
    color: 'white',
  },
});
// end material UI css

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <h1 className="bigTitle">Wild Circus</h1>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          centered
        >
          <Tab label="Evènements" component={Link} to="/" />
          <Tab label="Dates" component={Link} to="/dates" />
          <Tab label="A propos de nous" component={Link} to="/aboutUs" />
        </Tabs>
      </div>
    </Paper>
  );
}

export default Header;
