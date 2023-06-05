export class RoleSearchForm {
  pageNum?: number = 1;
  pageSize?: number = 10;
  /**
   * 角色名称
   */
  roleName?: string = '';
  /**
   * 状态 true启用 false禁用
   */
  status?: boolean | string = 'all';
}
export interface RoleSearchRes {
  pageNum: number;
  pageSize: number;
  result: RoleSearchResResultItem[];
  totalCount: number;
  totalPage: number;
}
export interface RoleSearchResResultItem {
  /**
   * 创建时间
   */
  // createdTime?: Date;
  createTime: Date, // 不知道什么时候改的字段
  /**
   * ID
   */
  id: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 状态 true启用 false禁用
   */
  status?: boolean;
  /**
   * 更新时间
   */
  updateTime?: Date;
  /**
   * 授权用户数
   */
  userNum?: number;
}