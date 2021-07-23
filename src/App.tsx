import React from "react";
// ? if you want to keep "noImplicitAny": true from tsconfig
// import "./modules.d";
import { Stack } from "@tymate/margaret";
// TODO: TS Path not working
import { InnerComponent } from "./components/InnerComponent";
import { List } from "./components/List";
import { InnerComponentModel, CategoryEnum, ListModel } from "./models";
import { Link } from "react-router-dom";

const App = () => {
  const data: InnerComponentModel = {
    title: "Mon titre",
    subtitle: "je ne suis pas obligatoire",
    id: 1,
  };

  const items: ListModel[] = [
    {
      label: "Mon super titre",
      slug: "slug-de-ouf",
    },
    {
      label: "Mon super titre mieux",
      slug: "slug-de-ouf-encore-plus-ouf-que-l-autre",
    },
    {
      label: "Rien à voir",
      slug: "lui-il-est-pas-ouf",
    },
  ];

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
    <Stack direction="column">
      <h1 data-test="title"> Typescript styled-components </h1>
      <Stack paddingTop={2} gutterSize={2} size="full" alignY="stretch">
        <InnerComponent {...data} />
        <InnerComponent
          title="Mon titre 2"
          id={2}
          category={CategoryEnum.ROCK}
          as={Link}
        />
      </Stack>
      <List items={items} />
    </Stack>
  );
};

export default App;
