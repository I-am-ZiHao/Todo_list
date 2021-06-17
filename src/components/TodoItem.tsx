import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import getIconFromTodoStatus from '../utils';

type TodoItemProps = {
  status: TodoStatus,
  onRemove?: () => void;
  title: string;
  // children: string  // my code: or todoItem.title cannot be placed in <TodoItem></TodoItem>
}

const TodoItem = ({status, onRemove, title}: TodoItemProps) => {
  const IconForTimeAndSpinner = () => {
    if (getIconFromTodoStatus(status) === 'time') {
      return <AccessTimeIcon />;
    }
    return <CircularProgress />;
  }

  return (
    <ListItem>
      <ListItemIcon onClick={ () => onRemove && onRemove()}>
        <CloseIcon />
      </ListItemIcon>
      <ListItemIcon>
        <IconForTimeAndSpinner />
      </ListItemIcon>
      <ListItemText>
        {title}
      </ListItemText>
    </ListItem>
  )
}

export default TodoItem;