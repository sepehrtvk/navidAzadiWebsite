'use client'

import { useMemo, useState } from 'react'
import cs from 'classnames'
import { Collapse } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
// eslint-disable-next-line import/no-cycle
import RouteList from '../RouteList'
import { RouteListItemType } from '../RouteList/type'
import { checkIfItemSelected } from './helper'
import { ChevronDownIcon } from '@svgs/icons'

function RouteListItem(item: RouteListItemType) {
  // TODO: handle required role for showing the item
  const { label, icon, route, subItems } = item

  const [isOpen, setIsOpen] = useState(false)
  const currentPath = usePathname()
  const isSelected = useMemo(() => checkIfItemSelected(item, currentPath), [currentPath, item])

  const router = useRouter()

  const handleItemClick = () => {
    if (route) router.push(route)
    else setIsOpen(prev => !prev)
  }

  return (
    <>
      <div
        role="presentation"
        className={cs('p-2  rounded-lg cursor-pointer flex items-center justify-between w-full', {
          'hover:bg-border-light': !isSelected,
          'bg-background-surface': isSelected && route,
          'bg-neutral-0': isSelected && subItems,
        })}
        onClick={handleItemClick}
      >
        <div className="flex gap-1 items-center">
          {icon &&
            icon(
              cs('w-6 h-6', {
                'fill-primary-darker': isSelected,
                'fill-text': !isSelected,
              }),
            )}
          <div
            className={cs(' text-medium15 px-2', {
              'text-primary-darker': isSelected && route,
              'text-bold15': isSelected && route,
            })}
          >
            {label}
          </div>
        </div>
        {subItems && (
          <ChevronDownIcon
            className={cs('fill-text w-4 h-4 transition', { '-rotate-180': isOpen })}
          />
        )}
      </div>
      <Collapse in={isOpen} timeout="auto">
        {subItems && <RouteList items={subItems} withRightPadding />}
      </Collapse>
    </>
  )
}

export default RouteListItem
