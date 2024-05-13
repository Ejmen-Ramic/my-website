export type LengthUnits =
  | 'cm'
  | 'mm'
  | 'in'
  | 'px'
  | 'pt'
  | 'pc'
  | 'em'
  | 'ex'
  | 'ch'
  | 'vw'
  | 'vh'
  | 'rem'
  | 'vmin'
  | 'vmax'
  | '%'

export type StyleUnit = number | `${number}${LengthUnits}`

export type Sizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '3xl' | '4xl' | '5xl' | '6xl' | 'full'

export type Padding = 'base' | 'md'
