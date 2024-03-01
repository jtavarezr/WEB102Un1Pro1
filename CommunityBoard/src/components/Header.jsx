import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Learning with CodePatch </h1>
        <h2>By JonathanTavarez</h2>
        <nav>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
