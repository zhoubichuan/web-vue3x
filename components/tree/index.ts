import Tree from './src/tree.vue'
Tree.install = function (Vue) {
  Vue.component(Tree.name, Tree)
}
export default Tree

// 通过原生html封装树组件：
// 支持全部加载和按需加载两种模式，按需加载需要传入分支别名判断当前节点是否是分支
// 内置树组件模板，只需传入节点数据，也可以通过slot自定义根节点、分支节点、叶子节点的样式
//  defaultExpandedKeys 配置默认展开功能，动态修改数据可以指定数据展开
// 树节点搜索，重新请求相关节点更新节点
