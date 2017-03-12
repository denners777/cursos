<?php

require_once '../vendor/autoload.php';

use Pimple\Container;

$container = new Container();

$container['date'] = function() {
    return new \DateTime();
};

echo '<xmp>', print_r($container['date']);
