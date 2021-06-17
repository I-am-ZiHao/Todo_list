const getIconFromTodoStatus = (status: TodoStatus) => {
  switch (status) {
    case 'TODO':
      return 'time'
    case 'DOING':
      return 'spinner'
    case 'DONE':
      return 'close'
  }
}

export default getIconFromTodoStatus;