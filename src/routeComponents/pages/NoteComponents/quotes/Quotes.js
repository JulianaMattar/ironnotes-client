import React from "react";
import { Link } from "react-router-dom";
import "./quote.css";
import BlueBtn from "../../../../components/btns/BlueBtn";
import TextInput from "../../../../components/TextInput";

import { PopUp, ContainerPopUp } from "../NoteStyles/events";
function SearchPopUp(props) {
  function ClosePopUp() {
    document.getElementById("QuotesPopUp").style.display = "none";
    document.getElementById("QuotesPopUpOne").style.display = "none";
  }
  console.log(props.titles);
  return (
    <>
      <PopUp id="QuotesPopUp" onClick={ClosePopUp}></PopUp>
      <ContainerPopUp id="QuotesPopUpOne">
        <BlueBtn> Random Quote </BlueBtn>
        <BlueBtn>
          <Link to=""> Add a Quote </Link>
        </BlueBtn>
      </ContainerPopUp>
    </>
  );
}

export default SearchPopUp;
