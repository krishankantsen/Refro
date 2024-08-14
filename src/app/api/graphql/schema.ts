import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID
    email: String!
    name: String
    password: String
    companyName: String
    role: String
    jobRole: String
    expYear: Int
    profilePic: String
  }
  input CreateUser{
    id: ID
    email: String!
    name: String
    password: String
    companyName: String
    role: String
    jobRole: String
    expYear: String
    profilePic: String
  }
  type SigninResponse {
    token: String!
    user: User!
    success: Boolean!
  }
  type SignUpResponse {
    success: Boolean
    error:String
  }
  type Hello{
    name:String
  }
  input SigninUser {
    email: String!
    password: String!
  }
  input PortfolioInput{
    id: Int
    link:String
    porPic:String
  }
  type Query {
    Signin(input: SigninUser): SigninResponse,
    hello:Hello,
    
  }
  type Mutation{
    SignUp(input:CreateUser):SignUpResponse,
    Portfolio(input:PortfolioInput):SignUpResponse
  }















`;
