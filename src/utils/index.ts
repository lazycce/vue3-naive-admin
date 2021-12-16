import { NIcon } from "naive-ui";
import { h } from "vue";

export function renderIcon(icon: any) {
  return () => h(NIcon, null,  { default: () => h(icon) })
}

/** 解析路由 */
export function pathResolve(basePath: string, path: string) {
  if (basePath === '/' && path.startsWith('/')) {
    return path
  }
  if (basePath !== '/'&& (path.startsWith('/') || !path)) {
    return basePath + path
  }
  if(basePath !== '/'&& !path.startsWith('/')) {
    return basePath + '/' + path
  }
}
