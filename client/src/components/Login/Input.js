import React from "react";
import classNames from "classnames";

export function Input(props) {
  const { innerRef, className, ...attributes } = props;

  const classes = classNames("form-control bg-light", className);

  return <input ref={innerRef} className={classes} {...attributes} />;
}
