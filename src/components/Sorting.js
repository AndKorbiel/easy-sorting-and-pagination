function Sorting({ action }) {
  return (
    <div>
      <button onClick={() => action()}>Sort by title</button>
    </div>
  );
}

export default Sorting;
