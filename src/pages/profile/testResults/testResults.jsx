import React from "react";
import ResultsItem from "./testResultsItem";
import { ItemContainer } from '../../../component';
import "./testResults.css";

const results = [
  {
    id:0,
    name: "Html",
    description: "",
    icon:"html",
    lastSession: 3,
    score: 3.8
  },
  {
    id:1,
    name: "Css",
    description: "belgilash format tili",
    icon:"css",
    lastSession: 2,
    score: 7.0,
  },
  {
    id:2,
    name: "Bootstrap 4",
    description: "",
    icon:"bootstrap",
    lastSession: 2,
    score: 4.9,
  },
  {
    id:3,
    name: "Javascript asoslari",
    description: "",
    icon:"js",
    lastSession: 3,
    score: 6.0,
  },
  {
    id:4,
    name: "Angular js",
    description: "",
    icon:"angular",
    lastSession: 2,
    score: 3.7,
  },
  {
    id:5,
    name: "React.js",
    description: "",
    icon:"react",
    lastSession: "boshlanmadi",
    score: 7.0,
  }
];

const TestResults = () => {
  return (
    <ItemContainer title="Onlayn test natijalari">
      <div className="results-container">
        {
          results.map(result => <ResultsItem key={result.id} name={result.name} description={result.description} icon={result.icon} lastSession={result.lastSession} score={result.score}/>)
        }
      </div>
    </ItemContainer>
  );
}

export default TestResults;