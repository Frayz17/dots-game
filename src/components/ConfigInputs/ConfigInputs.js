import React from 'react';
import { connect } from 'react-redux';
import SubmitBtn from './SubmitBtn';
import { isObjEmpty } from 'utils';
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
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import styleConfigInputs from './style/styleConfigInputs';

export default connect((state) => {
  return {
    gameDificulty: state.gameDificulty,
    player: state.player
  };
})(function ConfigInputs({
  gameDificulty: { dificultiesList, dificultySelected },
  player
}) {
  const classes = styleConfigInputs();

  const isSubmitEnabled =
    player.name.length > 3 &&
    dificultySelected !== '' &&
    !isObjEmpty(dificultySelected);

  React.useEffect(() => {
    setDificultyList();
  }, []);

  const dificultiesName = Object.keys(dificultiesList);

  return (
    <Box>
      <form
        className={classes.form}
        onSubmit={handleFormSubmit(isSubmitEnabled)}
      >
        <FormControl required className={classes.formControl}>
          <InputLabel id='dificulty-select-label'>Select Dificulty</InputLabel>
          <Select
            labelId='dificulty-select-label'
            id='dificulty-select'
            className={classes.selectDificulty}
            value={dificultySelected}
            onChange={handleSelectDificulty}
          >
            {dificultiesName.map((name) => {
              const dificulty = { ...dificultiesList[name], name };
              console.log(dificulty);
              return (
                <MenuItem key={name} value={dificultiesList[name]}>
                  {stringFormatter(name)}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>choose dificulty</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            className={classes.playerNameInput}
            label='Player Name'
            onChange={handleSetPlayerName}
            value={player.name}
            required
            helperText='must be at least 4 characters'
            inputProps={{
              minLength: 4,
              maxLength: 20
            }}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <SubmitBtn isSubmitEnabled={isSubmitEnabled} />
        </FormControl>
      </form>
    </Box>
  );
});
