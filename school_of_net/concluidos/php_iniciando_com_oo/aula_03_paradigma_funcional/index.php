<?php

$input = [22, 34, 17, 18, 14, 13, 22, 25];

$filtro = function (int $age) {
    return ($age >= 18);
};

$output = array_filter($input, $filtro);

$output2 = array_filter($input, function (int $age) {
    return ($age >= 18);
});

echo '<xmp>', print_r($output), print_r($output2);
