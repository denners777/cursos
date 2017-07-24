import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyDT4gs0ltWU-_G7w_-nfljco0YIwzY7wuc",
  authDomain: "cursos-760e1.firebaseapp.com",
  databaseURL: "https://cursos-760e1.firebaseio.com",
  projectId: "cursos-760e1",
  storageBucket: "",
  messagingSenderId: "258361656437"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }