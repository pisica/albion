import React, { useState, useEffect } from 'react';
import { TreeSelect } from 'antd';
import useFragmentPriceFetcher from '../components/useFragmentPriceFetcher';
import useItemDataFetcher from '../components/useItemDataFetcher';
import treeData from '../components/ItemTreeData.js';
import { useCache } from '../context/CacheContext';

export default function GearEnchantCalcView() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemString, setSelectedItemString] = useState(null);
    const [selectedEnchantValue, setEnchantValue] = useState('0');
    const [selectedTierValue, setTierValue] = useState('4');
    const [fetchItem, setFetchItem] = useState(null);
    const [fetchFragment, setFetchFragment] = useState([null]);
    const {data, loading, error} = useItemDataFetcher(fetchItem);
    const {fragData, fragLoading, fragError} = useFragmentPriceFetcher(fetchFragment);
    const { getCacheData, setCacheData } = useCache();
    const [ fragmentCost, setFragmentCost ] = useState([0]);

    console.info(fragData);

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
      setFetchFragment(['runes', 'souls', 'relics']);
      setFetchItem(`T${selectedTierValue}_${selectedItem}`)
    }

    useEffect(() =>{
      if (!data) {
        return;
      }
      if (!fragData['runes']) {
        return;
      }
      console.info('GOT BOTH DATA AND FRAGDATA!')
      var fragmentCount = 0;
      const itemTypeFragCount = {
        'oneHanded': 288,
        'twoHanded': 384,
        'armor': 192,
        'bag': 192,
        'helmet': 96,
        'boots': 96,
        'cape': 96,
        'offhand': 96,
      };

      const weaponType = data[0]['twoHanded'];
      if (weaponType != null) {
        if (weaponType) {
          fragmentCount = itemTypeFragCount['twoHanded'];
        } else {
          fragmentCount = itemTypeFragCount['oneHanded'];
        }
      } else {
        fragmentCount = itemTypeFragCount[data[0]['slotType']];
      }

      const cost = [0];
      cost.push(data[1][0].sell_price_min+fragmentCount*fragData['runes'][selectedTierValue-4].sell_price_min)
      cost.push(cost[cost.length-1]+fragmentCount*fragData['souls'][selectedTierValue-4].sell_price_min)
      cost.push(cost[cost.length-1]+fragmentCount*fragData['relics'][selectedTierValue-4].sell_price_min)
      console.info(`cost: ${cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
      setFragmentCost(cost);
    }, [fragData, data]);

    const loadingDiv = (
      <div className="text-white p-4">Loading data...</div>
    );

    const errorDiv = (
      <div className="text-white p-4">Error fetching data: {error}</div>
    );

    const resultDiv = () => {
      if (error || fragError) {
       return errorDiv;
      }
      if (loading || fragLoading) {
       return loadingDiv;
      }
      if (data && fragData) {
        console.info('data && fragData')
        return (
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
          {/*<h2 className="text-2xl font-bold mb-4 text-orange-300">
              Master's Hollowfall
            </h2>*/}

            <div className="space-y-3">
              <div className="grid grid-cols-5 border-b border-black pb-4">
                <span></span> {/*Place holder*/}
                <span>Min Sell Order</span>
                <span>Item Cost (Fragments)</span>
                <span>Max Buy Order</span>
                <span>Item Cost (Fragments)</span>
              </div>
              {data[1].map((item, index) => (
                <div key={index} className="border-b border-black pb-3">
                  <div className="grid grid-cols-5 gap-4 mt-2 text-gray-200">
                  {/*}<p>{selectedItemString} [{fetchItem[1]}.{item.quality-1}]</p>*/}
                  <p>{data[0]['localizedNames']['EN-US']} [{selectedTierValue}.{index}]</p>
                  <p>{item.sell_price_min > 0 ? item.sell_price_min.toLocaleString() : "N/A"}</p>
                  <p>{fragmentCost[index] ? fragmentCost[index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null}</p>
                  <p>{item.buy_price_max > 0 ? item.buy_price_max.toLocaleString() : "N/A"}</p>
                  <p>{}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };
      return null;
    };

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
          {resultDiv()}
        </div>
      </div>
    );
}

