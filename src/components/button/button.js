import React from "react";
import "./button.scss";

export const Button = (props) => {
  const { text } = props;
  return (
    <div class="box-3">
      <div class="btn btn-three">
        <span>{text}</span>
      </div>
    </div>
  );
};
