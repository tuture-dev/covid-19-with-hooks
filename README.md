# 用动画和实战打开 React Hooks

![](https://imgkr.cn-bj.ufileos.com/b5ec179c-fcf4-431f-a363-80ba2905f142.png)

## 运行项目

本项目用 [CRA](https://create-react-app.dev/) 搭建，因此启动项目非常简单：

```bash
npm install && npm start
```

## 为什么要写这一系列 Hooks 教程？

如何快速学习并掌握 React Hooks 一直是困扰很多新手或者老玩家的一个问题，而笔者在日常的学习和开发中也发现了以下头疼之处：

- React 官方文档对 Hooks 的讲解偏应用，对原理的阐述一笔带过
- 讲 React Hooks 的优秀文章很多，但大多专注于讲解一两个 Hook，要想一网打尽有难度
- 看了很多使用方法甚至源码分析，但是没法和具体的使用场景对应起来，不了解怎么在实际开发中灵活运用

如果你也有同样的困惑，希望这一系列文章能帮助你拨开云雾，让 Hooks 成为你的称手兵器。我们将通过一个完整的 COVID-19 数据可视化项目，结合 Hooks 的动画原理讲解，让你真正地精通 React Hooks！

说实话，Hooks 的知识点相当分散，就像游乐园的游玩项目一样，选择一条完美的路线很难。但是不管怎么样，希望在接下来的旅程中，你能玩得开心😊！

## useState 与 useEffect

原文链接：https://tuture.co/2020/04/08/870a7b7/

理解函数式组件的运行过程：

![](https://imgkr.cn-bj.ufileos.com/9a55a40e-ebd5-4ffb-9b8b-3cdd4e9161a3.gif)

`useState` 使用浅析：

![](https://imgkr.cn-bj.ufileos.com/e09f2b4d-e20d-4bad-ba62-80d860f80e9f.gif)

`useEffect` 使用浅析（每次重渲染都执行）：

![](https://imgkr.cn-bj.ufileos.com/ad9b947f-77fe-43a0-bdee-a27d11246204.gif)

`useEffect` 使用浅析（只在初次渲染后执行）：

![](https://imgkr.cn-bj.ufileos.com/bd507a8c-bf75-4e06-be79-7c027cce6955.gif)

`useState` 的本质（初次渲染）：

![](https://imgkr.cn-bj.ufileos.com/af2ed210-08f7-4741-b17c-c2d4b67db3ff.gif)

`useState` 的本质（重渲染）：

![](https://imgkr.cn-bj.ufileos.com/799216d1-b91e-4cb6-9410-b8776ab82ff5.gif)

`useEffect` 的本质：

![](https://imgkr.cn-bj.ufileos.com/ebb090f8-7471-46ad-9556-b773d1910d03.gif)

## 自定义 Hook 与 useCallback

写作中。

## useReducer 和 useContext

写作中。

## 敬请期待
