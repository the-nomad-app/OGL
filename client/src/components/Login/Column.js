import React from 'react'
import classNames from 'classnames'

export function Column(props) {
  const { children, className, ...attributes } = props

  const classes = classNames(
    'col',
    className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}