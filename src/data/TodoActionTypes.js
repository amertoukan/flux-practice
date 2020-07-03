import ToDoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    addTodo(text){
        TodoDispatcher.dispatch({
            type: ToDoActionTypes.ADD_TODO,
            text,
        });
    },
};

export default Actions; 