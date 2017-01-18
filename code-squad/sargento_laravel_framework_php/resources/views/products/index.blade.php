<h3>Produtos</h3>

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Qtd</th>
            <th>Valor</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($data as $product) : ?>
        <tr>
            <td><?php echo $product->id; ?></td>
            <td><?php echo $product->title; ?></td>
            <td><?php echo $product->body; ?></td>
            <td><?php echo $product->qtd; ?></td>
            <td><?php echo $product->value; ?></td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>