import express from 'express'
const debug = require('debug')('graphql:server')

const GRAPHQL_PORT = 8080

const server = express()

server.listen(GRAPHQL_PORT, () => debug(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
))
