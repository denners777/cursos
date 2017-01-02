<?php

require_once "IConn.php";
require_once "Conn.php";
require_once "IProduct.php";
require_once "Product.php";
require_once "ServiceProduct.php";

$db = new Conn('localhost', 'test_oo', 'root', '');
$product = new Product;

$product->setName('PHP course')
        ->setDesc('Build a complete website in PHP.')
        ->setId(1);

$service = new ServiceProduct($db, $product);

print_r($service->update());
