<?php
return [
    'default' => 'sqlite',
    'connections' => [
        'sqlite' => [
            'driver'   => 'sqlite',
            'database' => __DIR__.'/../database/database.sqlite',
            'prefix'   => '',
        ],
    ],
];