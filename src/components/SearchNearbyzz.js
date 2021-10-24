import { useState } from "react";

export default function SearchNearbyzz() {
  const [showSearch, setShowSearch] = useState(false);
  const onSearchNearbyzz = (e) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };
  return (
    <form className="search">
      <button type="submit" className="search_btn" onClick={onSearchNearbyzz}>
        <i className="fas fa-search"></i>
      </button>
      <div className={`input_wrapper ${showSearch && "input_wrapper_expand"}`}>
        <input type="text" placeholder="Search Nearbyzz..." />
      </div>
    </form>
  );
}
