import { makeStyles } from '@material-ui/core/styles';

const styleConfigInputs = makeStyles((theme) => {
  return {
    form: {
      display: 'flex',
      alignItems: 'center',
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
    [theme.breakpoints.down('xs')]: {
      form: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      selectDificulty: {
        width: 250
      },
      playerNameInput: {
        width: 250
      }
    }
  };
});

export default styleConfigInputs;
