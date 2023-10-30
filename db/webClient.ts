import { createClient } from "@libsql/client/web";

export const webClient = createClient({
  url: "http://127.0.0.1:8080",
});
