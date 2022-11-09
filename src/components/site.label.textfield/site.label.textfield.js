import "./site.label.textfield.scss";
import React from "react";
import ReactInputMask from "react-input-mask";
import { TextField, Typography } from "@mui/material";
import { useStyles } from "./site.label.textfield.style";
import { Paper, InputAdornment, CircularProgress } from "@mui/material";
import clsx from "clsx";
import { regex } from "../utils/regex";
import { IsMobileWidth } from "../utils/utils";

export default function SiteLabelTextField(props) {
  const {
    classNames,
    maxLength,
    pattern,
    startAdornment,
    responsiveStartAdornment,
    endAdornment,
    label,
    topAdornment,
    execStatus,
    error,
    maskChar,
    value,
    mask,
    placeholder,
    validationType,
    autoFocus,
    responsiveEndAdornment,
    type,
  } = props;
  const mobileWidth = IsMobileWidth();
  const classes = useStyles();
  const onChange = (event) => {
    if (validationType === "ALPHANUMERIC") {
      if (
        regex.alphanumericWithOutSpace.test(event.target.value) ||
        event.target.value === ""
      ) {
        props.onChange(event);
      }
    } else if (validationType === "ALPHANUMERIC_WITH_SPACE") {
      if (
        regex.alphanumericWithSpace.test(event.target.value) ||
        event.target.value === ""
      ) {
        props.onChange(event);
      }
    } else if (validationType === "NUMERIC") {
      if (
        regex.wholeNumber.test(event.target.value) ||
        event.target.value === ""
      ) {
        props.onChange(event);
      }
    }
    else if(validationType === "ALPHABETS_WITH_SPACE") {
      if (
        regex.alphabetsWithSpace.test(event.target.value) ||
        event.target.value === ""
      ) {
        props.onChange(event);
      }
    }
    else {
      props.onChange(event);
    }
  };
  return (
    <React.Fragment>
      {mask && !props.disabled ? (
        <ReactInputMask
          mask={mask}
          maskChar={maskChar}
          placeholder={placeholder}
          onChange={onChange}
          alwaysShowMask={false}
          value={value}
        >
          {(inputProps) => (
            <div className="w-100">
              {topAdornment ? (
                <Typography
                  className={clsx("pt-2 fw-bolder", error && "text-danger")}
                >
                  <label for="exampleInputEmail1" class="form-label d-flex">
                  {topAdornment} {error && <i class="ms-1 font-size-small fas fa-asterisk"></i>}
                  </label>
                </Typography>
              ) : (
                ""
              )}
              <div
                id="site-label-text-field"
                className={clsx(
                  "w-100",
                  mobileWidth && responsiveEndAdornment && "d-flex flex-column"
                )}
              >
                {execStatus && execStatus.status === "PENDING" ? (
                  <div>
                    <CircularProgress size={50} className="p-3" />
                  </div>
                ) : (
                  <TextField
                    {...inputProps}
                    label={null}
                    autoFocus = {autoFocus}
                    disabled={props.disabled ? props.disabled : null}
                    variant="outlined"
                    className={clsx(error && "input-error-border")}
                    inputProps={{
                      maxLength: maxLength,
                      pattern: pattern,
                    }}
                    InputProps={{
                      classes: {
                        inputAdornedEnd: classes.endAdn,
                        notchedOutline: classes.noBorder,
                        input: classes.input,
                        disabled: classes.disabled,
                      },
                      startAdornment:
                        startAdornment || responsiveStartAdornment ? (
                          <InputAdornment
                            color="secondary"
                            className="h-100"
                            position="start"
                          >
                            {startAdornment && !mobileWidth
                              ? startAdornment
                              : responsiveStartAdornment
                              ? null
                              : startAdornment}
                          </InputAdornment>
                        ) : null,
                      endAdornment: (
                        <InputAdornment className="h-100" position="end">
                          {endAdornment && !mobileWidth
                            ? endAdornment
                            : responsiveEndAdornment
                            ? ""
                            : endAdornment}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                {mobileWidth ? responsiveEndAdornment : null}
              </div>
            </div>
          )}
        </ReactInputMask>
      ) : (
        <div className="w-100 mt-2">
          {topAdornment ? (
            <Typography
              className={clsx("pt-2 fw-bolder", error && "text-danger")}
            >
              <label for="exampleInputEmail1" class="form-label d-flex">
                {topAdornment} {error && <i class="ms-1 font-size-small fas fa-asterisk"></i>}
              </label>
            </Typography>
          ) : (
            ""
          )}
          <div
            id="site-label-text-field"
            className={clsx(
              "w-100",
              mobileWidth && responsiveEndAdornment && "d-flex flex-column"
            )}
          >
            {
              <div className="d-flex align-items-center w-100">
                {execStatus && execStatus.status === "PENDING" ? (
                  <div className="pr-4">
                    <CircularProgress size={45} className="p-3" />
                  </div>
                ) : null}
                <div className="flex-grow-1">
                  {props.disabled === true ? (
                    <div
                      className={clsx(
                        "d-flex align-items-center p-2 MuiOutlinedInput-root",
                        classNames,
                        endAdornment && "justify-content-between"
                      )}
                    >
                      <div>{value}</div>
                      <div>
                        {endAdornment && !mobileWidth
                          ? endAdornment
                          : ""
                          ? null
                          : endAdornment
                          ? endAdornment
                          : null}
                      </div>
                    </div>
                  ) : (
                    <TextField
                      id={props.id}
                      onBlur={props.onBlur}
                      value={value}
                      className={clsx(error && "input-error-border")}
                      placeholder={placeholder}
                      autoFocus = {autoFocus}
                      label={null}
                      disabled={props.disabled ? props.disabled : undefined}
                      variant="outlined"
                      inputProps={{
                        maxLength: maxLength,
                        pattern: pattern,
                      }}
                      onChange={onChange}
                      InputProps={{
                        classes: {
                          //inputAdornedStart : classes.startAdn,
                          inputAdornedEnd: classes.endAdn,
                          //inputAdornedStart: classes.paddingLeft,
                          notchedOutline: classes.noBorder,
                          input: classes.input,
                          disabled: classes.disabled,
                        },
                        startAdornment:
                          startAdornment || responsiveStartAdornment ? (
                            <InputAdornment
                              color="secondary"
                              className="h-100"
                              position="start"
                            >
                              {startAdornment && !mobileWidth
                                ? startAdornment
                                : responsiveStartAdornment
                                ? null
                                : startAdornment}
                            </InputAdornment>
                          ) : null,
                        endAdornment: (
                          <InputAdornment className="h-100" position="end">
                            {endAdornment && !mobileWidth
                              ? endAdornment
                              : responsiveEndAdornment
                              ? null
                              : endAdornment}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                  {mobileWidth ? responsiveEndAdornment : null}
                </div>
              </div>
            }
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
