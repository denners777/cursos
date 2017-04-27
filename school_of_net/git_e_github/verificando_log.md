# Verificando log
J� vimos o comando **git log** e sabemos que ele lista os commits efetuados. Neste m�dulo, ensinaremos um pouco mais sobre este comando e como trabalharem com ele.

O git log � uma ferramenta, extremamente, importante e poderosa para utilizarem.

Quando rodamos um git log, conseguimos ver os logs de todos os commits, por ordem decrescente.

O grande ponto � que, voc�s devem dominar este comando. Fiquem tranquilos, n�o estamos pedindo para que voc�s decorem todas as op��es que este comando oferece, anotar, algumas delas, ajudaria bastante.

A primeira op��o que mostraremos � a seguinte:

```$ git log -p```

Este comando, al�m de mostrar os logs, mostrar� a altera��o que foi feita em cada arquivo comitado. Costumamos chamar estas altera��es de diferen�as entre o arquivo, antes do commit e depois do commit.

Este comando, ao mesmo tempo que � muito bom, pode acabar se tornando chato, porque voc�s podem n�o querer ver todos os logs e altera��es. Para isso, voc�s tem a op��o de rodar o seguinte comando:

```$ git log -p -2```

Neste caso, estamos limitando o n�mero de resultados que o comando mostrar�. Como passamos -2, como par�metro, teremos apenas 2 resultados listados. Este comando � muito utilizado quando queremos saber o que foi alterado no, �ltimo ou nos �ltimos, commits do projeto e esta � uma forma r�pida de se fazer isso.

Outro comando que voc�s podem utilizar � o **stat**:

```$ git log --stat```

Este comando mostra o git log, mas com estat�stica de todos os commits, dizendo qual arquivo entrou e qual saiu ou qual linha entrou e qual linha saiu.

Voc�s podem querer deixar a listagem de logs mais enxuta, removendo alguns dados que poluem o seu terminal. Para isso rodem o seguinte comando:

``````$ git log --pretty=oneline```

Com este comando, teremos todos os logs de uma forma mais amig�vel, sendo apresentado um por linha.
```
3b8b671e28fad9c4294baef05bf42f5ab3b931f2 Comitando arquivo e teste juntos
a7e09ab07b1f6622a49ebfb59fc76c77358d6caf - Criando arquivo teste - Fazendo arquivo teste.oho dar um echo teste
db199caf4d052f4202f5565092887b9b139a9de1 Alterando arquivo.txt
35b7e3166118e41b66cf463bc677880a88840706 Meu primiero commit
Observem que ele mostra, apenas, o hash e o coment�rio.
```
Existe outro tipo de comando, utilizando o **pretty**.

```$ git log --pretty=format:"%h - %an, %ar : %s"```
```
3b8b671 - Wesley Willians, 11 minutes ago : Comitando arquivo e teste juntos
a7e09ab - Wesley Willians, 13 minutes ago : - Criando arquivo teste - Fazendo arquivo teste.oho dar um echo teste
db199ca - Wesley Willians, 14 minutes ago : Alterando arquivo.txt
35b7e31 - Wesley Willians, 15 minutes ago : Meu primiero commit
```
Observem que esta, � uma forma simplificada de mostrar os logs, por�m com mais informa��es.

Lembrando que voc�s n�o devem decorar todos estes commits, basta saberem que existem estas op��es de visualiza��es e com o tempo voc�s gravar�o os comandos mais utilizados. Temos outro comando, muito �til, para quando precisamos do hist�rico de commits. Suponham que precisem saber quais foram os commits dos dois �ltimos dias.

```$ git log --since=2.days``` ou ```$ git log --since=2.weeks```, caso queiram saber as duas �ltimas semanas.

Gostar�amos de dizer que existem muitas outras op��es para o comando git log. Estes, s�o os mais utilizados.

Como j� falamos, n�o tentem decorar, mas pratiquem muito e deixem alguns comandos, principais, anotados para que possam relembrar, at� que estes comandos se tornem familiares a voc�s.