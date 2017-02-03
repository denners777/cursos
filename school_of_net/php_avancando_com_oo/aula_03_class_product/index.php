<?php

require_once 'Product.php';

$db = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', '');

$product = new Product($db);

$list = $product->lister();

echo '<xmp>', var_dump($list);