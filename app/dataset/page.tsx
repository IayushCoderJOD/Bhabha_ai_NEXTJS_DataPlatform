'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const CreateDataSets = () => {
  const [temperature, setTemperature] = useState(0.5);
  const [maxLength, setMaxLength] = useState(6000);
  const [frequencyPenalty, setFrequencyPenalty] = useState(0);
  const [presencePenalty, setPresencePenalty] = useState(0);

  const handleTemperatureChange = (e:any) => {
    setTemperature(parseFloat(e.target.value));
  };

  const handleMaxLengthChange = (e:any) => {
    setMaxLength(parseFloat(e.target.value));
  };

  const handleFrequencyPenaltyChange = (e:any) => {
    setFrequencyPenalty(parseFloat(e.target.value));
  };

  const handlePresencePenaltyChange = (e:any) => {
    setPresencePenalty(parseFloat(e.target.value));
  };

  return (
    <div className="absolute right-0 flex justify-start w-[80%]">
      <div className="flex flex-col w-[80%]">
        <textarea
          className="text-md text-lg p-2 border h-full m-6 border-gray-300 rounded-md py-2 px-4 mb-3"
          rows={20}
          cols={60}
          placeholder="Tell about your model, including it's name, who created it, languages it know, last training knowledge cut-off date..."
        />
        <Link href="/mydataset/result">
          <button className="bg-green-600 w-fit hover:bg-green-700 text-white font-bold py-2 mb-1 mx-5 px-4 rounded">
            Submit
          </button>
        </Link>
      </div>
      
      <div className="w-[17%] bg-[#fff] p-6 h-screen right-0 shadow-md absolute overflow-auto">
      <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1">Model</label>
          <select className="w-full border border-gray-300 rounded-xl py-2 px-4">
            <option value="chatgpt">ChatGPT</option>
            <option value="gemini">Gemini</option>
            <option value="devin">Devin</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1">Temperature - {temperature}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={temperature}
            onChange={handleTemperatureChange}
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1">Maximum Length - {maxLength}</label>
          <input
            type="range"
            min="100"
            max="20000"
            step="10"
            value={maxLength}
            onChange={handleMaxLengthChange}
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1">Stop sequences</label>
          <input
            type="text"
            placeholder='Enter seq. and press tab'
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div> 
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1">Frequency Penalty - {frequencyPenalty}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={frequencyPenalty}
            onChange={handleFrequencyPenaltyChange}
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1">Presence Penalty - {presencePenalty}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={presencePenalty}
            onChange={handlePresencePenaltyChange}
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1">Inject start text</label>
          <input
            type="text"
            placeholder='✅'
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-1">Inject restart text</label>
          <input
            type="text"
            placeholder='✅'
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1">Show probablities</label>
          <select
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          >
            <option value="chatgpt">Off</option>
            <option value="gemini">On</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CreateDataSets;

