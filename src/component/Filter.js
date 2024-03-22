const category = [
  "todos",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Filter = ({ optionSelect }) => {
  return (
    <>
      <div className="filter-content">
        Categoria:
        <select onChange={(x) => optionSelect(x.target.value)}>
          {category.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Filter;
