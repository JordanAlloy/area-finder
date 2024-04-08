import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRatings({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouse(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(hover);
  }

  return (
    <div className="flex star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouse()}
            onMouseLeave={() => handleMouseLeave()}
            size={12}
          />
        );
      })}
    </div>
  );
}

// import { useState } from "react";
// import { FaStar } from "react-icons/fa";

// export default function StarRatings({ noOfSars = 5 }) {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   function handleClick(getCurrentIndex) {
//     setRating(getCurrentIndex);
//   }

//   function handleMouse(getCurrentIndex) {
//     setHover(getCurrentIndex);
//   }
//   function handleMouseLeave() {
//     setHover(rating);
//   }

//   return (
//     <>
//       <div className="star-rating">
//         {[...Array(noOfSars)].map((_, index) => {
//           index += 1;
//           return (
//             <FaStar
//               className={index <= (hover || rating) ? "active" : "inactive"}
//               key={index}
//               onClick={() => handleClick(index)}
//               onMouseMove={() => handleMouse()}
//               onMouseLeave={() => handleMouseLeave()}
//               size={40}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// }
