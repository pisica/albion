import React, { useState } from 'react';
import useAlbionOnlineDataFetcher from '../components/useAlbionOnlineDataFetcher';

export default function GearEnchantCalcView() {
    const [inputValue, setInputValue] = useState('');
    const [fetchItem, setFetchItem] = useState([null, null]);
    const [selectedEnchantValue, setEnchantValue] = useState('0');
    const [selectedTierValue, setTierValue] = useState('4');
    const {data, loading, error} = useAlbionOnlineDataFetcher(fetchItem);

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleTierChange = (event) => {
      setTierValue(event.target.value);
    }

    const handleEnchantChange = (event) => {
      setEnchantValue(event.target.value);
    }

    const fetchData = () => {
      console.info("fetchData")
      setFetchItem([inputValue, selectedTierValue])
    }

    const loadingDiv = (
      <div className="text-white p-4">Loading data...</div>
    );

    const errorDiv = (
      <div className="text-white p-4">Error fetching data: {error}</div>
    );

    const resultDiv = !data ? null : (
      <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-orange-300">
          Master's Hollowfall
        </h2>

        <div className="space-y-3">
          <div className="grid grid-cols-3 border-b border-black pb-4">
            <span></span>
            <span>Min Sell Order</span>
            <span>Max Buy Order</span>
          </div>
          {data.map((item, index) => (
            <div key={index} className="border-b border-black pb-3">
              <div className="grid grid-cols-3 gap-4 mt-2 text-gray-200">
                <p>{fetchItem[0]} [{fetchItem[1]}.{item.quality}]</p>
                <p>{item.sell_price_min > 0 ? item.sell_price_min.toLocaleString() : "N/A"}</p>
                <p>{item.buy_price_max > 0 ? item.buy_price_max.toLocaleString() : "N/A"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )

    {/*if (!data || data.length === 0) {
      return <div className="text-white p-4">No price data available.</div>
    };*/}

    return (
      <div className="p-8">
        <div id="input" className="flex py-5 items-center space-x-3 border-b border-black">
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
              focus:ring-orange-500
              focus:border-transparent
              text-gray-900
              transition duration-150
            "
          />
          <select
            id="select-tier"
            name="select-tier"
            value={selectedTierValue}
            onChange={handleTierChange}
            className="
              p-1
              border
              border-gray-300
              rounded-lg
              bg-white
              text-gray-900
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
              appearance-none
            "
          >
            {/* The Options */}
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <button
            onClick={fetchData}
            className="
              px-4
              py-2
              bg-orange-800
              hover:bg-orange-700
              text-white
              font-semibold
              rounded-lg
              shadow-md
              transition duration-150
              whitespace-nowrap
            "
          >
          Get Data
          </button>
        </div>
        <div className="py-5">
          {resultDiv || errorDiv}
        </div>
      </div>
    );
}

