import { client } from "@/db/client";
import ClientComponent from "./component/ClientComponent";

export default async function Home() {
  const data = await client.execute(`select "hello world" as message;`);
  return (
    <main>
      {JSON.stringify(data)}
      <ClientComponent />
    </main>
  );
}
