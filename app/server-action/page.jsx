import { addToDo } from "../(action)/ServerAction";
import AddTodoButton from "../(component)/AddTodoButton";

export default async function ServerAction() {
  const response = await fetch(
    "https://62a3255321232ff9b219b2bb.mockapi.io/api/v1/todos",
    {
      cache: "no-cache",
      next: {
        tags: ["todos"],
      },
    }
  );

  const data = await response.json();

  return (
    <>
      <section className="w-full min-h-screen py-10">
        <form action={addToDo} className="w-1/2 m-auto">
          <div className="mb-3">
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              className="py-2  px-2 w-full border"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              className="py-2  px-2 w-full border"
            />
          </div>
          <div className="mb-3">
            <button className="w-full bg-green-500 rounded py-2">
              Add todo
            </button>
          </div>
        </form>

        <div className="flex flex-wrap gap-5 ">
          {data.map((c, i) => {
            return (
              <div key={i} className="w-1/4 border p-4 m-auto">
                <h1>{c.title}</h1>
                <p>{c.description}</p>
              </div>
            );
          })}
        </div>
        <AddTodoButton />
      </section>
    </>
  );
}
