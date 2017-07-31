import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carro } from '../../domain/carro/carro';

import { Http } from '@angular/http';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;

  public nome: string;
  public endereco: string;
  public email: string;
  public data: string = new Date().toISOString();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http) {

    this.carro = navParams.get('carro');
    this.precoTotal = navParams.get('precoTotal');

  }
  agenda() {
    let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${this.carro.nome}&nome=${this.nome}&preco=${this.precoTotal}&endereco=${this.endereco}&email=${this.email}&dataAgendamento=${this.data}`;
    
    this._http
      .get(api)
      .toPromise()
      .then(() => alert('Agendou'))
      .catch(err => {
        console.log(err);
        alert('Deu problema!');
      }
    );
  }
}
