import http from "../request";
import { UserSearchForm, UserSearchListItem } from '@/types/system/user'
export const getList = (data: UserSearchForm) => {
  return http.post('/auth-core/system/user/userPage', data)
}