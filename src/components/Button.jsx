import React from 'react'

export default function Button({
    children,
    type="button",
    bgColor ="bg-gray-700",
    textColor="text-white",
    className="",
    ...props
}) {
  return (
    <button type= {type} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}
