import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { z } from "zod";
import bcrypt from "bcrypt";

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

export async function POST(req: NextRequest) {
  const data = await req.json();
  data.expYear = +data.expYear;

  const validationResult = User.safeParse(data);
  if (!validationResult.success) {
    return NextResponse.json(
      {
        message: "Please check all the fields properly",
        error: validationResult.error,
      },
      {
        status: 400,
      }
    );
  }

  try {
    const alreadyUser = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (alreadyUser) {
      return NextResponse.json(
        {
          error: "User already exists with this email",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10); // Using bcrypt to hash the password

    const newUser = await prisma.user.create({
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

    return NextResponse.json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
