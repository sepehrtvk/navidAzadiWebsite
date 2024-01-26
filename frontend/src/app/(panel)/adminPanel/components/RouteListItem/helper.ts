import { RouteListItemType } from '../RouteList/type'

export function checkIfItemSelected(item: RouteListItemType, path: string) {
  if (item.route) {
    return item.route === path
  }
  if (item.subItems) {
    const isSelected = item.subItems.some(subItem => checkIfItemSelected(subItem, path))
    return isSelected ?? false
  }
  return false
}
