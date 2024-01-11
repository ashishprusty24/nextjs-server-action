"use client";
import React, { useTransition } from "react";
import { addToDo } from "../(action)/ServerAction";

const AddTodoButton = () => {
  const [isPending, setTransition] = useTransition();

  const formData = new FormData();
  formData.append("title", "todos task1");
  formData.append("description", "todos descriptions1");

  return (
    <>
      <button
        onClick={() => setTransition(() => addToDo(formData))}
        className="bg-purple-500 px-12 py-3 fixed rounded bottom-10 text-white right-10"
      >
        {isPending ? "Loading..." : "AddTodoButton"}
      </button>
    </>
  );
};

export default AddTodoButton;
