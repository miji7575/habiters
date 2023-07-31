import { useEffect, useState } from "react";
import LabelUI from "./label.presenter";

export default function Label(props) {

    return (
      <LabelUI
        value={props.value}
        default={props.default}
        icon={props.icon}
      />
    );
  }