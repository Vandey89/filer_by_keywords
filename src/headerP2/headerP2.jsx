import React from "react";
import { HeaderP2Foto,  BodyPage2} from "./style";
import flag from "../public/icon/mishka.jpg";

export default function DenseAppBar() {
  return (
    <div>
  <HeaderP2Foto>
   <img src={flag} height="245px" width="100%" />
  </HeaderP2Foto>
  <BodyPage2></BodyPage2>
  </div>

  );
}