import { CreatePortFolio } from "../functions/functions";
import { Signin } from "../login/route";
import { SignUp } from "../signup/route";

export const resolvers = {
  Query: {
    Signin: (_: any, args: any) => {
      return Signin(args.input);
    },
    hello: () => {
      return { name: "hello" };
    },
  },
  Mutation: {
    SignUp: (_: any, args: any) => {
      return SignUp(args.input);
    },
    Portfolio:(_:any,args:any)=>{
      return CreatePortFolio(args.input)
    }
  },
};
