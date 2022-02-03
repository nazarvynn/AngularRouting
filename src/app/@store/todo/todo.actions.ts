import { createAction, props } from '@ngrx/store';

import { ToDoItem } from '../../@shared/models/todo-item.model';

export const addToDoItem = createAction('[Todo] add todo item', props<{ toDoItem: ToDoItem }>());
export const updateToDoItems = createAction('[Todo] update todo items', props<{ toDoItems: ToDoItem[] }>());
