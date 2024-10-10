import classes from '../todo/todo.css';

function Todo(props) {
  return (
    <div className={classes.todo}>
      {props.todo}
    </div>
  );
}

export default Todo;
