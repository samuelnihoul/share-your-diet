'use client'
import React, { useRef } from 'react';
import { toPng } from 'html-to-image';

const FoodGrid = ({ selectedFoods }) => {
    const gridRef = useRef(null);

    const downloadImage = async () => {
        if (gridRef.current === null) return;

        const dataUrl = await toPng(gridRef.current);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'diet-grid.png';
        link.click();
    };

    return (
        <div>
            <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', width: '300px', height: '300px' }}>
                {selectedFoods.map((food, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', width: '100px', height: '100px' }}>
                        <img src={food.svg} alt={food.name} style={{ width: '50px', height: '50px' }} />
                    </div>
                ))}
            </div>
            <button onClick={downloadImage}>Download Image</button>
        </div>
    );
};

export default FoodGrid;
