<?php

try {

    $conn = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', '');

    $query = "SELECT * FROM produtos";
    foreach ($conn->query($query) as $product) {
        echo $product['name'] . '<br>';
    }
} catch (\PDOException $e) {

    echo 'Erro! Message: ' . $e->getMessage() . ' Code: ' . $e->getCode();
}