# Brincando com fluxo de commits
Explicaremos como funciona toda a estrutura de fluxo de commits.

Passaremos por todos os est�gios de um commit. Faremos o caminho natural do processo e voltaremos, para que se adaptem e percam o medo de trabalharem com sistemas de controle de vers�o.

Para nossos testes, criaremos um outro arquivo, chamado **teste2.txt**. Passando pelo git status, sabemos que ele estar� no est�gio de untracked files, por se tratar de um arquivo novo.

Adicionaremos, preparando para o commit. Depois, rodaremos o git status, novamente, para comprovar que ele se encontra no segundo est�gio e pronto para ser comitado.

Suponham que, tenham adicionado o arquivo errado e queriam reverter esta situa��o. Ou que tenham adicionado todos os arquivos, de uma vez, e queiram remover, apenas um, que n�o far� parte do commit. Para estes casos, existem os comandos **reset HEAD** e **checkout**. O reset HEAD, serve para voltar untracked files e o checkout, para voltar arquivos que j� foram adicionados e est�o modificados.

Fiquem atentos, o Git sempre � muito informativo e nos ajuda o tempo todo. Ele sempre trar� estas possibilidades e dicas.

Como criamos um novo arquivo, vamos utilizar o reset HEAD. Vejam o comando abaixo:

```$ git reset HEAD teste2.txt```

Depois de rodarem este comando, se rodarem o git status, ver�o que ele sai do segundo est�gio e volta ao primeiro, como Untracked.

Simularemos um outro caso, muito normal no dia a dia do programador, que � adicionar todos os arquivos de uma vez e remover, apenas, os que n�o fazem parte. Suponham que temos dez arquivos, oito deles devam fazer parte do commit e dois n�o. Logicamente que, � mais f�cil adicionarmos todos e removermos, apenas dois, do que ter que adicionarmos oito, manualmente. Vamos fazer este teste, mas com menos arquivos.
```
$ touch teste3.txt

$ touch teste4.txt
```
Se rodarmos o git status, teremos 3 arquivos no est�gio untracked files. Adicionaremos todos, com o comando ```$ git add .``` e depois removeremos, apenas, um deles.
```sh
valls:aulagit son$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   teste2.txt
    new file:   teste3.txt
    new file:   teste4.txt

valls:aulagit son$
```
Removeremos o teste2.txt, para que ele n�o fa�a parte do commit. Notem que, o pr�prio Git est� passando o comando para remover.

```$ git reset HEAD teste2.txt```
```sh
valls:aulagit son$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   teste3.txt
    new file:   teste4.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

    teste2.txt
```
Ap�s prepararem todo o commit, deixando somente os arquivos que dever�o fazer parte dele, basta realizarem o commit. Saibam que, depois do commit, voc�s n�o conseguem, fazer mais nada, somente voltar a vers�o anterior. Fa�am tudo que tiverem que fazer, antes do commit.