/*
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-06-05 16:02:37
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-05 16:02:53
 * @FilePath: \tius-manager-system\src\types\system\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export class UserSearchForm {
  /**
   * 用户姓名
   */
  nickname?: string = '';
  /**
   * 组织id
   */
  orgId?: number | '' = '';
  pageNum?: number = 1;
  pageSize?: number = 10;
  /**
   * 状态
   */
  status?: boolean | 'all' | '' = 'all';
  /**
   * 用户账号
   */
  username?: string = '';
}
export interface UserSearchListItem {
  /**
   * 创建时间
   */
  createTime?: Date;
  id?: number;
  /**
   * 岗位编码
   */
  jobCode?: string;
  /**
   * 岗位名称
   */
  jobName?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 用户姓名
   */
  nickname?: string;
  /**
   * 组织名称
   */
  orgName?: string;
  /**
   * 状态
   */
  status?: boolean;
  /**
   * 用户类型
   */
  typeName?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
  /**
   * 用户账号
   */
  username?: string;
}
