import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const Todo = ({ id, name, deleteTodo }) => {
  const classes = useStyles();

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <h2>{name}</h2>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Todo;
