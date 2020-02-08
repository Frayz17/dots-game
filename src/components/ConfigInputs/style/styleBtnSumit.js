import { makeStyles } from '@material-ui/core/styles';

const styleBtnSumit = makeStyles((theme) => {
  return {
    btnSubmit: {
      width: 120
    },
    '@media (max-width: 599px)': {
      btnSubmit: {
        width: 250,
        marginTop: 15
      }
    }
  };
});

export default styleBtnSumit;
