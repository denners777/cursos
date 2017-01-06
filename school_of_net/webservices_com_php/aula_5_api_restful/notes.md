# Anotações


| Endereço da API  | Nome da API | Recursos |
| ---------------- | :---------  | :------- |
| myapp.com/api    |   vendas/   | clientes |
| api.myapp.com/   |   vendas/   | clientes |
| api.myapp.com/v1/|   vendas/   | clientes |


## API Restful

| Nome    | Descrição                      | Alt estado  | Exemplo             |
| :-----: | ------------------------------ | ----------- | ------------------- |
| GET     | Consultar informações          | Seguro      | GET/clientes        |
| POST    | Criar um novo recurso          | Não Seguro  | POST/pedidos        |
| PUT     | Atualizar um recurso existente | Não Seguro  | PUT/pedidos/2320    |
| DELETE  | Excluir um recurso existente   | Não Seguro  | DELETE/pedidos/4060 |
| OPTIONS | Consultar informações da API   | Seguro      | OPTIONS/clientes    |