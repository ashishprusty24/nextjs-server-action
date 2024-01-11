import { signOut } from "next-auth/react";
import React from "react";

const User = () => {
  return (
    <div>
      User is logged in
      <button
        onClick={signOut}
        className="px-6 py-3 bg-red-500 rounded text-white"
      >
        Sign out
      </button>
    </div>
  );
};

export default User;
