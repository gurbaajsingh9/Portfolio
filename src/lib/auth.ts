import "server-only";

import { betterAuth } from "better-auth";
import env from "@/config/env";
import { customSession } from "better-auth/plugins";


const baseUrl = env.BETTER_AUTH_URL  

export const auth = betterAuth({
    baseURL: baseUrl,
    secret: process.env.BETTER_AUTH_SECRET!, // generate with CLI: npx @better-auth/cli secret
    trustedOrigins: ["http://localhost:3000", baseUrl],

    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60, // Cache duration in seconds
        },
        expiresIn: 30 * 24 * 60 * 60, // 30 days in seconds
        rolling: true,                // extend on activity
    },

    socialProviders: {
        github: {
            clientId: env.GITHUB_CLIENT_ID,
            clientSecret: env.GITHUB_CLIENT_SECRET,
        },
        google: {
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }
    },

    plugins: [
        customSession(async ({ user, session }) => {
            return {
                role: "GUEST",
                user: user,
                session
            };
        }),
    ]

});