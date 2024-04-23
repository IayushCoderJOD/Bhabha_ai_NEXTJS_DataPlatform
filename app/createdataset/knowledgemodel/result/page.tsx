'use client'
import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Loading from "@/app/loading";
import axios from "axios";
import Link from "next/link";

interface Pair {
  id: number;
  question: string;
  answer?: string;
}

const Results = () => {
  const [loader, setLoader] = useState<boolean>(true);
  const [selectedPairs, setSelectedPairs] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("id");
  const [theme, setTheme] = useState<boolean>(false);
  const [data, setData] = useState<Pair[]>([]);
  const [stopGenerating, setStopGenerating] = useState<boolean>(false);
  const [continueGenerating, setContinueGenerating] = useState<boolean>(true); // Added state
  const [cardIndex, setCardIndex] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  // Api endpoint created to fetch the data from /api/result
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/result");
      setData(response.data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoader(false);
    }
  };

  const handlePairSelection = (pairId: number): void => {
    const pairIndex = selectedPairs.indexOf(pairId);
    if (pairIndex === -1) {
      setSelectedPairs([...selectedPairs, pairId]);
    } else {
      const updatedPairs = [...selectedPairs];
      updatedPairs.splice(pairIndex, 1);
      setSelectedPairs(updatedPairs);
    }
  };

  const generateJSONL = (): void => {
    const filteredPairs = data.filter((pair) => selectedPairs.includes(pair.id));
    const jsonlData = filteredPairs.map((pair) => JSON.stringify(pair)).join("\n");
    const blob = new Blob([jsonlData], { type: "application/json" });
    saveAs(blob, "filtered_data.jsonl");
  };

  const filteredData: Pair[] = data
    .filter((pair) => pair.question.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "id") {
        return a.id - b.id;
      } else if (sortBy === "question") {
        return a.question.localeCompare(b.question);
      } else if (sortBy === "liked") {
        const likedA = selectedPairs.includes(a.id);
        const likedB = selectedPairs.includes(b.id);
        if (likedA && !likedB) {
          return -1;
        } else if (!likedA && likedB) {
          return 1;
        } else {
          return 0;
        }
      }
      return 0;
    });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!stopGenerating && continueGenerating && cardIndex < filteredData.length) { // Check continueGenerating
      timer = setTimeout(() => {
        console.log("Card index:", cardIndex);
        setCardIndex(prevIndex => prevIndex + 1);
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [stopGenerating, continueGenerating, cardIndex, filteredData]); // Include continueGenerating here

  console.log("Filtered data length:", filteredData.length);

  return (
    <div className="absolute right-0 w-[80%]">
      {loader ? (
        <Loading />
      ) : (
        <>
          <div className="flex space-x-44">
            <Link href={"/createdataset/knowledgemodel"}>
              <h1 className="text-xl cursor-pointer font-medium  underline pt-3"> {`<- edit the inputs`}</h1>
            </Link>
            {/* <div>
            <button className="bg-black text-xs sm:text-sm lg:text-base xl:text-lg shadow-gray-300 shadow-md hover:bg-gray-900  rounded-lg  m-2 ml-4  p-2 text-gray-100" onClick={() => setStopGenerating(true)}>Stop Generating</button>
            <button className="bg-black text-xs sm:text-sm lg:text-base xl:text-lg shadow-gray-300 shadow-md hover:bg-gray-900  rounded-lg  m-2 ml-4  p-2 text-gray-100" onClick={() => { setStopGenerating(false); setContinueGenerating(true); }}>Continue Generating</button>
            </div> */}
          </div>
          <div>
            <ul className="flex flex-wrap justify-start">
              {filteredData.slice(0, cardIndex).map((pair) => (
                <li
                  className={"border text-xs md:text-base ld:text-lg border-black w-[40%] lg:w-[30%] rounded-md shadow-lg shadow-gray-400 bg-[#fff] text-black  m-3 p-3"}
                  key={pair.id}
                >
                  <label>
                    <p className="pt-2 font-bold text-lg">
                      {"Q." + pair.id + " " + pair.question}
                    </p>
                    <p className="font-light text-sm">
                      Answer- {pair.answer}
                    </p>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
