import { makeStyles } from '@material-ui/core/styles';

const styleConfigInputs = makeStyles((theme) => {
  return {
    form: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    formControl: {
      margin: theme.spacing(1)
    },
    selectDificulty: {
      width: 180
    },
    playerNameInput: {
      width: 180
    },
    btnSubmit: {
      width: 120
    },
    '@media (max-width: 490px)': {
      form: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      selectDificulty: {
        width: 250
      },
      playerNameInput: {
        width: 250
      },
      btnSubmit: {
        width: 250
      }
    }
  };
});

export default styleConfigInputs;
