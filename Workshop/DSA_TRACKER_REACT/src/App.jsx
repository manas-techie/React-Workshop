import { useCallback, useEffect, useId, useRef, useState } from "react";
import ProblemItem from "./components/ProblemItem";

function App() {
  const [problems, setProblems] = useState([{ id: 1, title: "Demo Problem" }]);

  const id = useId();
  const inputRef = useRef(null);

  //add problem function
  const addProblem = (newProblem) => {
    setProblems([...problems, newProblem]);
  };

  // delete problems function
  const deleteProblem = useCallback((id) => {
    setProblems((prev) => prev.filter((problem) => problem.id != id));
  }, []);

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTitle = inputRef.current.value.trim();
    if (!newTitle) return;

    const newProblem = {
      id: id,
      title: newTitle,
    };

    addProblem(newProblem);
    inputRef.current.value = "";
  };

  // focus input function
  useEffect(() => {
    inputRef.current.focus();
  }, [problems]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            DSA Problem Tracker
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Add your DSA problems and track your time
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <input
            type="text"
            ref={inputRef}
            placeholder="e.g. Reverse Linked List"
            className="flex-1 bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
          >
            Add Question
          </button>
        </form>

        <ul className="space-y-4">
          {problems.length === 0 ? (
            <div className="text-center py-10 border border-dashed border-gray-800 rounded-xl bg-gray-900/50">
              <p className="text-gray-500 italic">
                No problems added yet. Start typing above!
              </p>
            </div>
          ) : (
            problems.map((problem) => (
              <ProblemItem
                key={problem.id}
                problem={problem}
                onDelete={deleteProblem}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
