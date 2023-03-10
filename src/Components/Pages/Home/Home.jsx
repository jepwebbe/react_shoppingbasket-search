import React from "react";
import useGetApiDataFromEnpoint from "../../../Hooks/useGetApiDataFromEnpoint";
import { GridOne } from "../../../Styles/GridOne";
import { FooterStyled } from "../../../Styles/Styled.Footer";
import { HeroStyled } from "../../../Styles/Styled.Hero";
import { HomeStyled } from "../../../Styles/Styled.Home";
import { MainStyled } from "../../../Styles/Styled.Main";
import ShoppingCart from "../../Partials/ShoppingCart/ShoppingCart";
import Products from "../Products/Products";

const Home = () => {
  return (
    <GridOne>
      <HomeStyled>Header</HomeStyled>
      <HeroStyled>Hero</HeroStyled>
      <MainStyled>
        <h2>Main - med Zustand</h2>
        <div>
          <Products />
          <ShoppingCart />
        </div>
      </MainStyled>
      <FooterStyled>Footer</FooterStyled>
    </GridOne>
  );
};

export default Home;
