import React from 'react';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import handleSelectDificulty from './handleSelectDificulty';
import setDificultyList from './setDificultyList';
import handleSetPlayerName from './handleSetPlayerName';
import handleFormSubmit from './handleFormSubmit';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default connect((state) => {
  return {
    gameConfiguration: state.gameConfiguration
  };
})(function ConfigInputs({
  gameConfiguration: { dificultiesList, dificultySelected, playerName }
}) {
  const classes = useStyles();

  React.useEffect(() => {
    setDificultyList();
  }, []);

  const dificultiesName = Object.keys(dificultiesList);

  return (
    <Box>
      <form onSubmit={handleFormSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Select Dificulty
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dificultySelected}
            onChange={handleSelectDificulty}
          >
            {dificultiesName.map((item) => {
              const formattedName =
                item.charAt(0).toUpperCase() +
                item.substring(1).replace(/([a-z])([A-Z])/, '$1 $2');
              return (
                <MenuItem key={item} value={dificultiesList[item]}>
                  {formattedName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          label="player name"
          onChange={handleSetPlayerName}
          value={playerName}
        />
        <Button type="submit" variant="contained" color="primary">
          play
        </Button>
      </form>
    </Box>
  );
});
