import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    DATABASE_URL: z.string().default(""),
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]).default("nodejs"),
    GITHUB_CLIENT_ID: z.string().default(""),
    GITHUB_CLIENT_SECRET: z.string().default(""),
    GOOGLE_CLIENT_ID: z.string().default(""),
    GOOGLE_CLIENT_SECRET: z.string().default(""),
    BETTER_AUTH_SECRET: z.string().default(""),
    BETTER_AUTH_URL: z.string().default("http://localhost:3000"),
    GITHUB_TOKEN: z.string().default("")
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().default("http://localhost:3000"),
    NEXT_PUBLIC_GITHUB_USERNAME: z.string().default("gurbaajsingh9"),
    NEXT_PUBLIC_AVAILABLE_STATUS: z.coerce.boolean().default(true),
    NEXT_PUBLIC_WEB3FORMS_KEY: z.string().default("")
  },

  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    NEXT_PUBLIC_AVAILABLE_STATUS: process.env.NEXT_PUBLIC_AVAILABLE_STATUS,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    NEXT_PUBLIC_WEB3FORMS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_KEY
  },

  emptyStringAsUndefined: true,

});

export default env;