<?php

use Pimple\Container;

$container = new Container();

$container['dsn'] = 'mysql:host=localhost;dname=test_oo';
$container['user'] = 'root';
$container['pass'] = '';