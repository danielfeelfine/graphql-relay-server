import { GraphQLSchema } from 'graphql'
import { Reddit } from 'graphqlhub-schemas'

const Schema = new GraphQLSchema({
  query: Reddit.QueryObjectType
})

export default Schema
