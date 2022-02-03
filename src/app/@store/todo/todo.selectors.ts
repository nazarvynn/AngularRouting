import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ToDoState } from './todo.reducers';
import { ToDoItem } from '../../@shared/models/todo-item.model';

const getToDoState = createFeatureSelector<ToDoState>('todo');

export const getToDoItems = createSelector(getToDoState, (state: ToDoState): ToDoItem[] => state.toDoItems);

export const getToDoItemsCount = createSelector(getToDoState, (state: ToDoState): number => state.toDoItems.length);
