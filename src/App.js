import CreatableSelect from "react-select/creatable";

const App = () => {
  const options = [
    { value: "purple", label: "Purple", color: "#A020F0" },
    { value: "red", label: "Red", color: "#FF0000" },
    { value: "orange", label: "Orange", color: "#FFA500" },
    { value: "green", label: "Green", color: "#00FF00" }

  ];
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };
  return (
    <div>
      <h1>React MultiSelect DropDown using React-select library.</h1>
      <CreatableSelect
        options={options}
        onChange={handleChange}
        onInputChange={handleInputChange}
        isMulti
        styles={colorStyles}
      />
    </div>

  );
};

export default App;