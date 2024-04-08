import { useState } from "react";
import Data from "./Data";

export default function Accordian() {
  const [display, SetDisplay] = useState(null);

  function displayItems(getCurrentId) {
    SetDisplay(getCurrentId === display ? null : getCurrentId);
  }

  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          {Data && Data.length > 0 ? (
            Data.map((dataItem) => (
              <div className="item">
                <div className="question">
                  <h3 onClick={() => displayItems(dataItem.id)}>
                    {dataItem.question} <span>+</span>
                  </h3>
                </div>
                {display === dataItem.id ? (
                  <div className="answer">
                    <p>{dataItem.answer}</p>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <b>
              <p>No Data Loading!</p>
            </b>
          )}
        </div>
      </div>
    </>
  );
}

// import { useState } from "react";
// import Data from "./Data";

// export default function Accordian() {
//   const [selected, setSelected] = useState(null);
//   const [enable, setEnable] = useState(false);
//   const [multiple, setMultiple] = useState([]);

//   function handleSingleSelection(getCurrentId) {
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//   }

//   function handleMultipleSelection(getCurrentId) {
//     let cpyMultiple = [...multiple];
//     const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

//     if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
//     else cpyMultiple.slice(findIndexOfCurrentId, 1);

//     setMultiple(cpyMultiple);
//   }
//   return (
//     <>
//       <div className="wrapper">
//         <button onClick={() => setEnable(!enable)}>Enable Selection</button>
//         <div className="accordian">
//           {Data && Data.length > 0 ? (
//             Data.map((dataItem) => (
//               <div className="item">
//                 <div
//                   onClick={
//                     enable
//                       ? () => handleMultipleSelection(dataItem.id)
//                       : () => handleSingleSelection(dataItem.id)
//                   }
//                   className="question"
//                 >
//                   <h3>{dataItem.question}</h3>
//                   <span>+</span>
//                 </div>
//                 {enable
//                   ? multiple.indexOf(dataItem.id) !== -1 && (
//                       <div className="answer">{dataItem.answer}</div>
//                     )
//                   : selected === dataItem.id && (
//                       <div className="answer">{dataItem.answer}</div>
//                     )}
//                 {/* {selected === dataItem.id ||
//                 multiple.indexOf(dataItem.id) !== -1 ? (
//                   <div className="answer">{dataItem.answer}</div>
//                 ) : null} */}
//               </div>
//             ))
//           ) : (
//             <b>
//               <p>No Data Found</p>
//             </b>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
// export default function Accordian() {
//   const [selected, setSelected] = useState(null);

//   function handleSingleSelection(getCurrentId) {
//     setSelected(getCurrentId ===selected ? null : getCurrentId);
//   }
//   return (
//     <>
//       <div className="wrapper">
//         <div className="accordian">
//           {Data && Data.length > 0 ? (
//             Data.map((dataItem) => (
//               <div className="item">
//                 <div
//                   onClick={() => handleSingleSelection(dataItem.id)}
//                   className="question"
//                 >
//                   <h3>{dataItem.question}</h3>
//                   <span>+</span>
//                 </div>
//                 {selected === dataItem.id ? (
//                   <div className="answer">{dataItem.answer}</div>
//                 ) : null}
//               </div>
//             ))
//           ) : (
//             <p>No Data Found</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
