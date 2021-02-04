import { makeStyles, Paper } from '@material-ui/core';
import team from '../images/team.png';

const useStyles = makeStyles({
  page: {
    backgroundColor: '#292f36',
  },
  textContainer: {
    backgroundColor: '#292f36',
    color: 'white',
    width: '100%',
    margin: 'auto',
    marginTop: '20px',
  },
  img: {
    maxWidth: '100%',
    borderRadius: '20px',
  },
  text: {
    width: 700,
    margin: 'auto',
  },
});

function AboutUs() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.page}>
        <img className={classes.img} src={team} alt="Team Biarritz" />
      </Paper>
      <Paper className={classes.textContainer}>
        <div className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium a, enim. Pellentesque congue. Ut in risus
          volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
          Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris,
          egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa
          suscipit pulvinar.
        </div>
      </Paper>
    </div>
  );
}

export default AboutUs;
