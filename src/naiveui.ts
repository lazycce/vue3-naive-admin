import { 
  create, 
  NButton, 
  NInput, 
  NLayout, 
  NLayoutContent, 
  NLayoutFooter, 
  NLayoutHeader, 
  NLayoutSider, 
  NMenu, 
  NSpace, 
  NScrollbar,
  NBreadcrumb,
  NBreadcrumbItem
} from 'naive-ui'

const naive = create({
  components: [
    // 按钮
    NButton,
    NSpace,
    // 布局
    NLayout,
    // 布局-header
    NLayoutHeader,
    // 布局-footer
    NLayoutFooter,
    // 布局-sider
    NLayoutSider,
    // 布局-content
    NLayoutContent,
    // 菜单
    NMenu,
    // 输入框
    NInput,
    // 滚动条
    NScrollbar,
    // 面包屑
    NBreadcrumb,
    NBreadcrumbItem
  ]
})

export default naive