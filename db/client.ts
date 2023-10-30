import { createClient } from "@libsql/client";

export const client = createClient({
  url: "http://127.0.0.1:8080",
});
