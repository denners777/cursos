<?php

namespace App\Entity;

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
     * @param type $title
     * @return $this
     */
    public function setTitle($title)
    {
        $this->title = $title;
        return $this;

    }

    /**
     * 
     * @param type $content
     * @return $this
     */
    public function setContent($content)
    {
        $this->content = $content;
        return $this;

    }

}
