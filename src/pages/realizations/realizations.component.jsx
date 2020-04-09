import React from "react";
import CartDemo from "../../components/cartDemo/cart-demo.component";
import {
  CartDemoText1,
  CartDemoCSSGrid,
  CartDemoFlexBox,
  CartDemoFloats,
  DWDProject,
  iTunesProject
} from "../.././texts/cart-demo.texts";

import {
  RealizationsContainer,
  RealizationsHeader,
  RealizationsContent,
  RealizationsH2,
  RealizationsP,
} from "./realizations.styles";

import CrwnSS from "../../assets/IMG/crwn-clothing-gif.gif";
import NexterSS from "../../assets/IMG/nexter-gif.gif";
import NatoureSS from "../../assets/IMG/natoure-gif.gif";
import TrelloSS from "../../assets/IMG/flex-ss.png";
import DWDSS from "../../assets/IMG/DWD Animation.gif";
import iTunesSS from "../../assets/IMG/iTunes Animation.gif";

const Realizations = () => {
  return (
    <RealizationsContainer id="realizations">
      <RealizationsHeader>
        <RealizationsH2>My realizations</RealizationsH2>
        <RealizationsP>
          Those are my small projects that I manage to complete. <br></br> Some
          of them were for commercial usage and others for educational purpose
        </RealizationsP>
      </RealizationsHeader>
      <RealizationsContent>
        <CartDemo
          img={CrwnSS}
          repo="https://crwn-clothing-cv.herokuapp.com/"
          title="CRWN CLOTHING"
          description={CartDemoText1}
          tech="React,SASS,Redux,Firebase,StyledComponents"
        />
        <CartDemo
          img={TrelloSS}
          repo="https://bartoszkie.github.io/Flexbox-project---Trillo/"
          title="Flexbox Project"
          description={CartDemoFlexBox}
          tech="HTML 5,SASS"
        />
        <CartDemo
          img={NatoureSS}
          repo="https://bartoszkie.github.io/Float-project---Natoure/"
          title="Floats Project"
          description={CartDemoFloats}
          tech="HTML 5,SASS"
        />
        <CartDemo
          img={NexterSS}
          repo="https://bartoszkie.github.io/CSS_GRID-project---Nexter/"
          title="CSS GRID Project"
          description={CartDemoCSSGrid}
          tech="HTML 5,SASS"
        />
        <CartDemo
          img={DWDSS}
          repo="https://bartoszkie.github.io/DWD/"
          title="DWD Project"
          description={DWDProject}
          tech="HTML 5,SASS,JavaScript(ES6+)"
        />
        <CartDemo
          img={iTunesSS}
          repo="https://bartoszkie.github.io/iTunes-Application/"
          title="iTunes search App"
          description={iTunesProject}
          tech="React.js,Styled-Components,SASS"
        />
      </RealizationsContent>
    </RealizationsContainer>
  );
};

export default Realizations;
