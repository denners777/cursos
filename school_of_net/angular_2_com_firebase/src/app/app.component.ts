import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import 'material-design-lite/material.min';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.items = this.af.database.list('/angular_firebase');

  }

}