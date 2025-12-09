import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import useAlbionOnlineDataFetcher from '../components/useAlbionOnlineDataFetcher';
import treeData from '../components/ItemTreeData.js';

export default function GearEnchantCalcView() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemString, setSelectedItemString] = useState(null);
    const [selectedEnchantValue, setEnchantValue] = useState('0');
    const [selectedTierValue, setTierValue] = useState('4');
    const [fetchItem, setFetchItem] = useState([null, null]);
    const {data, loading, error} = useAlbionOnlineDataFetcher(fetchItem);

    const handleTierChange = (event) => {
      setTierValue(event.target.value);
    }

    const handleEnchantChange = (event) => {
      setEnchantValue(event.target.value);
    }

    const handleItemChange = (item) => {
      const {value, label} = item
      setSelectedItem(value);
      setSelectedItemString(label);
    }

    const filterTreeNode = (input, treeNode) => {
      const inputLower = input.toLowerCase();
      const labelMatch = treeNode.label.toLowerCase().includes(inputLower);
      const valueMatch = treeNode.value.toLowerCase().includes(inputLower);
      return labelMatch || valueMatch;
    }

    const fetchData = () => {
      setFetchItem(['runes', ''])
      setFetchItem([selectedItem, selectedTierValue])
    }

    {/*
    const loadingDiv = (
      <div className="text-white p-4">Loading data...</div>
    );

    const errorDiv = (
      <div className="text-white p-4">Error fetching data: {error}</div>
    );
    */}

    const resultDiv = !data ? null : (
      <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
      {/*<h2 className="text-2xl font-bold mb-4 text-orange-300">
          Master's Hollowfall
        </h2>*/}

        <div className="space-y-3">
          <div className="grid grid-cols-3 border-b border-black pb-4">
            <span></span> {/*Place holder*/}
            <span>Min Sell Order</span>
            <span>Max Buy Order</span>
          </div>
          {data.map((item, index) => (
            <div key={index} className="border-b border-black pb-3">
              <div className="grid grid-cols-3 gap-4 mt-2 text-gray-200">
                <p>{selectedItemString} [{fetchItem[1]}.{item.quality-1}]</p>
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
          <TreeSelect
            showSearch
            treeData={treeData}
            value={selectedItem}
            onChange={handleItemChange}
            labelInValue={true}
            filterTreeNode={filterTreeNode}
            placeholder="Please Select"
            style={{ width: '10%' }}
          >
          </TreeSelect>
          <select
            id="select-tier"
            name="select-tier"
            value={selectedTierValue}
            onChange={handleTierChange}
            className="
              p-1
              px-3
              border
              border-gray-300
              text-center
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
            <option value="4">Tier 4</option>
            <option value="5">Tier 5</option>
            <option value="6">Tier 6</option>
            <option value="7">Tier 7</option>
            <option value="8">Tier 8</option>
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
          {resultDiv}
        </div>
      </div>
    );
}

