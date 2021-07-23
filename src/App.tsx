import React from "react";
// ? if you want to keep "noImplicitAny": true from tsconfig
// import "./modules.d";
import { Stack } from "@tymate/margaret";
// TODO: TS Path not working
import { InnerComponent } from "./components/InnerComponent";
import { InnerComponentModel, CategoryEnum } from "./models";
import { Link } from "react-router-dom";

const App = () => {
  const data: InnerComponentModel = {
    title: "mon titre",
    id: 1,
  };

  // on peut également remplacer { arg1: string; arg2?: number } par une interface
  const typeTest = ({
    arg1,
    arg2,
  }: {
    arg1: string;
    arg2?: number;
  }): boolean => {
    return arg1 === "yolo";
  };

  typeTest({ arg1: "hello", arg2: 0 });

  return (
    <>
      <h1> Typescript styled-components </h1>
      <Stack paddingTop={2} gutterSize={2}>
        <InnerComponent {...data} />
        {/* TODO: to must be required */}
        <InnerComponent
          title="Mon titre 2"
          id={2}
          category={CategoryEnum.ROCK}
          as={Link}
        />
      </Stack>
    </>
  );
};

export default App;
