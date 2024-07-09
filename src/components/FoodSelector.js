'use client'
import React, { useState } from 'react';

const foodOptions = [
    { name: 'Apple', svg: '/svgs/apple.svg' },
    { name: 'Banana', svg: '/svgs/banana.svg' },
    { name: 'Carrot', svg: '/svgs/carrot.svg' }
    // Add more foods as needed
];

const FoodSelector = ({ selectedFoods, setSelectedFoods }) => {
    const handleFoodClick = (food) => {
        if (selectedFoods.length < 9 && !selectedFoods.includes(food)) {
            setSelectedFoods([...selectedFoods, food]);
        }
    };

    return (
        <div>
            <h2>Select Your 9 Most Consumed Foods</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {foodOptions.map((food) => (
                    <div
                        key={food.name}
                        onClick={() => handleFoodClick(food)}
                        style={{
                            margin: '10px',
                            cursor: 'pointer',
                            border: selectedFoods.includes(food) ? '2px solid green' : '2px solid transparent',
                        }}
                    >
                        <img src={food.svg} alt={food.name} style={{ width: '50px', height: '50px' }} />
                        <p>{food.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodSelector;
