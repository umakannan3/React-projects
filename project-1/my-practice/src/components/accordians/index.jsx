import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordion() {
  
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection , setenableMultiSelection] = useState(false);
  const [multiple , setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId){
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId)

    console.log(findIndexofCurrentId);
    if(findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId);
      else  cpyMultiple.splice(findIndexofCurrentId, 1);

    setMultiple(cpyMultiple);
  }
  console.log(selected , multiple);


  return (
    <div className="wrapper">
        <button onClick={()=>setenableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                    enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
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
