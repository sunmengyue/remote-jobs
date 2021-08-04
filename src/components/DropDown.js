import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import '../css/DropDown.css';

const DropDown = () => {
  const jobData = useContext(Jobcontext);
  const { params, setParams, setPages, setCurrentPage, setInput, input } =
    jobData;

  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get('https://remotive.io/api/remote-jobs/categories').then((res) => {
      setCategories(res.data.jobs);
      setFilteredCategories(res.data.jobs);
    });
  }, []);

  const onInputChange = (e) => {
    setInput(e.target.value);
    if (!e.target.value) {
      setFilteredCategories(categories);
    }
    const newCategories = categories.filter((cat) =>
      cat.slug.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredCategories(newCategories);
  };

  const listCategories = () => {
    return filteredCategories.map((category) => (
      <li
        key={category.id}
        className="dropdown__list__item"
        onClick={(e) => {
          handleSubmit(e, category);
        }}
      >
        {category.name}
      </li>
    ));
  };

  const handleClick = () => {
    setInput('');
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e, category) => {
    setInput(e.target.textContent);
    // setParams((prevParams) => ({
    //   ...prevParams,
    //   category: category.slug,
    // }));
    setParams({ search: '', category: category.slug });
    setCurrentPage(1);
    setPages([1, 2, 3]);
    setIsOpen(false);
  };

  return (
    <div className="form">
      <div className="field">
        <input
          onClick={handleClick}
          type="text"
          name="category"
          onChange={(e) => {
            onInputChange(e);
          }}
          placeholder="job categories: click to see and hide"
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
