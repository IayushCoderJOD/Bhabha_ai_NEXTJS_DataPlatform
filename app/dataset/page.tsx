import Link from 'next/link';
import React from 'react';

const CreateDataSets = () => {
  return (
    <div className="flex justify-start w-[80%] ">
      <div className="flex flex-col w-[80%]  ">
        <textarea
          className="text-md text-lg p-2 border h-full m-6  border-gray-300 rounded-md py-2 px-4 mb-4"
          rows={15}
          cols={60}
          placeholder="Define your model here..."
        />
        <Link href={"/mydataset/result"}>
        <button className="bg-green-600 w-fit  hover:bg-green-700 text-white font-bold py-2 mb-1 mx-5 px-4 rounded">
          Submit
        </button>
        </Link>
      </div>
      <div className="w-[17%] bg-[#f3f3f3] p-8 h-screen right-0 shadow-2xl absolute">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Model</label>
          <select
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          >
            <option value="chatgpt">ChatGPT</option>
            <option value="gemini">Gemini</option>
            <option value="devin">Devin</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Temperature - 1</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
            style={{
              background: 'linear-gradient(to right, black, black)',
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Maximum Length - 1200</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
            style={{
              background: 'linear-gradient(to right, black, black)',
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Stop sequences</label>
          <input
            type="text"
            placeholder='Enter seq. and press tab'
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Frequency penalty</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
            style={{
              background: 'linear-gradient(to right, black, black)',
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Presence penalty</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
            style={{
              background: 'linear-gradient(to right, black, black)',
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Inject start text</label>
          <input
            type="text"
            placeholder='✅'
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Inject restart text</label>
          <input
            type="text"
            placeholder='✅'
            className="w-full border border-gray-300 rounded-xl py-2 px-4"
          />
        </div>
        <div className="mb-4">
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
