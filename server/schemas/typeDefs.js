const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
    users: [User]
    user(userId: ID!): User
    books(username: String): [Book]
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
        authors: String!
        description: String!
        title: String!
        bookId: ID!
        image: String!
        link: String!
    ): User
    removeBook(bookId: ID!): User
    }

type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
    }

type Book {
    authors: String
    description: String
    bookId: Int
    title: String
    image: String
    link: String
    }

type Auth {
    user: User
    token: ID!
    }
`;

module.exports = typeDefs;
