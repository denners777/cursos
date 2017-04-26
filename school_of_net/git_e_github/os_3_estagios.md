# Os 3 est�gios
Mostraremos como criar o primeiro reposit�rio Git e quais s�o os tr�s, principais, est�gios do processo. Utilizaremos alguns comandos, que talvez voc�s n�o conhe�am, para mostrar o processo. Fiquem tranquilos, falaremos sobre eles nos pr�ximos m�dulos. Por enquanto, apresentaremos o processo completo, para que voc�s tenham uma vis�o geral.

## Criando um reposit�rio
A primeira d�vida que pode surgir � sobre o que � um reposit�rio. Reposit�rio � uma pasta em que ficar�o todos os arquivos do projeto. A grande diferen�a desta pasta � que, quando iniciamos um reposit�rio no Git, os arquivos desta pasta passam a fazer parte do controle de vers�o. Sempre que falarmos de reposit�rio, daqui pra frente, estaremos falando de uma pasta que est� fazendo parte de um controle de vers�o.

Primeiro passo ser� criar uma pasta e depois acessar a mesma. Para isso utilizaremos os comandos abaixo:

Para criar a pasta:: ```$ mkdir aulagit```

Para acessar a pasta: ```$ cd aulagit```

Agora que estamos dentro da pasta criada, basta rodarmos, um simples comando, para que esta pasta passe a ser um reposit�rio. Vejam o comando abaixo:

```$ git init```
Ao rodarmos este comando, o Git criar� uma pasta oculta chamada .git. Para verificar se a pasta, realmente, existe podemos rodar o comando ```$ ls -la```. Este comando lista todos os arquivos e pastas, inclusive os ocultos.

Se acessarem este diret�rio, ver�o que existem diversos arquivos e pastas. Estes arquivos e pastas fazem parte da estrutura que o Git utilizar� para controlar as vers�es dos projetos. Para verificarem, rodem os comandos abaixo:

Acessar pasta .git: ```$ cd .git```

Listar itens internos: ```$ ls```

Desta forma, se quiserem destruir um sistema de vers�o de um projeto, basta apagarem esta pasta completa e n�o ter�o mais controle de vers�o, agindo sobre aquele projeto.

Com a cria��o do reposit�rio, criaremos um arquivo dentro desta pasta.

Criando arquivo: ```$ touch arquivo.txt```

Neste momento, s� criamos o arquivo, mas ele n�o tem conte�do nenhum. Abram este arquivo com qualquer editor de texto e criem um conte�do. N�s adicionamos o famoso Ol� Mundo.

A partir deste momento, conseguimos mostrar para voc�s os est�gios b�sicos de um commit. O Git possui 3 est�gios para a conclus�o do processo.

## Primeiro est�gio - Untracked Files
O primeiro est�gio � quando os arquivos s�o criados na pasta, mas como o arquivo � novo, ele se encontra no est�gio de **Untracked Files**, que � o caso do nosso **arquivo.txt**. Isso acontece porque ele � um arquivo desconhecido pelo git, ou seja, ele est� na pasta, mas o git ainda n�o est� controlando a vers�o do mesmo.

Para verificar este est�gio basta digitar o comando ```$ git status```. Este comando listar� todos os os arquivos novos e que sofreram modifica��es.

## Segundo est�gio - Changes to be committed
Para o nosso arquivo de exemplo passar para o segundo est�gio, precisamos rodar um comando que fa�a ele ser reconhecido pelo git. Veja, o comando abaixo:

```$ git add arquivo.txt```

Depois que rodamos este comando, o arquivo.txt n�o � mais untracked file, ele passa para uma posi��o intermedi�ria. Para verificarem, rodem, novamente, um ```$ git status```.

Nosso arquivo est� no segundo est�gio, que � conhecido como **Changes to be committed**, ou seja, os arquivos que estiverem neste est�gio, est�o prontos para serem commitados. Quando falamos commitados, estamos querendo dizer que este arquivo far� parte, **efetivamente**, do reposit�rio, ap�s este procedimento. Quando executamos um commit, o git cria um hash ou identifica��o deste commit.

