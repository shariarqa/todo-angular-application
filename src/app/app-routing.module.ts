import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {ListodoComponent} from './listodo/listodo.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {AddressbookComponent} from "./component/addressbook/addressbook.component";
import {TodoComponent} from "./todo/todo.component";



const routes: Routes = [
  {path: '', component: LoginComponent, },
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'welcome', component: WelcomeComponent,  canActivate: [RouteGuardService]},
  {path: 'todos', component: ListodoComponent,  canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent,  canActivate: [RouteGuardService]},
  {path: 'addressbook', component: AddressbookComponent,  canActivate: [RouteGuardService]},
  {path: 'todos/:id', component: TodoComponent,  canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
