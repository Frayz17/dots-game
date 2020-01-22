import React from 'react';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function ConfigInputs() {
  const [dificulties, setDificulties] = React.useState({});
  const [selectedDifficulty, setSelectedDifficulty] = React.useState('');

  const classes = useStyles();

  React.useEffect(() => {
    (async () => {
      try {
        const result = await axios(
          'https://starnavi-frontend-test-task.herokuapp.com/game-settings'
        );
        setDificulties(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleSelectDificulty = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const dificultiesName = Object.keys(dificulties);
  console.log(dificultiesName);
  console.log('selectedDifficulty', selectedDifficulty);

  return (
    <Box>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>Select Dificulty</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selectedDifficulty}
          onChange={handleSelectDificulty}
        >
          {dificultiesName.map((item) => {
            const formattedName =
              item.charAt(0).toUpperCase() +
              item.substring(1).replace(/([a-z])([A-Z])/, '$1 $2');
            return (
              <MenuItem key={item} value={dificulties[item]}>
                {formattedName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* InputName, BtnPlay */}
    </Box>
  );
}
