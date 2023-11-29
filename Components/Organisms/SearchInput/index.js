import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  HandleSearch,
  InputBody,
  InputField,
  NavbarInput
  // SearchDrop,
} from "../../../styles/Search.module";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [courseType, setCourseType] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === "") {
      alert("Please enter a search query.");
    } else {
      router.push({
        pathname: "/search",
        query: {
          query,
          courseType,
          location
        }
      });
    }
  };

  return (
    <InputBody>
      <HandleSearch>
        <select
          onChange={e => setCourseType(e.target.value)}
          style={{
            width: "180px",
            border: "none",
            backgroundImage: `url('/assets/down.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            appearance: "none",
            padding: "8px 20px",
            outline: "none"
          }}
        >
          <option value="" disabled selected>
            Course Type
          </option>
          <option value="">All</option>
          <option value="Msc">Msc</option>
        </select>

        <select
          onChange={e => setLocation(e.target.value)}
          style={{
            width: "160px",
            border: "none",
            backgroundImage: `url('/assets/down.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            appearance: "none",
            padding: "8px 20px",
            outline: "none"
          }}
        >
          <option value="" disabled selected>
            Location
          </option>
          <option value="">All</option>
          <option value="Germany">Germany</option>
        </select>
      </HandleSearch>

      <form onSubmit={handleSubmit}>
        <InputField>
          <NavbarInput
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a course"
            color="grey"
          />
          <div>
            <button
              type="submit"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              Search
            </button>
          </div>
        </InputField>
      </form>
    </InputBody>
  );
};

export default SearchInput;
