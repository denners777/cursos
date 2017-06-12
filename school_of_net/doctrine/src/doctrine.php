<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

$paths     = [_DIR_ . '/Entity'];
$isDevMode = true;
$dbParams  = [
    'driver'   => 'pdo_mysql',
    'user'     => 'root',
    'password' => '.FrmYGb-',
    'dbname'   => 'doctrine_basico',
];

$config        = Setup::createAnnotationMetadataConfiguration($paths, $isDevMode);
$entityManager = EntityManager::create($dbParams, $config);

function getEntityManager()
{
    global $entityManager;
    return $entityManager;

}
