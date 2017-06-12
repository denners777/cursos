<?php

namespace App\Entity;

/**
 * @Entity
 * @Table(name="Categories")
 */
class Category
{

    /**
     * @Id
     * @Column(type="integer")
     * @GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @Column(type="string", length=100)
     */
    private $name;

    /**
     * 
     * @return type
     */
    public function getId()
    {
        return $this->id;

    }

    /**
     * 
     * @return type
     */
    public function getName()
    {
        return $this->name;

    }

    /**
     * 
     * @param type $name
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;

    }

}
