const Person = ({ name, id, removePerson }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button
        style={{ marginBottom: "1rem" }}
        className="btn"
        onClick={() => removePerson(id)}
      >
        remove
      </button>
    </div>
  );
};
export default Person;
