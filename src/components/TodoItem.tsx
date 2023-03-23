import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import getIconFromTodoStatus from "../utils";
import { IconButton } from "@material-ui/core";

type TodoItemProps = {
  status: TodoStatus;
  onRemove?: () => void;
  title: string;
};

const TodoItem = ({ status, onRemove, title }: TodoItemProps) => {
  const IconForTimeAndSpinner = () => {
    if (getIconFromTodoStatus(status) === "time") {
      return <AccessTimeIcon />;
    }
    return <CircularProgress />;
  };

  return (
    <ListItem>
      <IconButton
        onClick={() => onRemove?.()}
        style={{
          marginRight: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <ListItemIcon>
        <IconForTimeAndSpinner />
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
};

export default TodoItem;
