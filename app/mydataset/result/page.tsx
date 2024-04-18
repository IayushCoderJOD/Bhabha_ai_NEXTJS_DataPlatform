'use client'
import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Loading from "../../loading";
import axios from "axios";

interface Pair {
  id: number;
  question: string;
  answer?: string;
}

export default function Results() {
  const [loader, setLoader] = useState<boolean>(true);
  const [selectedPairs, setSelectedPairs] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("id");
  const [theme, setTheme] = useState<boolean>(false);
  const [data, setData] = useState<Pair[]>([]);

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

  return (
    <div className="absolute right-0 w-[80%]">
      {loader ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-xl font-medium uppercase underline pt-3"> Datasets Created</h1>

          <div>
            <ul className="flex flex-wrap justify-evenly">
              {filteredData.map((pair) => (
                <li
                  className={"border text-xs md:text-base ld:text-lg border-black w-[40%] lg:w-[30%] rounded-lg shadow-lg shadow-gray-400 bg-[#fff] text-black  m-3 p-3"}
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
}
