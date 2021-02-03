import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#292f36',
    color: 'white',
    position: 'absolute',
    width: '100%',
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.footer}>footer</Paper>
    </>
  );
}

export default Footer;
