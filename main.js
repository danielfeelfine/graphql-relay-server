import express from 'express'
import GraphQLHTTP from 'express-graphql'
const debug = require('debug')('graphql:server')

const GRAPHQL_PORT = 8080

const server = express()
server.use('/', GraphQLHTTP({
  pretty: true,
  graphiql: true
}))

server.listen(GRAPHQL_PORT, () => debug(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
))
