import React, { memo, useEffect, useRef, useState } from "react";

const ProblemItem = memo(({ problem, onDelete }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeIntervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timeIntervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timeIntervalRef.current);
    }

    return () => {
      clearInterval(timeIntervalRef.current);
    };
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning((prev) => !prev);
  };

  // Helper to format seconds -> MM:SS
  const formatTime = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (totalSeconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-gray-600 hover:bg-gray-800 transition-all gap-4 sm:gap-0 group">
      <div className="flex flex-col gap-1">
        <span className="font-bold text-lg text-gray-100 group-hover:text-blue-400 transition-colors">
          {problem.title}
        </span>
        <div className="flex items-center gap-2 text-gray-400 font-mono text-sm bg-gray-900/50 px-2 py-1 rounded w-fit">
          <svg
            className="w-4 h-4 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{formatTime(time)}</span>
        </div>
      </div>

      <div className="flex gap-2 w-full sm:w-auto">
        <button
          onClick={handleToggle}
          className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-medium transition-all shadow-sm ${
            isRunning
              ? "bg-amber-500/10 text-amber-500 border border-amber-500/50 hover:bg-amber-500 hover:text-white"
              : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/50 hover:bg-emerald-500 hover:text-white"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => onDelete(problem.id)}
          className="px-4 py-2 rounded-lg font-medium text-red-500 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all shadow-sm"
        >
          Delete
        </button>
      </div>
    </li>
  );
});

export default ProblemItem;
