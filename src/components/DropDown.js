import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../css/DropDown.css';

const DropDown = () => {
  const [categories, setCategories] = useState([]);
  const [catInput, setCatInput] = useState('');
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    axios
      .get('https://remotive.io/api/remote-jobs/categories')
      .then((res) => {
        setCategories(res.data.jobs);
      })
      .catch((error) => console.log(error));
  }, []);

  const listCategories = () => {
    return categories.map((category) => {
      <li key="category.id" slug={category.slug}>
        {category.name}
      </li>;
    });
  };

  const toggleList = () => {
    setShowCategories(!showCategories);
  };

  return (
    <form className="form">
      <div className="field">
        <input
          type="text"
          value={catInput}
          name="category"
          onChange={(e) => {
            setCatInput(e.target.value);
          }}
          placeholder="category"
        />
        <button type="button" onClick={toggleList}>
          <i className="fas fa-caret-down"></i>
        </button>
      </div>
      <ul>{listCategories()}</ul>
    </form>
  );
};

export default DropDown;
