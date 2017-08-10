console.log('loading...');

somar(2, 2).then((soma) => {
    console.log('soma: ', soma);
    dividir(soma, 2).then((divisao) => {
            console.log('done...');
            console.log('dividir: ', divisao);
        })
        .catch((e) => {
            console.log('Erro ao dividir');
        });
});


function somar(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let resultado = a + b;
            resolve(resultado);
        }, 3 * 1000);
    });
}

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        let resultado = a / b;
        if (resultado <= 2) {
            reject('Resultado incorreto');
        }
        resolve(resultado);
    });
}