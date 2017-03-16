import { GraphQLSchema } from 'graphql'
import { Reddit } from 'graphqlhub-schemas'

export const Schema = new GraphQLSchema({
  query: Reddit.QueryObjectType
})

export default Schema
