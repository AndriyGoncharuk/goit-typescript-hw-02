import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  onSubmit: (value: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Please enter a search term");

      console.log(value);
      return;
    }
    onSubmit(value);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={styles.input}
          placeholder="Search images and photos"
          autoFocus
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
