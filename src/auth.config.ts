import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./app/actions/authActions";
import { compare } from "bcryptjs";
import { loginSchema } from "./lib/schemas/LoginSchema";

export default {
    providers: [
        Credentials({
            name: "credentials",
            async authorize(cred) {
                const validated = loginSchema.safeParse(cred);
                if (validated.success) {
                    const { email, password } = validated.data;
                    const user = await getUserByEmail(email);
                    if (!user || !(await compare(password, user.passwordHash)))
                        return null;
                    return user;
                }
                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;
