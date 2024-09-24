import Tree from './src/tree.vue';
/* istanbul ignore next */
Tree.install = function (Vue) {
    Vue.component(Tree.name, Tree);
};
export default Tree;

// 通过原生html封装树组件：
// 支持全部加载和按需加载两种模式，按需加载需要传入分支别名判断当前节点是否是分支
// 内置树组件模板，只需传入节点数据，也可以通过slot自定义根节点、分支节点、叶子节点的样式