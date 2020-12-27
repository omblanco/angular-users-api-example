import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MongoUsersComponent } from './components/mongo-users/mongo-users.component';
import { MysqlUsersComponent } from './components/mysql-users/mysql-users.component';

@NgModule({
  declarations: [
    AppComponent,
    MongoUsersComponent,
    MysqlUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
