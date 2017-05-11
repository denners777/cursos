<?php

require_once('Car.php');
require_once('Motorcycle.php');

$ferrari = new Car('Ferrari', 'Red');
$ferrari->engine = 488;
$ferrari->doors = 2;

$mustang = new Car;
$mustang->brand = 'Mustang';
$mustang->color = 'Yellow';
$mustang->engine = 300;
$mustang->doors = 4;

$cg = new Motorcycle;
$cg->brand = 'Honda';
$cg->color = 'Blue';
$cg->engine = 150;

echo '<xmp>', print_r($ferrari), print_r($mustang), print_r($cg);