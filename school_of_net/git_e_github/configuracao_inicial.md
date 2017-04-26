# Configura��o inicial
Neste m�dulo mostraremos quais as principais configura��es que voc�s dever�o realizar para trabalharem com o Git. Tratam-se de dois comandos, apenas, para que isso seja poss�vel.

O primeiro passo ser� abrir o terminal, se estiverem no Mac ou Linux. Se estiverem utilizando Windows, podem utilizar o Git Bash, que vem junto com o Git. N�o utilizem o prompt do MS-DOS, porque ele � muito ruim. O Git Bash simular� um ambiente Unix para facilitar o trabalho.

Em seguida, digitem git no terminal, para saberem se est� instalado ou n�o, e apertem o enter. Caso n�o esteja instalado dever�o instal�-lo.

Se estiver instalado, receber�o uma listagem de comandos do Git. Uma dica, para quem utiliza Windows �, verificar se a vari�vel de ambiente est� devidamente configurada. Esta dica serve para os casos de digitarem git no Git Bash e n�o obterem nenhum retorno. Muitas vezes o git pode estar instalado, mas o execut�vel n�o est� configurado nas vari�veis de ambiente, neste caso o terminal n�o reconhecer� o comando.

Caso o git esteja instalado, mas n�o configurado nas vari�veis, acessem Meu Momputador, depois Vari�veis de Ambiente e procurem a vari�vel path. � nela que voc�s adicionar�o o caminho completo da pasta onde existe o arquivo execut�vel do Git. Esta � uma dica, mas se est�o abrindo o terminal com o Git Bash, provavelmente n�o ter�o este problema.

Ap�s a verifica��o, rodaremos os seguintes comandos:

```sh
git config --global user.name "Denner Fernandes"

git config --global user.email "denners777@hotmail.com"
```
Fiquem tranquilos, voc�s n�o precisar�o decorar estes comandos, porque, s� na primeira vez que estiverem utilizando o Git que � necess�rio e este comando � facilmente encontrado.

Este procedimento � necess�rio para o Git saber quem s�o voc�s. Quando rodarem qualquer comando, o Git far� o reconhecimendo por estas informa��es.

Outra dica que podemos dar, para facilitar o entendimento visual dos comandos, � rodar o comando abaixo:

```sh
git config --global color.ui true
```
Este comando configurar� o Git para colorir os comandos e resultados de comandos, facilitando o entendimento de cada itera��o. Esta configura��o s� tem efeito no terminal e no Git Bash, caso estejam utilizando o prompt do MS-DOS, esta configura��o n�o surtir� efeito.

Estamos com as configura��es em dia e prontos para come�ar a utilizar o Git. N�o fiquem espantados, realmente � muito f�cil fazer esta configura��o inicial.