<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name="posts")
 */
class Post
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
    private $title;

    /**
     * @Column(type="text")
     */
    private $content;

    /**
     * @ManyToMany(targetEntity="App\Entity\Category")
     */
    private $categories;

    /**
     * 
     */
    public function __construct()
    {
        $this->categories = new ArrayCollection();

    }

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
    public function getTitle()
    {
        return $this->title;

    }

    /**
     * 
     * @return type
     */
    public function getContent()
    {
        return $this->content;

    }

    /**
     * 
     * @param mixed $title
     * @return $this
     */
    public function setTitle($title)
    {
        $this->title = $title;
        return $this;

    }

    /**
     * 
     * @param mixed $content
     * @return $this
     */
    public function setContent($content)
    {
        $this->content = $content;
        return $this;

    }

    /**
     * 
     * @param \App\Entity\Category $category
     * @return $this
     */
    public function addCategory(Category $category)
    {
        $this->categories->add($category);
        return $this;

    }

    /**
     * @return ArrayCollection
     */
    public function getCategories()
    {
        return $this->categories;

    }

}
