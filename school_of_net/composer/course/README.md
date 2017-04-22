# Introdução
Composer mudou a vida da programação em PHP, unindo a comunidade em torno de uma grande rede de compartilhamento. Bibliotecas e soluções disponíveis para ampliar sistemas, contam com um gerenciamento prático e fácil, graças ao Composer. Aprendam a trabalhar com o gerenciamento de dependências mais utilizado no mundo PHP e criem um pacote personalizado para compartilhar soluções com programadores do mundo todo. Esse curso abordará aspectos básicos e ensinará a configurar e compartilhar bibliotecas ou pacotes personalizados.

Vamos entender como funciona o processo de gerenciamento de dependência e aprenderemos, também, a trabalhar com o Composer, na prática.

Quando falamos que podemos ampliar os projetos ou aplicações, utilizando bibliotecas de terceiros de forma fácil, é porque o Commposer nos permite isso. Com apenas um comando, podemos ter todas as bibliotecas que o projeto precisar.

Sempre que precisarem resolver algum problema no projeto, vocês podem pesquisar para saber se alguém já disponibilizou algo pronto para que possam utilizar. E quem irá ajudar a gerenciar estas ferramentas é o Composer.

O Composer tem unido toda a comunidade PHP. Ele é o elo dessa ajuda mútua.

O que precisamos para configurar o composer no projeto
Em primeiro lugar precisamos criar um arquivo chamado composer.json. Este arquivo terá uma lista de todas as bibliotecas que iremos precisar no projeto e todas as versões são definidas nele.

O composer precisará estar instalado na máquina. Vocês poderão baixar o arquivo composer.phar, que é um arquivo compactado e criado com PHP, para executar os comandos, diretamente, ou podem configurar as variáveis de ambiente para conseguir executar no console, no local que estiver.

Se for utilizar o composer.phar, este arquivo deverá ir para a raiz do projeto e rodaremos o seguinte comando:

```sh
$ php composer.phar install
```

Este comando procurará o arquivo composer.json e instalará todas as dependências do projeto, que foram configuradas neste arquivo, anteriormente.

Se vocês configurarem a variável de ambiente, poderão executar, diretamente, utilizando o comando abaixo:

```sh
$ php composer.phar install
```

Ambos, fazem a mesma coisa, mas este segundo é o ideal para quem trabalha muito com o composer. Uma vez que fez esta configuração, os projetos não precisam mais ter o arquivo composer.phar em sua raiz. Executamos este mesmo arquivo de outro local da máquina.

Esta instalação do composer gerará uma pasta chamada vendor no projeto e nela estarão todas as dependências instaladas. Vocês terão a configuração do autoload, feita pelo composer, automaticamente, se configurarem no arquivo composer.json.

Além de aprender a trabalhar com o composer, vocês irão aprender a criar uma biblioteca e disponibilizar esta biblioteca para outra pessoas poderem utilizar. Esta é a essência do Composer. Poder ajudar pessoas de uma forma muito fácil e rápida.