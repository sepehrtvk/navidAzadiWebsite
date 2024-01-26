import { ReactNode } from 'react'
import { MenuListItem } from '@apis/menu/my-list'
import { RequireOnlyOne } from 'src/utils/requireOnlyOne'

export type RouteListItemType = RequireOnlyOne<
  {
    label: string
    icon?: (className: string) => ReactNode
    route?: string
    subItems?: RouteListItemType[]
    id?: MenuListItem
  },
  'route' | 'subItems'
>

export interface RouteListProps {
  items: RouteListItemType[]
  withGap?: boolean
  withRightPadding?: boolean
}
