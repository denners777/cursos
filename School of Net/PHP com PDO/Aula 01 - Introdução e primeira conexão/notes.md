*Habilitar extensão  no php.ini

PDO -> Trabalhar com Banco de Dados.

Documentação -> php.net/manual/en/book.pdo.php

1ª Conexão

<?php

$conn = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', 'root');
