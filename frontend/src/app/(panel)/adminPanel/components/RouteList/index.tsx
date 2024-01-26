import cs from 'classnames'
// eslint-disable-next-line import/no-cycle
import RouteListItem from '../RouteListItem'
import { RouteListProps } from './type'

function RouteList({ items, withGap = false, withRightPadding = false }: RouteListProps) {
  return (
    <div className={cs('flex flex-col w-full', { 'gap-1': withGap, 'pr-6': withRightPadding })}>
      {items.map(item => (
        <RouteListItem key={item.label} {...item} />
      ))}
    </div>
  )
}

export default RouteList
