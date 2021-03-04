import React from 'react'
import classNames from 'classnames'

export function Container(props) {
  const { children, className, ...attributes } = props

  const classes = classNames(
    'container',
    className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}