import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { toDoReducer, ToDoState } from './todo/todo.reducers';

export interface AppState {
    todo: ToDoState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    todo: toDoReducer,
};

function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return (state: AppState, action: Action): AppState => {
        return reducer(state, action);
    };
}

export class ClearState implements Action {
    readonly type = 'CLEAR_STATE';
}

export const metaReducers: MetaReducer<AppState>[] = [clearState];
