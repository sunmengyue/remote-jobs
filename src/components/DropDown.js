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
        onClick={() => {
          console.log('clicked');
        }}
      >
        {category.name}
      </li>
    ));
  };

  const handleSubmit = (e, category) => {
    console.log(e);
    // setInput(e.target.innerText);
    // setParams((prevParams) => ({
    //   ...prevParams,
    //   [e.target.name]: category.slug,
    // }));
    // setCurrentPage(1);
    // setPages([1, 2, 3]);
  };

  return (
    <div className="form">
      <div className="field">
        <input
          onFocus={() => {
            setIsOpen(true);
          }}
          onBlur={() => {
            setIsOpen(false);
          }}
          type="text"
          name="category"
          onChange={(e) => {
            onInputChange(e);
          }}
          placeholder="category"
          value={params.category}
        />
        <i className="fas fa-caret-down"></i>
      </div>
      {isOpen && (
        <ul className="dropdown__list">
          {categories.map((category) => (
            <li
              key={category.id}
              className="dropdown__list__item"
              onClick={() => {
                console.log('clicked');
              }}
            >
              {category.name}
            </li>
          ))}
          ;
        </ul>
      )}
    </div>
  );
};

export default DropDown;
