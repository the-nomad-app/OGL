import React from "react";
import classNames from "classnames";

export function FormGroup(props) {
  const { children, className, ...attributes } = props;

  const classes = classNames("form-group mb-3", className);

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  );
}
