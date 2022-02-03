import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, ToDoActions, ToDoSelectors } from '../../@store';
import { take } from 'rxjs';
import { ToDoItem } from '../../@shared/models';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    items: ToDoItem[];

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {}

    addToDoItem(toDoItem: ToDoItem): void {
        this.store.dispatch(ToDoActions.addToDoItem({ toDoItem }));
    }

    loadToDoItems(): void {
        this.store
            .select(ToDoSelectors.getToDoItems)
            .pipe(take(1))
            .subscribe((toDoItems: ToDoItem[] = []) => {
                this.items = toDoItems;
            });
    }
}
