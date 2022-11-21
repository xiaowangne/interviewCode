<template>
    <a-layout class="page-wrap">
        <Sider />
        <a-layout>

            <Head />
            <a-layout-content class="page-content">
                <div class="breadcrumb">
                    <a-breadcrumb>
                        <a-breadcrumb-item>首页</a-breadcrumb-item>
                        <a-breadcrumb-item>年度协议管理</a-breadcrumb-item>
                        <a-breadcrumb-item>二级商协议</a-breadcrumb-item>
                        <a-breadcrumb-item>新增二级商协议</a-breadcrumb-item>
                    </a-breadcrumb>
                    <h3>新增二级商协议</h3>
                </div>
                <div class="main-content">
                    <a-divider dashed style="border-color: #cccccc" class="divider">
                        <div class="p">
                            <i>1</i><span>主体协议</span>
                        </div>
                    </a-divider>
                    <div class="form-table1">
                        <a-form :model=formData1>
                            <div class="line">
                                <a-form-item label="协议客户"
                                    :rules="[{ required: true, message: 'Please select your country!' }]">
                                    <a-select ref="select" value="选择客户" style="width: 100px" :options="options1"
                                        @change="handleChange" label="Select">
                                    </a-select>
                                    <span style="display: inline-block;margin-left: 10px;font-size: 16px;">{{
                                            formData1.client
                                    }}</span>
                                </a-form-item>
                                <a-form-item label="协议状态">
                                    <a-select v-model:value="formData1.state" style="width: 100px">
                                        <a-select-option value="0">正常</a-select-option>
                                        <a-select-option value="1">异常</a-select-option>
                                    </a-select>
                                </a-form-item>
                            </div>
                            <div class="line">
                                <a-form-item label="购进指标">
                                    <a-select ref="select" value="金额" style="width: 100px" :options="options2"
                                        @change="handleChange1" label="Select">
                                    </a-select>
                                    <a-input-number style="margin-left: 10px; width: 50%;background: #f8f8f8;"
                                        id="inputNumber" v-model:value="formData1.num1" :min="1" :max="100000000000"
                                        placeholder="输入金额/数量" />
                                </a-form-item>
                                <a-form-item label="纯销指标">
                                    <a-select ref="select" value="金额" style="width: 100px" :options="options3"
                                        @change="handleChange2" label="Select">
                                    </a-select>
                                    <a-input-number style="margin-left: 10px; width: 50%;background: #f8f8f8;"
                                        id="inputNumber" v-model:value="formData1.num2" :min="1" :max="100000000000"
                                        placeholder="输入金额/数量" />
                                </a-form-item>
                            </div>
                            <div class="line">
                                <a-form-item label="销售区域">
                                    <a-select v-model:value="formData1.area" style="width: 80%" mode="multiple"
                                        :options="options4" placeholder="选择销售区域"></a-select>
                                </a-form-item>
                                <a-form-item label="签订时间">
                                    <a-date-picker v-model:value="formData1.time" show-time placeholder="选择时间" />
                                </a-form-item>
                            </div>
                            <div class="line">
                                <a-form-item label="销售区域">
                                    <a-select v-model:value="formData1.code" style="width: 120px" :options="options5"
                                        @change="handleChange3" placeholder="指定渠道码"></a-select>
                                </a-form-item>
                            </div>

                            <a-form-item class="item-talbe">
                                <a-table :dataSource="formData1.talbe" :scroll="{ y: 400 }" :pagination="false"
                                    :columns="columns" size='small' />
                            </a-form-item>
                        </a-form>
                    </div>
                    <a-divider dashed style="border-color: #cccccc" class="divider">
                        <div class="p">
                            <i>2</i><span>产品策略</span>
                        </div>
                    </a-divider>
                    <div class="form-table2">
                        <div class="head-form">
                            <a-button type="primary" @click="onCompChange" :disabled="compNameRef">添加产品</a-button>
                            <div class="num">
                                <span>购进总指标（万元）：</span>
                                <span>￥{{ total.total1 }}</span>
                            </div>
                            <div class="num">
                                <span>指标按季度分解（万元）：</span>
                                <span v-for="(value, key) in formData2">【{{ key }}】￥{{ value }}，</span>
                            </div>
                            <div class="num">
                                <span>纯销总指数（万元）：</span>
                                <span>￥{{ total.total2 }}</span>
                            </div>
                        </div>
                        <add-product v-if="compNameRef" @compChange="compChange" />
                    </div>
                    <a-divider dashed style="border-color: #cccccc" class="divider">
                        <div class="p">
                            <i>3</i><span>补充协议</span>
                        </div>
                    </a-divider>
                    <div class="form-table3">
                        <AddDeal></AddDeal>
                    </div>
                    <div class="submit">
                        <a-button type="primary">保存</a-button>
                    </div>
                </div>
            </a-layout-content>
            <!-- <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer> -->
        </a-layout>
    </a-layout>
