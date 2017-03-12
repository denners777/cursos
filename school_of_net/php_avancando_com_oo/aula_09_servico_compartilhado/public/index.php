<?php

require_once '../vendor/autoload.php';

use Pimple\Container;

$container = new Container();

$container['date'] = function() {
    return new \DateTime();
};

$container['datefactory'] = $container->factory(function() {
    return new \DateTime();
});

echo '<xmp>', print_r($container['date']);
sleep(1);
print_r($container['datefactory']);
sleep(1);
print_r($container['date']);
sleep(1);
print_r($container['datefactory']);
