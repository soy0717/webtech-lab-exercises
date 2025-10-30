import React from "react";
import HeaderH2 from "../components/HeaderH2.jsx";
import Content from "../components/Content.jsx"; // Import the new component

function Home() {
  return (
    <div>
      <HeaderH2>Welcome to My Portfolio</HeaderH2>
      <Content>
        Hey! Have a look at my profile!
      </Content>
    </div>
  );
}

export default Home;