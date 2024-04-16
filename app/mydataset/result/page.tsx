'use client'
import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Loading from "../../loading";
import { dummyData } from "../../constants/Data";

interface Pair {
    id: number;
    question: string;
    answer?: string;
}

export default function Results() {
    const [loader, setLoader] = useState<boolean>(true);
    const [selectedPairs, setSelectedPairs] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('id');
    const [theme, setTheme] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);

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
        const filteredPairs = dummyData.filter(pair => selectedPairs.includes(pair.id));
        const jsonlData = filteredPairs.map(pair => JSON.stringify(pair)).join('\n');
        const blob = new Blob([jsonlData], { type: 'application/json' });
        saveAs(blob, 'filtered_data.jsonl');
    };

    const filteredData: Pair[] = dummyData
    .filter(pair =>
        pair.question.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
        if (sortBy === 'id') {
            return a.id - b.id;
        } else if (sortBy === 'question') {
            return a.question.localeCompare(b.question);
        } else if (sortBy === 'liked') {
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

                    <div className="flex justify-evenly items-center mb-3">
                        {/* <h1 className="text-md">Search any question</h1>
                        <input
                            type="text"
                            placeholder="Type here..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="ml-3 top-3 border-2 w-[17%] text-black text-lg shadow-2xl border-black bg-gray-100 px-2 py-1 rounded-md mr-3"
                        /> */}
                        {/* <button className="bg-gray-800 font-medium border-2 border-black hover:bg-blue-950 p-2 text-white text-lg rounded-xl shadow-2xl m-3 w-fit ml-[40%]" onClick={generateJSONL}>Download Final Data</button>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-gray-200 px-3 py-2 rounded-md"
                        >
                            <option value="id">Sort by ID</option>
                            <option value="question">Sort by Question</option>
                            <option value="liked">Sort by Liked</option>
                        </select> */}
                    </div>
                    <div>
                        <ul className="flex flex-wrap justify-evenly">
                            {filteredData.map(pair => (
                                <li className={!theme ? "border border-black w-[30%] rounded-xl bg-[#fff] text-black text-lg m-3 p-3" : "border border-black w-[30%]  rounded-xl bg-gray-100 text-black text-lg m-3 p-3"} key={pair.id}>
                                    <label>
                                        {/* <input
                                            type="checkbox"
                                            checked={selectedPairs.includes(pair.id)}
                                            onChange={() => handlePairSelection(pair.id)}
                                        />
                                        👍🏻Like */}
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
