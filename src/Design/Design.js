import React from "react";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

export default function Design() {
  return <div>{window.innerWidth > 450 ? <Desktop /> : <Mobile />}</div>;
}
