import { useTodoList } from "../hooks/todo";
import TodoInput from "../components/TodoInput";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { List } from "@material-ui/core";
import TodoItem from "../components/TodoItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: 20,
    },
    item: {
      margin: 10,
    },
  })
);

const HomePage = () => {
  const { todoList, addTodoItem, removeTodoItem } = useTodoList();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item className={classes.item}>
          <TodoInput
            label="TODO"
            placeholder="add TODO item..."
            onSubmit={(title) => addTodoItem(title, "TODO")}
          />
        </Grid>
        <Grid item className={classes.item}>
          <TodoInput
            label="DOING"
            placeholder="add DOING item..."
            onSubmit={(title) => addTodoItem(title, "DOING")}
          />
        </Grid>
        <Grid item className={classes.item}>
          <List>
            {todoList.map((todoItem) => {
              return (
                <TodoItem
                  key={todoItem.id}
                  status={todoItem.status}
                  title={todoItem.title}
                  onRemove={() => removeTodoItem(todoItem.id)}
                />
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
