import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import '../css/DropDown.css';

const DropDown = () => {
  const [categories, setCategories] = useState([]);
  const ulRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    axios.get('https://remotive.io/api/remote-jobs/categories').then((res) => {
      setCategories(res.data.jobs);
      ulRef.current.style.display = 'none';
    });

    // show the list when click on input and hide the list when click on blank page
    inputRef.current.addEventListener('click', (e) => {
      e.stopPropagation();
      ulRef.current.style.display = 'block';
      onInputChange(e);
    });

    document.addEventListener('click', () => {
      ulRef.current.style.display = 'none';
    });
  }, []);

  const listCategories = () => {
    return categories.map((category) => {
      return (
        <li
          key={category.id}
          className="dropdown__list__item"
          onClick={() => {
            inputRef.current.value = category.name;
          }}
        >
          {category.name}
        </li>
      );
    });
  };

  const onInputChange = (e) => {
    const newCategories = categories.filter((cat) =>
      cat.slug.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setCategories(newCategories);
  };

  return (
    <div className="form">
      <div className="field">
        <input
          type="text"
          name="category"
          ref={inputRef}
          onChange={onInputChange}
          placeholder="category"
        />
        <i className="fas fa-caret-down"></i>
      </div>
      <ul className="dropdown__list" ref={ulRef}>
        {listCategories()}
      </ul>
    </div>
  );
};

export default DropDown;
