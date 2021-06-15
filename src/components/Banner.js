import React from "react";
import "./styles/Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">Movie Name</h1>
        <h1 className="banner_description">
          {truncate(
            `Test Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Modi non enim veniam iure ipsam, velit nostrum magnam, deserunt
          libero saepe dolor eum. Eligendi, ipsa quidem explicabo voluptas
          aliquid magnam labore.`,
            150
          )}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">More Info</button>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
