import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`;

export const Speaker = styled(Quote)`
  align-self: end;
  margin-bottom: 50px;
`;
