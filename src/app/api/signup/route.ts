import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { z } from "zod";
import bcrypt from "bcrypt";
const User = z.object({
    name:z.string(),
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "password should contain 8 character and should have 1 uppercase 1 lowercase 1 number and one speacial character",
      }
    ),
   
    companyName :z.string(),
    role     :z.string(),
    jobRole :z.string(),
    expYear :z.number()
});
export async function POST(req: Request) {
  const cookie = cookies();
  const data = await req.json();

  const result = User.safeParse(data);
  if (!result.success) {
    return NextResponse.json({message:"Please check all the feilds properly",error:result.error},{status:404});
  }
  const alreadyUser=await prisma.user.findFirst({
    where: {
        email:data.email
    }
  })
  if(alreadyUser)return NextResponse.json({error:"User already Present"},{status:500})
  const hashedPassword=  await bcrypt.hash(data.password, await bcrypt.genSalt(10));
  const user = await prisma.user.create({
    data: {

        email :data.email,
        name     :data.name,
        password :hashedPassword,
        companyName :data.companyName,
        role     :data.role,
        jobRole :data.jobRole,
        expYear :data.expYear

    }
  });
  if(user)return NextResponse.json({ success: true ,message:"User Created Successfully"});
  
}
