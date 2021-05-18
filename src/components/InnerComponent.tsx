import styled from "styled-components";

import * as fromModels from "../models";

const Wrapper = styled.div`
  background-color: #dedede;
  color: black;
  flex-basis: 50%;
  padding: 20px;
`;

export const InnerComponent = (props: fromModels.InnerComponentModel) => {
  return (
    <Wrapper>
      hello <div> test</div>
    </Wrapper>
  );
};
