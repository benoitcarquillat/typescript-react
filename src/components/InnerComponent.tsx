import styled from "styled-components";

import * as fromModels from "../models";

const Wrapper = styled.div`
  background-color: #dedede;
  color: black;
  flex-basis: 50%;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h3``;

export const InnerComponent = (props: fromModels.InnerComponentModel) => {
  return (
    <Wrapper>
      <Title> {props.title} </Title>
      <div> {props.subtitle}</div>
    </Wrapper>
  );
};
