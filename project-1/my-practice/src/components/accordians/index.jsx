import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordion() {
  //single selection
  const [selected, setSelected] = useState(null);

  //multi selection
  const [enableMultiSelection , setenableMultiSelection] = useState(false);
  const [multiple , setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function hhandleMultiSelection(getCurrentId){

  }

  return (
    <div className="wrapper">
        <button onClick={setenableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem?.id)}
                className="title"
              >
                <h3>{dataItem?.question}</h3>
                <span>+</span>
              </div>
              {
              selected === dataItem?.id ?
                <div className="container">{dataItem?.answer}</div>
              : null
              }
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
