import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './mycompo/todo/todo.component';
import { AddtodoComponent } from './mycompo/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mycompo/about/about.component';
import { HomeComponent } from './mycompo/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddtodoComponent,
    AboutComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
