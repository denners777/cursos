# Ignorando arquivos
Falaremos dos arquivos indesejados em nossas aplica��es, ou seja, existem arquivos ou pastas, que n�o queremos que fa�am parte do controle de vers�o. Por�m, estes arquivos podem ser alterados com frequ�ncia. Suponham que, toda vez, voc�s tenham que adicionar e comitar arquivos que n�o eram para ser comitados.

Um exemplo cl�ssico destes arquivos que sempre s�o criados e que n�o queremos que fa�am parte do controle de vers�o, s�o os arquivos e pastas criados pelas IDEs.

A IDE PHPStorm, por exemplo, cria uma pasta chamada **.idea**, quando criamos um novo projeto. Podemos ignorar este arquivo para que ele n�o seja reconhecido, nem como untracked file, nem como arquivos modificados, em nosso controle de vers�o.

Para isso, basta criarmos um arquivo oculto, chamado **.gitignore**, na pasta raiz do projeto. Dentro deste arquivo, adicionaremos todos os arquivos ou pastas, que dever�o ser ignorados em nossa aplica��o. Desta forma, os arquivos nunca ser�o comitados e n�o far�o parte do controle de vers�o.

Vejam o exemplo:
```
.idea/
```
Cada arquivo ou pasta, dever� ser adicionado em uma linha diferente. Em nosso exemplo, estamos ignorando, apenas, a pasta da IDE, chamada **.idea**, mas voc�s podem ignorar quantos arquivos quiserem ou forem necess�rios.

Para testarem no projeto, criem um arquivo chamado **gitignore.txt**. Em seguida, acessem o terminal e rodem ```git status```. Voc�s ver�o que ele se encontra como **untracked file**, porque acabamos de criar.

Agora, no arquivo .gitignore, adicionem este arquivo, para que seja ignorado.
```
.idea/
gitignore.txt
```
Depois de adicionado o arquivo no .gitignore, rodem o comando git status, novamente. Voc�s poder�o ver que o arquivo, que antes era untrackad file, n�o consta mais para ser comitado. Isso ocorre porque o Git ignora o arquivo e n�o o reconhece.

Voc�s encontrar�o o arquivo .gitignore, que criamos para listar os arquivos ignorados, este sim dever� fazer parte do projeto e ser adicionado ao controle de vers�o.

Voc�s acabaram de aprender o conceito do arquivo .gitignore. Para trabalharem com ele, basta adicionarem os arquivos, que dever�o ser ignorados, um em cada linha, dentro deste arquivo.