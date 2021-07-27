import { ListModel } from "../models";
import { Stack } from "@tymate/margaret";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #dedede;
  margin: 30px 0;
  padding: 30px;
  width: 100%;
  border-radius: 5px;
`;

const Input = styled.input`
  background-color: white;
  color: black;
  width: 400px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const List = ({ items }: { items: ListModel[] }) => {
  const [search, setSearch] = useState("");
  const displayeditems = (items || []).filter(
    (item) => item.label.indexOf(search) !== -1
  );

  return (
    <Wrapper>
      <h2> Ma liste de ouf </h2>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="search something"
        data-test="input"
      />
      <div data-test="inputValue"> my search value: {search} </div>

      <Stack direction="column" gutterSize={0.25} marginTop={1}>
        {(displayeditems ?? []).map((item, index) => (
          <div data-test="item"> {item.label} </div>
        ))}
      </Stack>
    </Wrapper>
  );
};