Terceiro est�gio - Committed
O terceiro est�gio � quando o arquivo j� foi commitado. Ent�o rodaremos o comando abaixo para que o nosso arquivo de exemplo fa�a parte deste �ltimo est�gio.

```$ git commit -m "Meu primeiro commit"```

Observem que estamos rodando o comando commit e passando um par�metro -m que serve para adicionarmos uma mensagem de identifica��o para nosso commit. � esta mensagem que nos permite acompanhar todos os est�gios do desenvolvimento de um projeto. Ela deve ser muito explicativa, para quem ler, saber o que realmente foi feito naquele commit.

Neste est�gio, se rodarem o comando $ git status, ver�o que teremos uma mensagem dizendo que n�o existe mais nada para commitar, � como se o processo tivesse sido finalizado e o git est� limpo de qualquer interfer�ncia. N�s s� conseguiremos realizar o procedimento, novamente, caso um novo arquivo seja adicionado, removido ou modificado. Caso um destes tr�s fatores ocorram, teremos o git status retornando processos a serem efetivados.

## Verificando hist�rico de commits
Para saberem se este arquivo foi comitado e para verificarem outros commits, anteriores, basta rodarem o seguinte comando:

```$ git log```

Este comando retornar� uma listagem dos �ltimos commits com o hash de identifica��o, a data e tamb�m o usu�rio que foi respons�vel pelo commit, que no caso ser� o seu usu�rio, que configuramos no m�dulo anterior.

Vale a pena falar que, em um commit, podem haver um ou mais arquivos que foram criados ou modificados. Em nosso exemplo, commitamos apenas um arquivo, mas poderiam ser v�rios, e o procedimento seria o mesmo.

## Alterando um arquivo do controle de vers�o
Para que entendam como funciona a atualiza��o de arquivos, que j� fa�am parte do controle de vers�o, abram o arquivo de exemplo e fa�am qualquer altera��o nele. Depois de fazerem a altera��o, salve e feche-o.

Em seguida, acessem o terminal e rodem o comando ```$ git status```. Ver�o que o git informar� que este arquivo faz parte do controle de vers�o e que ele foi modificado. A partir deste ponto voc�s podem retornar ao segundo est�gio, basta que o adicionem, novamente, rodando o comando ```$ git add arquivo.txt```.

Depois de rodarmos este comando, o adicionamos ao segundo est�gio, ou seja, preparamos, novamente, para um segundo commit e � o que faremos agora:

```$ git commit -m "Alterando o arquivo.txt"```

Nunca conseguimos pular um dos est�gios. N�o conseguiremos commitar, sem antes ter adicionado um arquivo ou v�rios arquivos.

Depois de commitar, novamente, podemos rodar ```$ git status``` e teremos a seguinte mensagem: **nothing to commit, working directory clean**. Isso quer dizer que, n�o existem mais processos em aberto para serem comitados e que estamos com o diret�rio limpo, ou seja, todos arquivos que estiverem l� dentro est�o versionados pelo git.

Para analisar os commits j� efetuados, lembrem de rodar o comando ```$ git log```. Voc�s conseguir�o ver os dois commits efetuados, at� agora, neste m�dulo.

## Conclus�o
Este m�dulo foi espec�fico para passar o conceito do processo, de forma geral. Resumindo, podemos falar que, sempre que criarmos um arquivo, ele far� parte do primeiro est�gio de **untracked file** e teremos que adicion�-lo a uma �rea intermedi�ria que o prepara para entrar no segundo est�gio, onde ele estar� pronto para ser commitado **Changes to be committed** e por �ltimo, podemos lev�-lo ao terceiro est�gio, efetuando o commit.

Lembrando que o arquivo, quando � modificado, ele volta ao primeiro est�gio, mas n�o mais como untracked, ele apenas fica em uma �rea intermedi�ria, esperando ser adicionado e commitado, novamente.

Gostar�amos de lembr�-los que, todo este processo que estamos fazendo, � totalmente local e n�o depende de nenhum servidor ou servi�o externo.

Fa�am testes e modifica��es, brinquem bastante com os comandos que acabamos de passar e sigam estes exemplos para que possam fixar o conte�do.

Acreditem! Se quiserem ser desenvolvedores, ter�o que dominar o Git em todos os seus projetos.