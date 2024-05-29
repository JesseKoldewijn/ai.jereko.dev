// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { vercel } from "@t3-oss/env-nextjs/presets";

const procEnv = process.env as Record<string, string>;

export const clientEnv = createEnv({
	server: {
		OLLAMA_ENDPOINT: z.string().url(),
	},
	runtimeEnv: procEnv,
	extends: [vercel()],
	// Tell the library to skip validation if condition is true.
	skipValidation: procEnv.SKIP_ENV_VALIDATION === "true",
});

export const env = createEnv({
	client: {
		// PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
	},
	runtimeEnv: procEnv,
	extends: [vercel()],
	// Tell the library to skip validation if condition is true.
	skipValidation: procEnv.SKIP_ENV_VALIDATION === "true",
});
