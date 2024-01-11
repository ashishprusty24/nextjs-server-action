"use server";

import { revalidateTag } from "next/cache";

export const addToDo = async (e) => {
  "use server";

  const title = e.get("title")?.toString();
  const description = e.get("description")?.toString();

  const response = await fetch(
    `https://62a3255321232ff9b219b2bb.mockapi.io/api/v1/todos`,
    {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  revalidateTag("todos");
  console.log(data);
};
