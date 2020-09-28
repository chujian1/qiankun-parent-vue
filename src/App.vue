<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <!-- 存放基座路由 -->
      <el-menu-item index="/">parent-vue</el-menu-item>
      <!-- 存放vue子应用路由 -->
      <el-menu-item index="/vue">child-vue</el-menu-item>
      <!-- 存放react子应用路由 -->
      <el-menu-item index="/react">child-react</el-menu-item>
    </el-menu>
    <router-view/>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>
