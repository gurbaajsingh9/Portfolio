import "server-only";

import { betterAuth } from "better-auth";
import env from "@/config/env";
import { customSession } from "better-auth/plugins";


const baseUrl = env.BETTER_AUTH_URL  

export const auth = betterAuth({
    baseURL: baseUrl,
    secret: env.BETTER_AUTH_SECRET || "dummy_secret_for_portfolio_build", // fallback so build doesn't crash
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