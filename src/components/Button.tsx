import React from 'react'

interface IButtonProps {
  full?: boolean,
  children: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<IButtonProps> = ({onClick, children, full=false}) => {
  return <button className={`button${full ? ' button--full' : ''}`} onClick={onClick}>{children}</button>
}