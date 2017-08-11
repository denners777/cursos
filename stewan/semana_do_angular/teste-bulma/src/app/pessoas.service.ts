import { Injectable } from '@angular/core';

@Injectable()
export class PessoasService {
  pessoa_selecionada: any = {};

  lista: any[] = [
    {
      nome: 'Fulano',
      idade: 26,
      descricao: 'Cara <b>legal</b>'
    },
    {
      nome: 'Beltrano',
      idade: 17,
    },
    {
      nome: 'Ciclano',
      idade: 18,
    },
    {
      nome: 'Deltrano',
      idade: 15,
    },
    {
      nome: 'Etano',
      idade: 20,
    },
  ];

  constructor() { }

  selecionaPessoa(pessoa: any) {
    this.pessoa_selecionada = pessoa;
  }

}
