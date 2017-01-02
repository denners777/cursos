<?php

class ServiceProduct
{

    private $db;
    private $product;

    public function __construct(IConn $db, IProduct $product)
    {
        $this->db = $db->connect();
        $this->product = $product;

    }

    public function lister()
    {
        $query = "SELECT * FROM produtos";
        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);

    }

    public function find(int $id)
    {
        $query = "SELECT * FROM `produtos` WHERE id = :id";
        $stmt = $this->db->prepare($query);

        $stmt->bindValue(":id", $id);
        $stmt->execute();

        return $stmt->fetch(\PDO::FETCH_ASSOC);

    }

    public function save()
    {
        $query = "INSERT INTO `produtos` (`name`, `desc`) VALUES (:name, :desc)";
        $stmt = $this->db->prepare($query);

        $stmt->bindValue(":name", $this->product->getName());
        $stmt->bindValue(":desc", $this->product->getDesc());
        $stmt->execute();

        return $this->db->lastInsertId();

    }

    public function update()
    {
        $query = "UPDATE `produtos` SET `name` = ?, `desc` = ? WHERE `id` = ?";
        $stmt = $this->db->prepare($query);

        $stmt->bindValue(1, $this->product->getName());
        $stmt->bindValue(2, $this->product->getDesc());
        $stmt->bindValue(3, $this->product->getId());

        return $stmt->execute();

    }

    public function delete(int $id)
    {
        $query = "DELETE FROM `produtos` WHERE `id` = :id";
        $stmt = $this->db->prepare($query);

        $stmt->bindValue('id', $id);

        return $stmt->execute();

    }

}
