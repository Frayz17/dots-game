import { makeStyles } from '@material-ui/core/styles';

const WinnersListStyle = makeStyles((theme) => ({
  root: {},
  title: {
    textAlign: 'center',
    marginBottom: 15
  },
  listWrapper: {
    overflowY: 'auto',
    height: 500,
    maxWidth: 500,
    margin: '0 auto',
    paddingRight: 10
  },
  '@media (max-width: 960px)': {
    listWrapper: {
      height: 200
    }
  }
}));

export default WinnersListStyle;
