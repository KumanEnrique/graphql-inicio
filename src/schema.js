import {resolvers} from "./resolvers"
import {makeExecutableSchema} from "graphql-tools"
const typeDefs = `

    type Query {
        message:String,
        saludo(name:String!):String
        Users:[User]
    }
    type User {
        _id:ID
        firstname:String!
        lastname:String!
        age:Int
    }
    type Mutation{
        createUser(input:userInput ):User
        deleteUser(_id:ID):User
        updateUser(_id:ID,input:userInput):User
    }
    input userInput{
        firstname:String!
        lastname:String!
        age:Int!
    }
`

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})