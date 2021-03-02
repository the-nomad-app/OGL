import React from "react";
import classNames from "classnames";

export function Label(props) {
  const { for: htmlFor, children, className, ...attributes } = props;

  const classes = classNames('mb-2', className);

  return (
    <label htmlFor={htmlFor} className={classes} {...attributes}>
      {children}
    </label>
  );
}
