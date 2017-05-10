<?php

namespace Source;

interface IProduct
{

    public function getId();

    public function getName();

    public function getDescription();

    public function setId($id);

    public function setName($name);

    public function setDescription($description);
}
