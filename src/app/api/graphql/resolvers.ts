
import { CreateJobPost, CreatePortFolio,GetAllPlacedUser,GetAllPosts } from "../functions/functions";
import { Signin } from "../functions/signin";
import { SignUp } from "../functions/signup";

export const resolvers = {
  Query: {
    Signin: (_: any, args: any) => {
      return Signin(args.input);
    },
    hello: () => {
      return { name: "hello" };
    },
    GetAllPosts:()=>{
      return GetAllPosts()
    },
    GetPlacedUsers:(_:any,args:any)=>{
      return GetAllPlacedUser(args.input)
    }

  },
  Mutation: {
    SignUp: (_: any, args: any) => {
      return SignUp(args.input);
    },
    Portfolio:(_:any,args:any)=>{
      return CreatePortFolio(args.input)
    },
    CreatePost:(_:any,args:any) => {
      return CreateJobPost(args.input);
    },
    

  },
};


