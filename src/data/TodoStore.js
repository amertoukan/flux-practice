import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoStore extends ReduceStore{
    constructor(){
        super(TodoDispatcher)
    }

    getInitialState(){
        return Immutable.OrderedMap();
    }

    reduce (state, action){
        switch(action.type){
            case TodoActionTypes.ADD_TODO: 
            //Do nothing for now logic will be added shortly
            return state;
        default: 
            return state
        }
    }
}

export default new TodoStore;