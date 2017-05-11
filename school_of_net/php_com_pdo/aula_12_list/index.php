<?php

require_once "IConn.php";
require_once "Conn.php";
require_once "IProduct.php";
require_once "Product.php";
require_once "ServiceProduct.php";

$db = new Conn('localhost', 'test_oo', 'root', '');
$product = new Product;
$service = new ServiceProduct($db, $product);

echo '<xmp>', print_r($service->lister());
