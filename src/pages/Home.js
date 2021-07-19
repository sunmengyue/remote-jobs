import React from 'react';
import Jobs from '../components/Jobs';
import Header from '../components/Header';
import '../css/Home.css';
import SubHeader from '../components/SubHeader';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <SubHeader />
      <Jobs />
    </div>
  );
};

export default Home;
