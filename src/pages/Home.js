import React from 'react';
import Jobs from '../components/Jobs';
import Header from '../components/Header';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Jobs />
    </div>
  );
};

export default Home;
