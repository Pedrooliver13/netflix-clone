import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;


  /* BREAKPOINT 576PX */
  @media(min-width: 36rem){
    max-width: 540px;
  }

  /* BREAKPOINT 768PX */
  @media(min-width: 48rem){
    max-width: 720px;
  }

  /* BREAKPOINT 992PX */
  @media(min-width: 62rem){
    max-width: 960px;
  }

  /* BREAKPOINT 768PX */
  @media(min-width: 75rem){
    max-width: 1200px;
    padding: 0;
  }


`