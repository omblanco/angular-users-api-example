import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MongoUsersComponent } from './components/mongo-users/mongo-users.component';
import { MysqlUsersComponent } from './components/mysql-users/mysql-users.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'mongo-users'},
  {path: 'mongo-users', component: MongoUsersComponent},
  {path: 'mysql-users', component: MysqlUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
