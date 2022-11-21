<template>
    <a-layout-header class="header">
        <div class="head-nav">
            <div class="nav">
                <home-outlined />
                <div class="p">首页</div>
            </div>
            <div class="nav">
                <cloud-sync-outlined />
                <div class="p">主数据</div>
            </div>
            <div class="nav">
                <apartment-outlined />
                <div class="p">辖区管理</div>
            </div>
            <div class="nav">
                <home-outlined />
                <div class="p">行为管理系统</div>
            </div>
        </div>
    </a-layout-header>
</template>
<script setup lang="ts" >
import {
    HomeOutlined,
    ApartmentOutlined,
    CloudSyncOutlined
} from '@ant-design/icons-vue';
</script>