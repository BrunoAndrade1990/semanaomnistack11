const express = require('express');
const cors = require('cors');
const routes = require('./routs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);



/**
 * Rota / Recurso
 *
 */

/**
 * Métodos GET
 *
 * GET: Buscar uma informação do Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no Back-end
 *
*/

/**
 * Tipos de Parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após o simbolo de "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB...etc
 */
/**
 * Driver: SELECT * FROM Users
 * Query Builder: tables('users').select("*").where()...
 *
 */




