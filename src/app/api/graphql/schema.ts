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
  type Portfolio{
    id: ID
    userId: Int
    link: String
    porPic: String
  }
  type SigninResponse {
    token: String!
    user: User!
    success: Boolean!
    portfolio:Portfolio!
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
    userId: Int
    link:String
    porPic:String
  }
  input CreatePost{
    userId:String
  companyName:String
  companyLogo:String
  jobTitle:String
  jobDescription:String
  jobSalary:String
  skills:[String]
  link:String
  }
  type GetAllPosts   {
    id:Int
    userId:String
  companyName:String
  companyLogo:String
  jobTitle:String
  jobDescription:String
  jobSalary:String
  skills:[String]
  link:String
  }
  type PlacedUsers{
    name: String
    jobRole:String
    profilePic:String
  }
  type Query {
    Signin(input: SigninUser): SigninResponse,
    hello:Hello,
    GetAllPosts:[GetAllPosts]
    GetPlacedUsers(input:Int):[PlacedUsers]
    
  }
  type Mutation{
    SignUp(input:CreateUser):SignUpResponse,
    Portfolio(input:PortfolioInput):SignUpResponse
    CreatePost(input:CreatePost):SignUpResponse
    
  }















`;
