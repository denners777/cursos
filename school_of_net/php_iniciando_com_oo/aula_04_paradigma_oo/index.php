<?php

class People
{

    public function getHello($name)
    {
        return "Hello {$name}!";

    }

}

$people = new People();

echo $people->getHello('Denner');