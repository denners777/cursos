<?php

try {

    $conn = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', '');

    $query = "SELECT * FROM produtos WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindValue(':id', $_GET['id']);
    $stmt->execute();

    print_r($stmt->fetchAll());
} catch (\PDOException $e) {

    echo 'Erro! Message: ' . $e->getMessage() . ' Code: ' . $e->getCode();
}