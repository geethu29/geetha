import React from "react";
import "./HomePage1.css";
import { Button } from "@mui/material";
function HomePage1() {
  return (
    <div>
      <main>
        <section>
          <center>
            <h1>Education is the key to all the locked doors of the unknown</h1>
            <h2>Show Your Talent To The World </h2>
            <h3> Events To Participate </h3>

            <ul className="List">
              <li>MUSIC</li>
              <li>PHOTOGRAPHY</li>
              <li>COMPETITIVE DANCE</li>
              <li>JOB FAIR</li>
              <li>CODING</li>
              <li>QUIZ</li>
              <li>PAPER PRESENTATION</li>
              <li>WORKSHOP</li>
            </ul>

            <Button
              variant="contained"
              size="small"
              href="/AddUser"
              onClick={() => console.log("clicked")}
            >
              REGISTER
            </Button>
          </center>
        </section>
      </main>

      <footer>
        <center>
          <p>Register now and win exciting prizes......!</p>
        </center>
      </footer>
    </div>
  );
}

export default HomePage1;
