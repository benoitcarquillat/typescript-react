import { useState, useEffect } from "react";

// ? if you want to keep "noImplicitAny": true from tsconfig
import "./modules.d";
import { Stack } from "@tymate/margaret";
// TODO: TS Path not working
import { InnerComponent } from "./components/InnerComponent";
import Home from "./containers/Home";
import Page from "./containers/Page";
import { InnerComponentModel, CategoryEnum } from "./models";
import { Link } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import { CSSTransition, Transition } from "react-transition-group";
import { useEffectOnce } from "react-use";

const App = () => {
  const data: InnerComponentModel = {
    title: "mon titre",
    id: 1,
  };
  const [inProp, setInProp] = useState(false);

  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  useEffect(() => {
    setInProp(true);
  }, []);

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

      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            I'm a fade Transition!
          </div>
        )}
      </Transition>

      <Routes>
        <Route path="/page" element={<Page />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
