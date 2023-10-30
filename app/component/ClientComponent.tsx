"use client";

import { testAction } from "../actions";

export default function ClientComponent() {
  return (
    <div>
      <form action={testAction}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
