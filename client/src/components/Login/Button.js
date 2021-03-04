import React from "react";
import classNames from "classnames";

export function Button(props) {
  const { children, className, ...attributes } = props;

  const classes = classNames("btn", className);

  return (
    <button className={classes} {...attributes}>
      {children}
    </button>
  );
}
