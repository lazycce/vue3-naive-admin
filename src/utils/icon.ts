import { renderIcon } from './index'

import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

export const constantRouterIcon =  {
  BookIcon: renderIcon(BookIcon),
  PersonIcon: renderIcon(PersonIcon),
  WineIcon: renderIcon(WineIcon)
}