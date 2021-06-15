import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Nav from "./Nav";
function HomeScreen() {
  return (
    <homeScreen>
      <Nav />
      <Banner />
    </homeScreen>
  );
}
const homeScreen = styled.div``;
export default HomeScreen;
