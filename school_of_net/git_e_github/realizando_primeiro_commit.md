# Realizando primeiro commit
Neste m�dulo, voc�s far�o o primeiro commit em um reposit�rio online.

Passaremos algumas dicas para que possam concluir o commit sem ter aquele medo que todos tem, quando come�am a trabalhar com um sistema de controle de vers�o.

Para isso, criaremos um novo arquivo dentro da pasta **aulagit**, que criamos no m�dulo anterior. Criaremos o arquivo com o nome de **teste.php**. Em seguida, rodaremos o **git status**, para que possam ver o primeiro est�gio de **Untracked File**, por se tratar de um arquivo novo e n�o fazer parte do controle de vers�o.

O pr�ximo passo � rodar o comando que prepara o(s) arquivo(s), para serem comitados.

```$ git add teste.php```

Desta forma, j� temos nosso arquivo pronto para ser comitado. Neste ponto, temos duas op��es:

1. ```$ git commit -m "descricao"```
2. ```$ git commit```

Observem que, na primeira op��o voc� pode adicionar uma descri��o, diretamente no comando, para representar o commit. Mas no dia a dia, ver�o que, dificilmente, ser� desta forma, porque, normalmente, precisamos comitar mais do que um arquivo de uma s� vez, logo, a segunda forma � mais indicada.

Quando rodamos o commit, sem passar mensagem, o terminal abrir� um editor de texto for�ando que coloquemos uma descri��o para o commit. Geralmente, no mac, pode ser que abra com o editor Vim, no Linux pode ser o Nano e no Windows, um bloco de notas. O importante � saberem que o git abrir� o editor padr�o, do sistema operacional, para que seja feita a descri��o do commit.

Ao abrir o editor, ele mostrar� uma lista de todos os arquivos que est�o preparados para serem comitados, facilitando assim a sua descri��o. Quando utilizam a primeira forma, com o **-m**, voc�s podem esquecer algum arquivo que foi editado e acabar esquecendo de inclu�-lo na descri��o.

Quando trabalhamos em um projeto real e comitamos v�rios arquivos de uma vez, a descri��o deve ser a melhor poss�vel para que todos possam saber, exatamente, o que aquele commit representou para aquela etapa do projeto. Tenham muita calma sempre que forem criar esta descri��o, fa�am com muito carinho.

Uma dica, para melhorar a descri��o de commits, principalmente com muitos arquivos, � trabalharem com t�picos. Vejam um exemplo:
```
- Criando arquivo teste.php
- Fazendo o arquivo teste pegar dar um echo teste
```
Adicionem o coment�rio da forma acima, salvem o arquivo e feche-o, concluindo o commit. Depois, basta rodar um **git log** para visualizar os commits e perceber que desta forma a descri��o fica muito mais f�cil de entender. Esta � apenas uma dica, voc�s podem criar a descri��o da maneira que for melhor para voc�s.

Outra dica que podemos passar a voc�s, para que voc�s possam ganhar tempo e produtividade, � adicionarem todos os arquivos modificados, e untracked files, de uma s� vez.

J� possu�mos 2 arquivos em nossa pasta. Para ver o exemplo funcionando, editem os dois arquivos, para que os dois estejam no estado de arquivos modificados.

Em seguida, ao inv�s de adicionar um por um, voc�s rodar�o o comando abaixo:

```$ git add .```

Desta forma, voc�s adicionam todos os arquivos, de uma s� vez, preparando-os para serem commitados. Imaginem quando existem 10 arquivos, ou mais, para serem adicionados. Esta dica pode ser muito �til, mas cuidado, voc�s podem se perder, caso exista algum arquivo que n�o era pra ser adicionado ao commit. Desta forma, voc�s ganham tempo e caso cometam algum erro, ter�o como reverter.

Existe uma outra maneira de agilizar o processo e comitar todos arquivos de uma vez. Vejam o comando abaixo:

```$ git commit -a -m "Comitando arquivo e teste juntos"```

O comando -a faz com que os arquivos sejam todos adicionados automaticamente, passando-os para o segundo est�gio e j� comita passando mensagem. Todo processo � feito automaticamente. S� rodem este comando, quando tiverem certeza de que todos os arquivos pertencer�o ao controle de vers�o. Caso contr�rio, ter�o que voltar ao commit anterior, para fazer altera��es.

Quando a maioria dos arquivos deva ser adicionada ao segundo est�gio para serem comitados, mas n�o todos, voc�s podem adicionar os arquivos, manualmente, ou podem adicionar tudo e remover, apenas, o que n�o faz parte. Para remover um arquivo que j� foi adicionado, rodem o comando abaixo:

```$ git reset HEAD --nome_do_arquivo```

O **reset HEAD** � respons�vel para desfazer o comando add.
Voc�s podem praticar e fazer seus commits para fixarem o conte�do.
Acreditem! Voc�s utilizar�o estes comandos, o tempo todo. Pratiquem muito.