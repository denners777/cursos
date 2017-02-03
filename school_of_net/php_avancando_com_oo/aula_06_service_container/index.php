<?php

require_once 'IConn.php';
require_once 'Conn.php';
require_once 'Product.php';
require_once 'Container.php';

//$db = Container::getConn();

$product = Container::getProduct();

$list = $product->lister();

echo '<xmp>', var_dump($list);