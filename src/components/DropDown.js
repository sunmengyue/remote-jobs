import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../css/DropDown.css';

const DropDown = () => {
  const [categories, setCategories] = useState([]);
  const [showList, setShowList] = useState(false);
  const [selection, setSelection] = useState([]);

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
      return (
        <li key={category.id} className="dropdown__list__item">
          {category.name}
        </li>
      );
    });
  };

  const onInputChange = (e) => {
    const newCategories = categories.filter((cat) =>
      cat.slug.includes(e.target.value),
    );
    console.log(categories);
    setCategories(newCategories);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="form">
      <div className="field">
        <input
          type="text"
          name="category"
          onChange={onInputChange}
          placeholder="category"
        />
        <button type="button" onClick={toggleList}>
          <i className="fas fa-caret-down"></i>
        </button>
      </div>
      <ul className="dropdown__list">{showList && listCategories()}</ul>
    </div>
  );
};

export default DropDown;
