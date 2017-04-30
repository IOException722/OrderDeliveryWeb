import { Routes, RouterModule } from "@angular/router";
import {AUTH_ROUTES} from "./auth/auth.routing";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { SignupComponent } from "./auth/signup.component";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/message', pathMatch: 'full' },
    { path: 'message', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent , children :AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
