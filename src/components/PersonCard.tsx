import { Stack } from "@tymate/margaret";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  color: #002;
  padding: 20px;
  min-width: 400px;
`;

const PersonCard = ({ data }) => {
  return (
    <Card>
      <h3> {data.name} </h3>
      <div> {data.house} </div>
    </Card>
  );
};

export default PersonCard;
