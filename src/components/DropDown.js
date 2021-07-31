import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import '../css/DropDown.css';

const DropDown = () => {
  const jobData = useContext(Jobcontext);
  const { params, setParams, setPages, setCurrentPage, setInput } = jobData;

  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onInputChange = (e) => {
    if (e.target.value === '') {
      setCategories(categories);
    }

    const newCategories = categories.filter((cat) =>
      cat.slug.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setCategories(newCategories);
  };

  useEffect(() => {
    axios.get('https://remotive.io/api/remote-jobs/categories').then((res) => {
      setCategories(res.data.jobs);
    });
  }, []);

  const listCategories = () => {
    return categories.map((category) => (
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

  const handleSubmit = (e, category) => {
    setInput(e.target.textContent);
    setParams((prevParams) => ({
      ...prevParams,
      category: category.slug,
    }));
    setCurrentPage(1);
    setPages([1, 2, 3]);
    setIsOpen(false);
  };

  return (
    <div className="form">
      <div className="field">
        <input
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          // onBlur={() => {
          //   setIsOpen(false);
          // }}
          type="text"
          name="category"
          onChange={(e) => {
            onInputChange(e);
          }}
          placeholder="job categories: click to see and hide"
          value={params.category}
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
