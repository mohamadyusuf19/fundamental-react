import React from "react";
import "./Silabus.styles.scss";

const silabusIcon = require("../../assets/pondok-silabus.jpeg");

function Silabus() {
  return (
    <div className="container">
      <img src={silabusIcon} alt="programmer" className="image-programmer" />
      <div className="card">
        <p className="title">Supercamp Programmer</p>
        <p className="content">
          Supercamp Programmer adalah program pembelajaran Full Stack Web Developer immersive
          di Indonesia. Kami juga memiliki beragam program singkat untuk
          membangun fondasi menjadi seorang progammer yang handal. Kurikulum
          kami dirancang untuk membangun keahlian yang dapat diaplikasikan pada
          perkembangan dunia teknologi terkini.
        </p>
        <div className="button">
          <p className="button-text">Lihat Silabus</p>
        </div>
      </div>
    </div>
  );
}

export default Silabus;
