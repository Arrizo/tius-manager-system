import http from "../request";
import { MenuSearchForm } from '@/types/system/menu'
export const getMenuList = (data: MenuSearchForm) => {
  return http.post('/auth-core/system/menu/menuList', data)
}