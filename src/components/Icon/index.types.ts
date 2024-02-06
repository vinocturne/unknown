import { SVGProps } from 'react'

export interface IconType {
  name: string
  width?: number
  height?: number
  rotate?: number
}

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'name' | 'height' | 'width' | 'rotate'>,
    IconType {
  cn?: string
}
