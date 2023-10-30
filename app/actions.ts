"use server";

import { client } from "@/db/client";
// import { webClient } from "@/db/webClient";

export async function testAction(formData: FormData) {
  console.log(client);
  // console.log(webClient);
}
