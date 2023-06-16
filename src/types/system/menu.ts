/**
 * @ Author: chenzechao
 * @ Create Time: 2023-06-16 16:37:54
 * @ Modified by: chenzechao
 * @ Modified time: 2023-06-16 16:38:33
 * @ Description:
 */

export class MenuSearchForm {
  /**
   * 菜单名称
   */
  menuName?: string = '';
  /**
   * 菜单的类型
   */
  type?: string = 'all';
}

/**
 * 菜单新增业务对象
 */
export class MenuForm {
  id?: number;
  menuId?: number;
  /**
   * 菜单的图标
   */
  icon?: string = '';
  /**
   * 菜单名称
   */
  menuName: string = '';
  /**
   * 菜单的权限标识
   */
  perms?: string = '';
  /**
   * 当前菜单/按钮的父级菜单ID
   */
  pid?: number | '' = '';
  /**
   * 菜单的排序值
   */
  sort?: number;
  /**
   * 菜单的类型
   */
  type: string = '';
  /**
   * 菜单的地址
   */
  url?: string = '';
  children?: MenuForm[];
}

/**
 * 菜单返回集合对象
 */
export interface MenuListItem {
  /**
   * 子节点
   */
  children?: MenuListItem[];
  /**
   * 图标
   */
  icon?: string;
  /**
   * 菜单id
   */
  id?: number;
  menuId?: number;
  /**
   * 菜单名称
   */
  menuName?: string;
  /**
   * 权限标识
   */
  perms?: string;
  /**
   * 父级编号
   */
  pid?: number;
  /**
   * 显示状态
   */
  showStatus?: boolean;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 类型
   */
  type?: string;
  /**
   * URL地址
   */
  url?: string;
}
