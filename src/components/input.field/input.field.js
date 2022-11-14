import React from "react";
import "./input.field.scss";
import clsx from "clsx";
import { OutlinedInput, Typography } from "@mui/material";

const InputField = (props) => {
  const { placeholder, value, onChange, topAdornment } = props;
  return (
    <div id="input-field">
      {topAdornment ? (
        <Typography className={clsx("pt-2 fw-bolder text-theme")}>
          <label for="exampleInputEmail1" class="form-label d-flex">
            {topAdornment}
          </label>
        </Typography>
      ) : (
        ""
      )}
      <OutlinedInput
        className="w-100 paper-root text-theme"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
