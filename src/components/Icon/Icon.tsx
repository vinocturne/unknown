'use client'

import React, { SVGProps, useRef, useState, useEffect } from 'react'
import { IconProps } from './index.types'

export const Icon = ({
  name,
  width,
  height,
  rotate = 0,
  cn = '',
  ...props
}: IconProps) => {
  const ImportIconRef = useRef<React.ComponentType<
    SVGProps<SVGSVGElement>
  > | null>(null)
  const [loading, setLoading] = useState(false)
  const [, setLoadState] = useState(0)

  const importIcon = async () => {
    try {
      const { default: iconData } = await import(`./icons/${name}.svg?react`)
      ImportIconRef.current = iconData
      setLoadState((val: number) => {
        return val + 1
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!name) return
    setLoading(true)
    importIcon().then(() => {})
  }, [name])

  useEffect(() => {
    setLoadState((val: number) => {
      return val + 1
    })
  }, [])

  if (!loading && ImportIconRef.current) {
    const { current: Icon } = ImportIconRef

    return (
      <Icon
        style={{ transition: 'all 0.3s', transform: `rotate(${rotate}deg)` }}
        width={width}
        height={height}
        className={cn}
        {...props}
      />
    )
  }

  return (
    <span style={{ display: 'inline-block', width: width, height: height }} />
  )
}
