<?php

try {

    $conn = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', '');

    $query = "SELECT * FROM produtos";
    $return = $conn->exec($query);
    print_r($return);
    //return 0

    $query = "INSERT INTO produtos (name, desc) VALUES('eBook', 'Learn Javascript')";
    $return = $conn->exec($query);
    print_r($return);
    //return 1
} catch (\PDOException $e) {

    echo 'Erro! Message: ' . $e->getMessage() . ' Code: ' . $e->getCode();
}