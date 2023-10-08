import { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ colors }) {
  const [showColorList, setShowColorList] = useState(true);
  const [selectedColor, setSelectedColor] = useState('');
  const [divBackgroundColor, setDivBackgroundColor] = useState('');
  
  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    toggleColorList();

    setDivBackgroundColor(color);
  };

  return (
    <div>
      <br />
      <button className="custom-button" onClick={toggleColorList}>
        Pick a color
      </button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div className="selected-color" style={{ backgroundColor: divBackgroundColor}  }>
          <h1>Selected Colour: {selectedColor}</h1>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
