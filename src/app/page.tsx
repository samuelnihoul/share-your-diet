'use client'
import React, { useState } from 'react';
import FoodSelector from '../components/FoodSelector';
import FoodGrid from '../components/FoodGrid';

const Home = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Share Your Diet</h1>
      <FoodSelector selectedFoods={selectedFoods} setSelectedFoods={setSelectedFoods} />
      {selectedFoods.length === 9 && <FoodGrid selectedFoods={selectedFoods} />}
    </div>
  );
};

export default Home;
