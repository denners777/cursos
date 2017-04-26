#Sistema centralizado vs descentralizado#
Neste m�dulo falaremos, especificamente, sobre a diferen�a entre sistema de controle de vers�o centralizado e descentralizado.

Para come�armos a explicar, podemos falar de dois sistemas: CVS e SVN, ou Subversion. Nestes modelos de sistemas, normalmente, existe um reposit�rio central, que armazenamos todo o c�digo. Quando precisamos fazer alguma altera��o, baixamos o c�digo, fazemos a altera��o e depois, fazemos um commit. O commit � o momento em que informamos, ao sistema, que estamos gerando uma vers�o daquela altera��o que acabamos de fazer.

Quando o sistema � centralizado, no momento em que executamos um commit, o sistema far� um upload do arquivo para o servidor e quando, qualquer outro desenvolvedor, for fazer qualquer altera��o, ele ter� que baixar, novamente, o c�digo, gerando um update. Dessa forma, ele recebe as altera��es que foram executadas no reposit�rio, para, somente depois, come�ar a desenvolver qualquer outra atualiza��o ou melhoria.

Notem que, voc�s s� conseguir�o executar commits no reposit�rio, se tiverem acesso � internet, uma vez que o sistema � centralizado e depende do servidor online, para fazer a atualiza��o. Se estiverem trabalhando em algum lugar, que n�o tenha acesso � internet, voc�s n�o conseguir�o fazer um commit.

Isso � um grande transtorno, porque, quanto mais commits fizerem, melhor ser� para o projeto. Trabalhando com conceito de micro commits, facilita na hora de acompanharem a evolu��o do projeto. Suponham desenvolver o dia inteiro e no final, fazem o commit. Qual a vantagem que tiveram? Se precisarem voltar uma vers�o, perder�o todo o c�digo desenvolvido, sendo que, muitas coisas poderiam ser reaproveitadas daquele dia inteiro de trabalho.

O grande problema � que, sempre que precisarem evoluir o controle de vers�o, dever�o estar conectados � internet para enviarem para o reposit�rio central. Isso �, extremamente, ruim para quem trabalha com desenvolvimento.

Quando o Git surgiu, ele veio quebrando este paradigma. Ele trabalha como, se cada m�quina em que estiver instalado, fosse um servidor, ou seja, � um reposit�rio. O dono deste reposit�rio pode dar quantos commits ele quiser.

Suponham pegar o reposit�rio de algu�m e fazer um clone para m�quina. Voc�s poder�o fazer altera��es e dar commits, localmente, sem precisar da internet, inclusive. Quando acharem que chegou o momento de enviarem para o repos�t�rio, s� precisam rodar o comando push, que subir�o para o reposit�rio online. O Git tentar� unir as altera��es com os c�digos que estiverem no reposit�rio. Se ele n�o conseguir, ele pedir� para corrigir alguns detalhes e enviar, novamente. Isto ocorre quando, mais de uma pessoa, est� trabalhando em cima do mesmo reposit�rio e as duas tentam dar um push, ao mesmo tempo.

O grande ponto � que, n�o precisam mais trabalhar de forma centralizada. Cada pessoa pode ter seu pr�prio seu reposit�rio, localmente, e trabalhar de forma, independente. Outra vantagem � que, desta forma descentralizada, o ganho de produtividade � muito grande.

Al�m de todas estas vantagens, utilizar o Git faz com que voc�s projetem suas aplica��es de forma diferente do que as convencionais. Suponham estar desenvolvendo um c�digo, mas n�o querem que muitas pessoas saibam o processo que fizeram para desenvolver. Para isso, voc�s podem criar um branch, que � uma ramifica��o do projeto. N�o existe uma quantidade m�xima de branchs a serem criados, logo, voc�s podem criar quantos forem necess�rios para organizarem o desenvolvimento do projeto.

Assim, ter�o que fazer um merge, que unificar� os c�digos e, somente depois disso, enviar�o para o reposit�rio central. O mais interessante � que, quem recebe estes dados do reposit�rio central, n�o consegue saber que voc� trabalhou com diversos branchs internos, porque isso � particular e voc� trabalha da sua forma.

No sistema antigo, isso era imposs�vel, porque se criassem um branch, este branch deveria ser enviado de forma p�blica, a todos.

Al�m de tudo, o Git oferece uma forma muito simples de trabalhar, voc�s ver�o que, com apenas alguns comandos, j� conseguem ter muito poder em suas m�os. Quanto mais utilizarem a ferramenta, mais pr�tica ganhar�o e n�o temos d�vidas, de que voc�s gostar�o muito e nunca mais deixar�o de utiliz�-la.

Esperamos que tenham entendido a diferen�a entra sistema de controle de vers�o centralizado e descentralizado.