"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const CalCpn = () => {
  const [matricPercentage, setMatricPercentage] = useState("");
  const [interPercentage, setInterPercentage] = useState("");
  const [testMarks, setTestMarks] = useState("");

  const [instituteMatricPercentage, setInstituteMatricPercentage] =
    useState("");
  const [instituteInterPercentage, setInstituteInterPercentage] = useState("");
  const [instituteTestPercentage, setInstituteTestPercentage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [weightsError, setWeightsError] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedWeights = localStorage.getItem("instituteWeights");
    if (savedWeights) {
      try {
        const { matric, inter, test } = JSON.parse(savedWeights);
        setInstituteMatricPercentage(matric || "");
        setInstituteInterPercentage(inter || "");
        setInstituteTestPercentage(test || "");
      } catch (e) {
        console.error("Failed to parse saved weights", e);
      }
    }
  }, []);

  const handleSaveWeights = (e: React.FormEvent) => {
    e.preventDefault();
    setWeightsError(null);
    setIsSaved(false);

    const matric = parseFloat(instituteMatricPercentage);
    const inter = parseFloat(instituteInterPercentage);
    const test = parseFloat(instituteTestPercentage);

    if (
      isNaN(matric) ||
      isNaN(inter) ||
      isNaN(test) ||
      matric < 0 ||
      matric > 100 ||
      inter < 0 ||
      inter > 100 ||
      test < 0 ||
      test > 100
    ) {
      setWeightsError("Please enter valid percentages (0-100) for all fields.");
      return;
    }

    const totalWeight = matric + inter + test;
    if (Math.abs(totalWeight - 100) > 0.01) {
      setWeightsError(
        `Weights must add up to 100. (Current total: ${totalWeight.toFixed(2)})`
      );
      return;
    }

    const weights = {
      matric: instituteMatricPercentage,
      inter: instituteInterPercentage,
      test: instituteTestPercentage,
    };
    localStorage.setItem("instituteWeights", JSON.stringify(weights));

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    const instituteMatric = parseFloat(instituteMatricPercentage);
    const instituteInter = parseFloat(instituteInterPercentage);
    const instituteTest = parseFloat(instituteTestPercentage);

    if (
      isNaN(instituteMatric) ||
      isNaN(instituteInter) ||
      isNaN(instituteTest)
    ) {
      setError("Please set and save the university weight requirements first.");
      setIsLoading(false);
      return;
    }

    if (!matricPercentage || !interPercentage || !testMarks) {
      setError("Please fill in all your score fields.");
      setIsLoading(false);
      return;
    }

    const matric = parseFloat(matricPercentage);
    const inter = parseFloat(interPercentage);
    const test = parseFloat(testMarks);

    if (
      isNaN(matric) ||
      isNaN(inter) ||
      isNaN(test) ||
      matric < 0 ||
      matric > 100 ||
      inter < 0 ||
      inter > 100 ||
      test < 0 ||
      test > 100
    ) {
      setError("Please enter valid scores (from 0 to 100).");
      setIsLoading(false);
      return;
    }

    const matricWeight = matric * (instituteMatric / 100);
    const interWeight = inter * (instituteInter / 100);
    const testWeight = test * (instituteTest / 100);

    const finalCpn = matricWeight + interWeight + testWeight;

    setResult(finalCpn);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-6 lg:px-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
      <form
        onSubmit={handleSaveWeights}
        className="w-full lg:w-2/5 bg-neutral-800 rounded-lg p-6 flex flex-col shadow-xl"
      >
        <h1 className="text-3xl font-black mb-5 text-center">
          University Requirements
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="instituteMatric" className="font-medium">
              Matriculation Weight (%):
            </label>
            <input
              id="instituteMatric"
              type="number"
              min="0"
              max="100"
              step="0.01"
              className="bg-white/90 pl-3 py-2 rounded-lg text-black placeholder:text-neutral-600"
              placeholder="e.g., 10"
              value={instituteMatricPercentage}
              onChange={(e) => setInstituteMatricPercentage(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="instituteInter" className="font-medium">
              Intermediate Weight (%):
            </label>
            <input
              id="instituteInter"
              type="number"
              min="0"
              max="100"
              step="0.01"
              className="bg-white/90 pl-3 py-2 rounded-lg text-black placeholder:text-neutral-600"
              placeholder="e.g., 40"
              value={instituteInterPercentage}
              onChange={(e) => setInstituteInterPercentage(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="instituteTest" className="font-medium">
              Test Weight (%):
            </label>
            <input
              id="instituteTest"
              type="number"
              min="0"
              max="100"
              step="0.01"
              className="bg-white/90 pl-3 py-2 rounded-lg text-black placeholder:text-neutral-600"
              placeholder="e.g., 50"
              value={instituteTestPercentage}
              onChange={(e) => setInstituteTestPercentage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold transition-colors mt-2"
          >
            Save Weights
          </button>

          {weightsError && (
            <div className="mt-2 p-3 rounded-lg bg-red-800/50 text-red-300 font-semibold text-center">
              {weightsError}
            </div>
          )}
          {isSaved && (
            <div className="mt-2 p-3 rounded-lg bg-green-800/50 text-green-300 font-semibold text-center flex justify-center items-center gap-2">
              <Check size={20} />
              Weights saved to browser!
            </div>
          )}
        </div>
      </form>

      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-3/5 flex flex-col gap-5 p-6 rounded-lg bg-neutral-800 shadow-xl"
      >
        <h1 className="text-3xl font-black mb-3 text-center">Your Scores</h1>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="matric" className="font-medium text-gray-200">
            Your Matriculation Percentage:
          </label>
          <input
            id="matric"
            type="number"
            min="0"
            max="1F00"
            step="0.01"
            className="bg-white/90 pl-3 py-2 rounded-lg text-black placeholder:text-neutral-600"
            placeholder="e.g., 85.5"
            value={matricPercentage}
            onChange={(e) => setMatricPercentage(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="inter" className="font-medium text-gray-200">
            Your Intermediate Percentage:
          </label>
          <input
            id="inter"
            type="number"
            min="0"
            max="100"
            step="0.01"
            className="bg-white/90 pl-3 py-2 rounded-lg text-black placeholder:text-neutral-600"
            placeholder="e.g., 92.0"
            value={interPercentage}
            onChange={(e) => setInterPercentage(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="test" className="font-medium text-gray-200">
            Your Test Percentage:
          </label>
          <input
            id="test"
            type="number"
            min="0"
            max="100"
            step="0.01"
            className="bg-white/90 pl-3 py-2 rounded-lg text-black placeholder:text-neutral-600"
            placeholder="e.g., 78.2"
            value={testMarks}
            onChange={(e) => setTestMarks(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Calculating..." : "Calculate CPN"}
        </button>

        {error && (
          <div className="mt-4 p-3 rounded-lg bg-red-800/50 text-red-300 font-semibold text-center">
            {error}
          </div>
        )}
        {result !== null && (
          <div className="mt-4 p-4 rounded-lg bg-neutral-700 text-center">
            <span className="text-lg text-gray-300">Your Custom CPN is:</span>
            <div className="text-4xl font-bold text-purple-400 mt-2">
              {result.toFixed(2)}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CalCpn;
