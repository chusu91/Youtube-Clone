import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //Search with keyword.
  };

  return (
    <nav>
      <span>Youtube</span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search..."
          value={text}
          onChange={handleChange}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </nav>
  );
}
