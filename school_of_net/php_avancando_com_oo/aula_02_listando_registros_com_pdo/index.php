<?php

$db = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', '');

$query = 'SELECT * FROM products';

$stmt = $db->prepare($query);

$stmt->execute();

$list = $stmt->fetchAll(\PDO::FETCH_ASSOC);

echo '<xmp>', var_dump($list);