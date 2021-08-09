import React from "react";
import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Test</Htag> 
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка 2</Button>
    </>
  );
}
