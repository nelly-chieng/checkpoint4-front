import { makeStyles, Paper } from '@material-ui/core';
import wcsLogo from '../images/wcsLogo.png';
import facebookLogo from '../images/facebookLogo.png';
import instaLogo from '../images/instaLogo.png';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#292f36',
    color: 'white',
    position: 'absolute',
    width: '100%',
    textAlign: 'right',
    marginTop: 10,
  },
  logoWcs: {
    height: '40px',
    margin: '10px',
  },
  logoFace: {
    height: '30px',
    marginBottom: '15px',
    marginRight: '5px',
  },
  logoInsta: {
    height: '32px',
    marginBottom: '13px',
    paddingRight: 20,
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.footer}>
        <a href="https://www.facebook.com/WildCodeSchool">
          <img
            className={classes.logoFace}
            src={facebookLogo}
            alt="Facebook logo"
          />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <img
            className={classes.logoWcs}
            src={wcsLogo}
            alt="Wild code scholl logo"
          />
        </a>
        <a href="https://instagram.com/wildcodeschool_biarritz?igshid=1829f1goe7nfm">
          <img
            className={classes.logoInsta}
            src={instaLogo}
            alt="Instagram logo"
          />
        </a>
      </Paper>
    </>
  );
}

export default Footer;
