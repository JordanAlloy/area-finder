import Logo from "./imgs/logo.svg";
import { FaSearch } from "react-icons/fa";
import Card from "./card";


export default function Home() {

  return (
    <>
      <div className="navbar bg-bgs">
        <div className="flex justify-between nav-container">
          <div className="logos">
            <a href="#">
              <img className="logo" src={Logo} alt="" />
            </a>
          </div>
          <a href="">
            <p className="text-btns text-xs"><b>LOGIN</b></p>
          </a>
        </div>
      </div>

      <section className="hero-section flex justify-between">
        <div className="flex justify-between hero-container">
          <div className="hero-mobile">
            <h1 className="text-5xl font-bold mt-36 mb-10">
              Find a place you will love to live!
            </h1>
            <p className="mb-10 text-xl">
              see through the lenses of the people who have lived or visited the
              neighbourhood you might have in mind
            </p>
            <div className="input-search">
              <FaSearch className="search" />
              <input
                className="bg-input bg-inputBorder outline-inputBorder text-xs flex"
                type="text"
                name="search-box"
                id=""
                placeholder="Enter Address"
              />
              <button className="bg-btns text-white p-2 text-sm">SEARCH</button>
            </div>
          </div>
        </div>
        <div className="card-rows md:flex md:justify-between sm:hidden">
          <div className="card-side">
            {<Card />}
            {<Card />}
            {<Card />}
          </div>
          <div className="card-side">
            {<Card />}
            {<Card />}
            {<Card />}
          </div>
        </div>
      </section>
    </>
  );
}
