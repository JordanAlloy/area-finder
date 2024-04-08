import StarRatings from "../StarRatings/star";
import person from "./imgs/la.jpg";
import comments from "./imgs/comments.svg";
import like from "./imgs/like.svg";
import dislike from "./imgs/dislike.svg";
import network from "./imgs/network.svg";

export default function Card() {
  return (
    <>
      <div className="card-section">
        <div className="cards">
          <div className="card-info flex justify-evenly m-2">
            <div className="profile flex mt-9">
              <img className="person" src={person} alt="" />
              <div className="name">
                <b>
                  <p>James T.</p>
                </b>
                <p className="month">5 months ago</p>
              </div>
            </div>
            <div className="ratings mr-6 mt-9">
              <b>
                <p className="ml-2 mr-1">Ikete, Lekki</p>
              </b>
              {<StarRatings />}
            </div>
          </div>
          <b>
            <p className="m-2">
              There is no stable electricity. The roads are fairly good and
              there is a sense of community. The drainage system is poor and
              most residents litter their surroundings. There are lots of stores
              and Supermarkets
            </p>
          </b>
          <div className="icons">
            <div className="icon-reactions flex justify-evenly">
              <p>
                <img src={like} alt="" />
                24
              </p>
              <p>
                {" "}
                <img src={dislike} alt="" />
                02
              </p>
              <p>
                <img src={comments} alt="" />
                125
              </p>
              <p>
                <img src={network} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
