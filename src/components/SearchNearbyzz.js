export default function SearchNearbyzz() {
  const onSearchNearbyzz = (e, { setShowSearch, showSearch }) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };
  return { onSearchNearbyzz };
}
