import React from 'react';
import { connect } from 'react-redux';
import handleSelectDificulty from './functions/handleSelectDificulty';
import setDificultyList from './functions/setDificultyList';
import handleSetPlayerName from './functions/handleSetPlayerName';
import handleFormSubmit from './functions/handleFormSubmit';
import stringFormatter from './functions/stringFormatter';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styleConfigInputs from './style/styleConfigInputs';

export default connect((state) => {
  return {
    gameConfiguration: state.gameConfiguration,
    player: state.player
  };
})(function ConfigInputs({
  gameConfiguration: { dificultiesList, dificultySelected },
  player
}) {
  const classes = styleConfigInputs();

  React.useEffect(() => {
    setDificultyList();
  }, []);

  const dificultiesName = Object.keys(dificultiesList);

  return (
    <Box>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel id="dificulty-select-label">Select Dificulty</InputLabel>
          <Select
            labelId="dificulty-select-label"
            id="dificulty-select"
            className={classes.selectDificulty}
            value={dificultySelected}
            onChange={handleSelectDificulty}
          >
            {dificultiesName.map((name) => {
              return (
                <MenuItem key={name} value={dificultiesList[name]}>
                  {stringFormatter(name)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            className={classes.playerNameInput}
            label="Player Name"
            onChange={handleSetPlayerName}
            value={player.name}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <Button
            className={classes.btnPlay}
            type="submit"
            variant="contained"
            color="primary"
          >
            play
          </Button>
        </FormControl>
      </form>
    </Box>
  );
});
