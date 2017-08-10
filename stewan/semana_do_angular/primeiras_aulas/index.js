const _ = require('lodash');

let games = [
    {
        nome: 'Street Fighter',
        ano: 1990
    },
    {
        nome: 'Mortal Kombat',
        ano: 1991
    },
    {
        nome: 'Top Gear',
        ano: 1992
    },
    {
        nome: 'Golden Axe',
        ano: 1986
    },
    {
        nome: 'Top Gear',
        ano: 1990
    },
];

//buscar o jogo Top Gear

let resultado, evens;

resultado = _.find(games, {
    nome: 'Top Gear'
});

resultado = _.filter(games, (jogo_atual) => {
    return jogo_atual.ano >= 1991;
});

resultado = _.orderBy(games, ['nome', 'ano'], ['asc', 'desc']);

resultado = _.reverse(games);

evens = _.remove(games, {
    nome: 'Top Gear'
});

console.log(resultado);