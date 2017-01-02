<?php

try {

    $conn = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', '');

    $query = "SELECT * FROM produtos";
    $stmt = $conn->query($query);
    $list = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo $list[0]['name'];
    echo '<br>';

    $stmt = $conn->query($query);
    $list = $stmt->fetchAll(PDO::FETCH_OBJ);

    echo $list[0]->name;
} catch (\PDOException $e) {

    echo 'Erro! Message: ' . $e->getMessage() . ' Code: ' . $e->getCode();
}