import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma";
import { cookies } from 'next/headers'
import { z } from "zod"
import bcrypt from "bcrypt";

const User = z.object({
    email: z.string().email(),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: "password should contain 8 character and should have 1 uppercase 1 lowercase 1 number and one speacial character" }),
});
export async function POST(req: Request) {
    const cookie = cookies()
    const data = await req.json()
    console.log("data", data);

    const result = User.safeParse(data);
    if (!result.success) {
        return NextResponse.json({ "error": result.error })
    }
    const user = await prisma.user.findFirst({
        where: {
            email: data.email
        }
    })

    if (user != null) {

        const isMatch = await bcrypt.compare(data.password, user.password);
        console.log(isMatch);

        if (isMatch) {
            const token = jwt.sign({ email: user.email }, process.env.SECRET || "");
            if (token) {
                cookie.set("token", token)
            }
        }
        else {
            return NextResponse.json({ "error": "Password Not matched" }, { status: 500 })
        }

    } else {
        return NextResponse.json({ error: "User Not Found" }, { status: 500 })
    }
    return NextResponse.json({ "success": true })

}