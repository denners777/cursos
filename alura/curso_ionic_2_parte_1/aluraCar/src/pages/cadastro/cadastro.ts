import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';

import { HomePage } from '../home/home';

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
  private _alerta: Alert;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http,
    private _alertCtrl: AlertController
  ) {

    this.carro = navParams.get('carro');
    this.precoTotal = navParams.get('precoTotal');

    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });

  }
  agenda() {
    let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${this.carro.nome}&nome=${this.nome}&preco=${this.precoTotal}&endereco=${this.endereco}&email=${this.email}&dataAgendamento=${this.data}`;

    this._http
      .get(api)
      .toPromise()
      .then(() => {
        this._alerta.setSubTitle('Agendamento realizado com sucesso!');
        this._alerta.present();
      })
      .catch(err => {
        console.log(err);
        this._alerta.setSubTitle('Não foi possível realizar o agendamento. Tente mais tarde.');
        this._alerta.present();
      }
      );
  }
}