</template>
 
<style>
.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
  

<script setup lang="ts">
import Sider from '../components/Sider.vue'
import Head from '../components/Header.vue'
import AddProduct from '../components/AddProduct.vue';
import AddDeal from '../components/AddDeal.vue';

import dayjs, { Dayjs } from 'dayjs';
import { computed, defineComponent, reactive, ref, onMounted, defineAsyncComponent } from 'vue';
import type { UnwrapRef } from 'vue';
var a = new Date().getTime(); //获取到当前时间戳
var b = new Date(a); //创建一个指定的日期对象
function nowDate(now) {
    var year = now.getFullYear(); //年份
    var month = now.getMonth() + 1; //月份（0-11）
    var date = now.getDate(); //天数（1到31）
    var hour = now.getHours(); //小时数（0到23）
    var minute = now.getMinutes(); //分钟数（0到59）
    var second = now.getSeconds(); //秒数（0到59） 
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    return (
        year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
    )
};
onMounted(() => {

})

// 表一数据
const formData1 = ref({
    client: '',
    state: '0',
    num1: '',
    num2: '',
    area: ['全国'],
    time: dayjs(nowDate(b), 'YYYY-MM-DD HH:mm'),
    code: '指定渠道',
    talbe: [{
        code: 'BJ000090',
        title: '宁波九州通药业有限公司',
        area: '浙江省'
    }, {
        code: 'BJ000192',
        title: '国药控股精华有限公司',
        area: '浙江省'
    },
    {
        code: 'BJ000283',
        title: '老百姓药业有限公司',
        area: '浙江省'
    }]
})
const formData2 = ref({
    Q1: 12.5,
    Q2: 11.5,
    Q3: 10.5,
    Q4: 13.5
})
const total = ref({
    total1: 152.65,
    total2: 152.65
})

const columns = [
    {
        title: '指定渠道编码',
        dataIndex: 'code',
    },
    {
        title: '指定渠道名称',
        dataIndex: 'title',
    },
    {
        title: '所在省',
        dataIndex: 'area',
    },
]
const options1 = ref([
    {
        value: '上海正也医药有限公司',
        label: '上海正也医药有限公司',
    },
    {
        value: '字节跳动有限公司',
        label: '字节跳动有限公司',
    },
    {
        value: '杭州科技有限公司',
        label: '杭州科技有限公司',
    },
]);
const options2 = ref([
    {
        value: '10',
        label: '10',
    },
    {
        value: '20',
        label: '20',
    },
    {
        value: '50',
        label: '50',
    },
]);
const options3 = ref([
    {
        value: '10',
        label: '10',
    },
    {
        value: '20',
        label: '20',
    },
    {
        value: '50',
        label: '50',
    },
]);
const options4 = ref([
    {
        value: '全国',
        label: '全国',
    },
    {
        value: '上海',
        label: '上海',
    },
    {
        value: '浙江省',
        label: '浙江省',
    },
]);
const options5 = ref([
    {
        value: 'BJ000090',
        label: 'BJ000090',
    },
    {
        value: 'BJ000192',
        label: 'BJ000192',
    },
    {
        value: 'BJ000283',
        label: 'BJ000283',
    },
]);

const handleChange = (value: string) => {
    formData1.value.client = value
};
const handleChange1 = (value: string) => {
    formData1.value.num1 = value
};
const handleChange2 = (value: string) => {
    formData1.value.num2 = value
};
const handleChange3 = (value: string) => {
    formData1.value.code = value
};



const compNameRef = ref(false)
const onCompChange = () => {
    compNameRef.value = true
}
const compChange = (val) => {
    compNameRef.value = val
}


</script>