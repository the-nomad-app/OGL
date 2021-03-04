import React from 'react'
import classNames from 'classnames'

export function Row(props) {
  const { children, className, ...attributes } = props

  const classes = classNames(
    'row',
    className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}