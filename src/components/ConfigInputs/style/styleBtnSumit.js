import { makeStyles } from '@material-ui/core/styles';

const styleBtnSumit = makeStyles((theme) => {
  return {
    btnSubmit: {
      width: 120
    },
    [theme.breakpoints.down('xs')]: {
      btnSubmit: {
        width: 250,
        marginTop: 15
      }
    }
  };
});

export default styleBtnSumit;
