import PersonCard from "../components/PersonCard";
import axios from "axios";
import { useState } from "react";
import { Stack } from "@tymate/margaret";

const HarryPotter = () => {
  const [list, setLiset] = useState([]);
  axios.get("https://hp-api.herokuapp.com/api/characters").then((response) => {
    setLiset(response.data);
  });
  return (
    <>
      <h1 text>Ma super liste harry potter pour être dans le theme </h1>

      <Stack
        data-test="characters"
        gutterSize={1}
        direction="column"
        alignX="center"
        paddingTop={2}
      >
        {(list ?? []).map((item, index) => (
          <PersonCard data={item} />
        ))}
      </Stack>
    </>
  );
};

export default HarryPotter;
