import { useEffect, useState } from "react";
import LabelUI from "./label.presenter";

export default function Label(props) {

    return (
      <LabelUI
        text={props.text}
        default={props.default}
        icon={props.icon}
      />
    );
  }