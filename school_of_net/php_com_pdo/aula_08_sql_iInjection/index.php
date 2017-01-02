<?php

try {

    $conn = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', '');

    $query = "SELECT * FROM produtos WHERE id = {$_GET['id']}";
    foreach ($conn->query($query) as $product) {
        echo $product['id'] . '<br>';
        echo $product['name'] . '<br>';
        echo $product['desc'] . '<br>';
    }
} catch (\PDOException $e) {

    echo 'Erro! Message: ' . $e->getMessage() . ' Code: ' . $e->getCode();
}