*Habilitar extens�o  no php.ini

PDO -> Trabalhar com Banco de Dados.

Documenta��o -> php.net/manual/en/book.pdo.php

1� Conex�o

<?php

$conn = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', 'root');
