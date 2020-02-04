import { makeStyles } from '@material-ui/core/styles';

const infoTextStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid black',
    marginTop: 20,
    marginBottom: 30
  },
  text: {}
}));

export default infoTextStyle;
