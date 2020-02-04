import { makeStyles } from '@material-ui/core/styles';

const styleBtnSumit = makeStyles((theme) => {
  return {
    btnSubmit: {
      width: 120
    },
    '@media (max-width: 490px)': {
      btnSubmit: {
        width: 250
      }
    }
  };
});

export default styleBtnSumit;
