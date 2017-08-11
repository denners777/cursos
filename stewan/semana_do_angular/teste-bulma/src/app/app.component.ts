import { Component } from '@angular/core';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Semana do Angular';
  constructor(public servicoPessoa: PessoasService) { }

}
