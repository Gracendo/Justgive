import React from "react";
import "../../assets/css/Objectives.css";
import child from "../../assets/images/happy_girls.jpg";

export default function Objectives() {
  return (
    <div>
      <div className="container_objectives">
        <div className="text_objectives">
          <h2> Our Purpose</h2>
          <p className="summary">
            Building Brighter Futures for Cameroon's Orphans
          </p>
          <p className="explanation">
            We're here to provide a safe and nurturing environment for orphaned
            children in Cameroon . And we're guessing you are too. That is why
            we were founded in 2024 under KIDEFIND - to make donation and
            volunteering accessible to everyone. Because with just 100 FCFA,1
            minute and a few taps on your phone, you can change an orphan's
            life.
          </p>
          <div className="img_container">
            <img src={child} className="child_img" />
          </div>
          <div className="motivation">
            <h3>There's one thing we'll never stop believing in</h3>
            <p className="summary">
              Together, we can be the generation that ensures every orphan in
              Cameroon has a full belly and a hopeful future.
            </p>
            <p className="explanation">
              There are more than 1300000 in Cameroon.By donating and
              volunteering your time , you're helping to ensure that orphans in
              your community have access to nutritious meals and a brighter
              future.
            </p>
          </div>
        </div>

        <div className="image"></div>
      </div>
    </div>
  );
}
