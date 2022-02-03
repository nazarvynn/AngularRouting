import { Action, createReducer, on } from '@ngrx/store';

import { ToDoItem } from '../../@shared/models/todo-item.model';
import { ToDoActions } from './index';
import * as AppStateActions from '../app-state.actions';

export interface ToDoState {
    toDoItems: ToDoItem[];
}

const initialState: ToDoState = {
    toDoItems: []
};

export const reducer = createReducer(
    initialState,
    on(AppStateActions.updateManifest, (state, { manifest }) => {
        return {
            ...state,
            toDoItems: manifest.todos || []
        };
    }),
    on(ToDoActions.updateToDoItems, (state, { toDoItems }) => {
        return {
            ...state,
            toDoItems
        };
    }),
    on(ToDoActions.addToDoItem, (state, { toDoItem }) => {
        return {
            ...state,
            toDoItems: [...state.toDoItems, toDoItem]
        };
    })
);

export function toDoReducer(state: ToDoState | undefined, action: Action) {
    return reducer(state, action);
}
