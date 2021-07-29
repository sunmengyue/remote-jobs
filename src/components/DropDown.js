import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../css/DropDown.css';

const DropDown = () => {
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
    return categories.map((category) => {
      return (
        <li key={category.id} className="dropdown__list__item">
          {category.name}
        </li>
      );
    });
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
        />
        <i className="fas fa-caret-down"></i>
      </div>
      {isOpen && <ul className="dropdown__list">{listCategories()}</ul>}
    </div>
  );
};

export default DropDown;
