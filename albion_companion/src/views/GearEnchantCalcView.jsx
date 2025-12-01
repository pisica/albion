import React, { useState } from 'react';

export default function GearEnchantCalcView() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    
    return (
      <div className="p-8">
        <div className="">
          <label htmlFor="user_input" className="text-sm font-medium text=gray-700">
            Enter Item:
          </label>

          <input
            type="text"
            id="user-input"
            name="user-input"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter item..."
            className="
              p-1
              border
              border-gray-300
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-orange-900
              focus:border-transparent
              text-gray-900
              transition duration-150
            "
          />
        </div>
        <div className="p-8">
          {inputValue}
        </div>
      </div>
    );
}

