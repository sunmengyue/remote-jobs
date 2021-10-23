import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import '../css/DropDown.css';

const DropDown = () => {
  const [input, setInput] = useState('');
  const [params, setParams] = useState('');
  const [currentPage, setCurrentPate] = useState(1);
  const categories = [
    'software',
    'customer support',
    'design',
    'marketing',
    'sales',
    'business',
    'data',
    'devops',
    'hr',
    'teaching',
    'health',
    'non tech',
  ];

  // const { params, setParams, setPages, setCurrentPage, setInput, input } =
  //   jobData;

  const [filteredCategories, setFilteredCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFilteredCategories(categories);
  }, []);

  const onInputChange = (e) => {
    setInput(e.target.value);
    if (!e.target.value) {
      setFilteredCategories(categories);
    }
    const newCategories = categories.filter((cat) =>
      cat.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredCategories(newCategories);
  };

  const listCategories = () => {
    return filteredCategories.map((category) => (
      <li
        key={uuidv4()}
        className="dropdown__list__item"
        // onMouseDown={(e) => {
        //   handleSubmit(e, category);
        // }}
      >
        {category}
      </li>
    ));
  };

  const openDropDown = () => {
    setInput('');
    setIsOpen(true);
    setFilteredCategories(categories);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  return (
    <div className="form">
      <div className="field">
        <input
          onMouseDown={openDropDown}
          onBlur={closeDropDown}
          type="text"
          name="category"
          onChange={(e) => {
            onInputChange(e);
          }}
          placeholder="job categories"
          value={input}
        />

        {!isOpen ? (
          <i className="fas fa-caret-down"></i>
        ) : (
          <i className="fas fa-caret-up"></i>
        )}
      </div>
      {isOpen && <ul className="dropdown__list">{listCategories()}</ul>}
    </div>
  );
};

export default DropDown;
