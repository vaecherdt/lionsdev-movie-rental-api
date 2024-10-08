# Como testar?

1. Rota de Cadastro
    * Método: POST
    * URL: http://localhost:3000/api/users/signup
    * Body: 
    ```json
    {
        "name": "Joaquim da Silva",
        "birthday_date": "2003-10-27",
        "email": "joaquim@gmail.com",
        "password": "senhasupersecreta",
        "phones": [
            "+55 (42) 99999-9999"
        ],
        "cep": "84015010",
        "permission_type": "ADMIN"
    }
    ```
2. Rota de Login
    * Método: POST
    * URL: http://localhost:3000/api/users/login
    * Body: 
    ```json
    {
        "email": "joaquim@gmail.com",
        "password": "senhasupersecreta"
    }
    ```
3. Rota de Cadastro de Filmes
    * Método: POST/GET/PUT/DELETE
    * URL: http://localhost:3000/api/movies
    * Headers: 
        * Key: Authorization
        * Value: Bearer seu-token
    * Body: 
    ```json
    {
        "name": "Inception",
        "release_date": "2010-07-16",
        "director": "Christopher Nolan",
        "classification": "Livre"
    }
    ```
4. Rota de Alugar Filme
    * Método: POST/GET/PUT/DELETE
    * URL: http://localhost:3000/api/rented
    * Headers: 
        * Key: Authorization
        * Value: Bearer seu-token
    * Body: 
    ```json
    {
        "rented_by": "<id_do_usuario>",
        "movie_rented": "<id_do_filme>",
        "rent_date": "2024-10-01",
        "return_date": "2024-10-08"
    }
    ```

## Environment Variables
* JWT_TOKEN_SECRET
* DB_USER
* DB_PASSWORD
* CLUSTER_ADDRESS
* DB_NAME
* API_PORT