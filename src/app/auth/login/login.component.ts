import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, ClearState } from '../../@store';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {}

    logout(): void {
        this.store.dispatch(new ClearState());
    }
}
