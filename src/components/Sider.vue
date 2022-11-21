<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible class="sider">
        <div class="logo">
            <img src="/src/assets/images/logo.jpg" alt="logo" v-show="isShow==!collapsed">
            <h3 v-show="isShow==!collapsed">上海正也医药有限公司</h3>
            <img v-show="isShow==collapsed" src="/src/assets/images/m-logo.jpg" alt="logo">
        </div>
        <a-menu v-model:selectedKeys="selectedKeys"  theme="dark"  mode="inline"  class="sider-menu">
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>功能A</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>功能B</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>功能C</span>
              </span>
            </template>
            <a-menu-item key="3">功能C功能C</a-menu-item>
            <a-menu-item key="4">功能C功能C</a-menu-item>
            <a-menu-item key="5">功能C功能C</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>功能D</span>
              </span>
            </template>
            <a-menu-item key="6">功能D功能D</a-menu-item>
            <a-menu-item key="8">功能D功能D</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>功能E功能E</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
  </template>
  <script  lang="ts" >
  import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  } from '@ant-design/icons-vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: {
      PieChartOutlined,
      DesktopOutlined,
      UserOutlined,
      TeamOutlined,
      FileOutlined,
    },
    data() {
      return {
        collapsed: ref<boolean>(false),
        selectedKeys: ref<string[]>(['1']),
        isShow:ref<boolean>(true),
      };
    },
  });
  </script>
  
  
  