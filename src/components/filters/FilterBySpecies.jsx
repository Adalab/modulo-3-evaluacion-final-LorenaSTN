import "../../scss/main/FilterBySpecies.scss";

function FilterBySpecies({ onChangeSpecies, valueSpecies }) {
  const handleChangeSpecies = (ev) => {
    onChangeSpecies(ev.target.value);
  };
  return (
    <div>
      <select
        name="species"
        id="species"
        onChange={handleChangeSpecies}
        value={valueSpecies}
        className="inputselect"
      >
        <option value="All">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </div>
  );
}

export default FilterBySpecies;
