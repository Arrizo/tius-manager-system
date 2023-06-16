import http from "../request";
import { RoleSearchForm, RoleSearchRes } from '@/types/system/role'
export const getList = (data: RoleSearchForm) => {
  return http.post<RoleSearchRes>('/auth-core/role/getPage', data)
}