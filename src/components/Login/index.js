import React from "react";

import * as Styled from "../../styles/components/Login/style";
import { Container } from "../../styles/Grid";

function Login() {
  return (
    <Styled.Login>
      <Container>
        <div className="title">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Symbol.png"
            alt="Netflix Logo"
          />

          <h2>Bem Vindo ao Netflix</h2>
        </div>
      </Container>
    </Styled.Login>
  );
}

export default Login;
