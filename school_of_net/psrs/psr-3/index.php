<?php

require_once 'vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('teste');
$log->pushHandler(new StreamHandler('log/app.log', Logger::WARNING));

$log->warning('Foo');
$log->error('Bar');
