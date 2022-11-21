<template>
    <div class="page-wrap">
        <a-layout>
            <a-layout-sider>Sider</a-layout-sider>
            <a-layout>
                <a-layout-header>Header</a-layout-header>
                <a-layout-content>
                    <add-product/>
                </a-layout-content>
                <a-layout-footer>Footer</a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script setup lang="ts">
import AddProduct from '../components/AddProduct.vue';
</script>