
import prisma from "@/lib/prisma";
import { z } from "zod";
import bcrypt from "bcrypt";
import { DemoPortfolioPic } from "@/components/utils/skills";

const User = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password should contain 8 characters and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
      }
    ),
  companyName: z.string(),
  role: z.string(),
  jobRole: z.string(),
  expYear: z.number(),
  profilePic: z.string(),
});

export async function SignUp(data: any) {
  data.expYear = +data.expYear;
  
  if(Number.isNaN(data.expYear)){
    data.expYear=0
}
if (data.expYear==0) {
  data.companyName=""
  data.jobRole=""
}
console.log(data)
  const validationResult = User.safeParse(data);
  if (!validationResult.success) {
    return   {
        error: validationResult.error+"Check all feilds",
      }
  }

  try {
    const alreadyUser = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (alreadyUser) {
      return {
        error: "User already exists with this email",
      };
    }

    const hashedPassword = await bcrypt.hash(data.password, 10); // Using bcrypt to hash the password

    const user=await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
        companyName: data.companyName,
        role: data.role,
        jobRole: data.jobRole,
        expYear: data.expYear,
        profilePic: data.profilePic,
      },
    });
    await prisma.portfolio.create({
      data: {
       userId:  user.id,
       link: "https://google.com",
       porPic:DemoPortfolioPic
     },});

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      error: "Internal Server Error",
    };
  }
}
