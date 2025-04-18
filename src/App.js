import React from 'react';
import { Typed } from 'react-typed';
import './style.css'; // move style.css here if needed

function App() {
  return (
    <div className="App">
      <img src="/images/Headshot.jpg" alt="Profile" className="profile-picture" />
      <h1 style={{ textAlign: "center" }}>
        <Typed
          strings={["Welcome to my portfolio!", "It's great to have you here!"]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>
    </div>
  );
}

export default App;
