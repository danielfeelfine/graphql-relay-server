import express from 'express'
import GraphQLHTTP from 'express-graphql'
import schema from './schema'
const debug = require('debug')('graphql:server')

const GRAPHQL_PORT = 8080

const server = express()
server.use('/', GraphQLHTTP({
  schema,
  pretty: true,
  graphiql: true,
  formatError: error => debug(error)
}))

server.listen(GRAPHQL_PORT, () => debug(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
))
