'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const CreateDataSets = () => {
  const [temperature, setTemperature] = useState(0.5);
  const [maxLength, setMaxLength] = useState(6000);
  const [frequencyPenalty, setFrequencyPenalty] = useState(0);
  const [presencePenalty, setPresencePenalty] = useState(0);

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseFloat(e.target.value));
  };

  const handleMaxLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxLength(parseFloat(e.target.value));
  };

  const handleFrequencyPenaltyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrequencyPenalty(parseFloat(e.target.value));
  };

  const handlePresencePenaltyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPresencePenalty(parseFloat(e.target.value));
  };

  return (
    <div className="absolute right-0 flex justify-start w-[90%] lg:w-[75%] ">
      <div className="flex flex-col w-[80%]">
        <textarea
          className="text-md text-lg p-2 border h-full m-6 border-gray-300 rounded-md py-2 px-4 mb-3"
          rows={20}
          cols={60}
          placeholder="Tell about your model, including it's name, who created it, languages it know, last training knowledge cut-off date..."
        />
        <Link href="/createdataset/knowledgemodel/result">
          <button className="bg-[#2e9c79] w-fit hover:bg-[#33856b] text-white font-semibold py-2 mb-1 mx-5 px-4 rounded">
            Submit
          </button>
        </Link>
      </div>
      
      <div className=" w-[20%] lg:w-[20%] bg-[#fff] p-6 h-screen right-0 shadow-md absolute overflow-auto">
        <div className="mb-2">
          <label className="block text-gray-700 text-xs xl:text-sm font-bold mb-1">Model</label>
          <select className="w-full border border-gray-300 rounded-xl py-2 px-4">
            <option value="chatgpt">ChatGPT</option>
            <option value="gemini">Gemini</option>
            <option value="devin">Devin</option>
          </select>
        </div>
        <div className="mb-3">
          <div className='flex'>
  <label className="block text-gray-700 text-xs xl:text-sm font-bold mb-1 pt-1 pr-1">Temperature - </label>
  <input
    type="number"
    min="0"
    max="1"
    step="0.01"
    value={temperature}
    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
      let value = parseFloat(e.target.value);
      if (value < 0) value = 0;
      if (value > 1) value = 1;
      setTemperature(value);
    }}
    className="w-1/3 border border-gray-300 rounded-lg p-1 pb-0 mr-2"
  />  
</div>
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
          <label className="block text-gray-700 text-xs xl:text-sm font-bold mb-1">Maximum Length - {maxLength}</label>
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
          <label className="block text-gray-700 text-xs xl:text-sm font-bold mb-1">Stop sequences</label>
          <input
            type="text"
            placeholder='Enter seq. and press tab'
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div> 
        <div className="mb-3">
          <label className="block text-gray-700 text-xs xl:text-sm font-bold mb-1">Frequency Penalty - {frequencyPenalty}</label>
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
          <label className="block text-gray-700 text-xs xl:text-sm font-bold mb-1">Presence Penalty - {presencePenalty}</label>
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
          <label className="block text-gray-700 text-xs xl:text-sm font-bold mb-1">Inject start text</label>
          <input
            type="text"
            placeholder='✅'
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-xs xl:text-sm font-bold mb-1">Show probablities</label>
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

