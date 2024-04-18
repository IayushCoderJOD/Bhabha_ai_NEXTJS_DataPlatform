'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


interface Dataset {
  id: number;
  name: string;
}

const MyDataset = () => {
  const [datasets, setDatasets] = useState<Dataset[] | null>(null);
  const [loading, setLoading] = useState(true); // Track loading status

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/mydataset");
      setDatasets(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  const [visibleDatasets, setVisibleDatasets] = useState(3); // Initial number of datasets to display

  const loadMore = () => {
    setVisibleDatasets(prev => prev + 3); // Increase the number of visible datasets by 3
  };

  return (
    <div className="absolute right-0 w-[84%] flex flex-col items-center">
      <div className='text-3xl pt-5 font-bold w-[70%] text-center'>
        View previously created datasets
      </div>
      <div className="justify-center mt-5">
        {loading ? ( // Display loading message if data is being fetched
          <p>Loading datasets...</p>
        ) : datasets && datasets.length > 0 ? ( // Check if datasets exist
          datasets.slice(0, visibleDatasets).map(dataset => (
            <Link key={dataset.id} href={"/mydataset/result"}>
              <div className="p-5 cursor-pointer w-[700px] rounded-xl shadow-slate-300 hover:bg-[#151515] hover:text-white shadow-xl border m-2">
                {dataset.name}
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam incidunt, maiores distinctio at labore nesciunt nemo voluptatibus quisquam optio libero.</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No datasets from history. Please create one from the create dataset page.</p>
        )}
      </div>
      {datasets && visibleDatasets < datasets.length && (
        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default MyDataset;
