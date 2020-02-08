import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const StyleCell = makeStyles((theme) => ({
  td: {
    borderLeft: `1px solid ${grey[700]}`,
    borderTop: `1px solid ${grey[700]}`
  }
}));

export default StyleCell;
