import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { z } from "zod";
import bcrypt from "bcrypt";

const User = z.object({
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
});
export async function Signin(data: any) {
  const cookie = cookies();

  const result = User.safeParse(data);
  if (!result.success) {
    return NextResponse.json({ error: result.error });
  }
  const user = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (user != null) {
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (isMatch) {
      const portfolio = await prisma.portfolio.findFirst({
        where: {
          userId: user.id
        }
      })
      const token = jwt.sign({ email: user.email }, process.env.SECRET || "");
      if (token) {
        cookie.set("token", token);
        cookie.set("role", user.role);
        return { success: true, token: token, user: user, portfolio: portfolio };
      }
    } else {
      return 
        { error: "Password Not matched" }
     
    }
  } else {
    return NextResponse.json({ error: "User Not Found" }, { status: 500 });
  }
}
