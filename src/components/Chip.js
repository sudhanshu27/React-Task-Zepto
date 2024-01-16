import React, { useState } from "react";

const Chip = () => {
  const [listItems, setListItems] = useState([
    { id: 1, name: "Nick Giannopoulous" },
    { id: 2, name: "Narayana Garner" },
    { id: 3, name: "Anita Gros" },
    { id: 4, name: "Megan Smith" },
    { id: 5, name: "Hola Amigo" },
  ]);
  const [chipItems, setChipItems] = useState([
    { id: 6, name: "Marina Augustine" },
    { id: 7, name: "Jessi Pinkman" },
    { id: 8, name: "Alex Jung" },
    { id: 9, name: "Dutch Megan" },
    { id: 10, name: "Sidney Swiny" },
  ]);
  const [listFlag, setListFlag] = useState(false);
  const [filteredList, setFilteredList] = useState(listItems);
  const [input, setInput] = useState("");

  const handleInputClick = () => {
    setListFlag(true);
  };
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    const searchedListItems = listItems.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredList(searchedListItems);
  };

  const handleListItemClick = (clickeditem) => {
    const updatedListItems = listItems.filter(
      (item) => item.id !== clickeditem.id
    );
    setChipItems([clickeditem, ...chipItems]);
    setFilteredList(updatedListItems);
    setListItems(updatedListItems);
    setInput("");
  };

  const handleChipItemClick = (clickeditem) => {
    const updatedChipItems = chipItems.filter(
      (item) => item.id !== clickeditem.id
    );
    setChipItems(updatedChipItems);
    setListItems([clickeditem, ...listItems]);
    setFilteredList([clickeditem, ...filteredList]);
  };

  return (
    <>
      <div htmlFor="text" className="heading">
        React Magic
      </div>
      <br />
      <div className="upper-box">
        {chipItems.length ? (
          <div className="chips">
            {chipItems.map((item) => {
              return (
                <div className="chip-item">
                  <span className="left-chip-item">{item.name}</span>
                  <span
                    className="right-chip-item"
                    onClick={() => handleChipItemClick(item)}
                  >
                    X
                  </span>
                </div>
              );
            })}
          </div>
        ) : null}
        <input
          className="input"
          type="text"
          onClick={handleInputClick}
          onChange={handleInputChange}
          value={input}
          placeholder="Enter Your Text Here"
        />
      </div>
      {filteredList.length && listFlag ? (
        <div className="list">
          <ul >
            {filteredList.map((item) => {
              return (
                <li onClick={() => handleListItemClick(item)}>{item.name}</li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Chip;
