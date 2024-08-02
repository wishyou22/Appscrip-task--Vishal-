import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [Option, setOption] = useState('RECOMMENDED');

  const options = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE : LOW TO HIGH',
    'PRICE : HIGH TO LOW'
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); 
    setOption(option)
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {Option} <span className="arrow">{isOpen ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map(option => (
            <div
              key={option}
              className={`dropdown-item ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {selectedOption === option && <span className="checkmark">✔</span>}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
