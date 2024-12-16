import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: "localhost",
    user: "postgres",
    password: "51805664Nbc",
    database: "dockerfunctions",
    port: 5432,
  },
} satisfies Config;
