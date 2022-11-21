<template>
    <div class="addform">
            <div class="table-head">
                <div class="left">
                    <div class="select-product">
                        <span>产品：</span>
                        <a-select ref="select" value="选择产品" style="width: 100px" :options="options"
                                        @change="handleChange" label="Select">
                                    </a-select>
                                    <p >{{
                                            formData.name
                                    }}</p>
                    </div>
                    <div class="time">
                        <span>协议效期：</span>
                        <a-range-picker style="color: #666;" v-model:value="formData.time" :format="dateFormat" />
                    </div>
                </div>
                <a-button style="color:#ff9b12 ;" @click="onClick">删除</a-button>
            </div>
        <div class="form-table">
            <a-descriptions layout="vertical" bordered :column="{ xxl: 8, xl: 8, lg: 4, md: 4, sm: 2, xs: 1 }">
        <a-descriptions-item label="协议价（元）">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber"
                v-model:value="formData.price1" :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
        <a-descriptions-item label="票折（元）" :span="2">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.price2"
                :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
        <a-descriptions-item label="购进指标量（大单位）">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.price3"
                :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
        <a-descriptions-item label="购进指标量（小单位）">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.price4"
                :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
        <a-descriptions-item label="购进金额（万元）">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.price5"
                :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
        <a-descriptions-item label="纯销指标量（小单位）">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.price6"
                :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
        <a-descriptions-item label="纯销指标量（万元）">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.price7"
                :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
    </a-descriptions>
    <a-descriptions layout="vertical" bordered :column="{ xxl: 8, xl: 8, lg: 4, md: 4, sm: 2, xs: 2 }">
        <a-descriptions-item label="分销奖励">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber"
                v-model:value="formData.price8" :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
        <a-descriptions-item label="费用科目" >
            <a-select ref="select" :options="options1" v-model:value="formData.kemu1"  style="width: 120px" placeholder="单选项1">
            </a-select>
        </a-descriptions-item>
        <a-descriptions-item label="零售配送">
            <a-input style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.ps1" placeholder="请输入" />
        </a-descriptions-item>
        <a-descriptions-item label="费用科目" >
            <a-select :options="options2"  style="min-width: 100px" v-model:value="formData.kemu2" mode="multiple" placeholder="多选项1" ></a-select>
        </a-descriptions-item>
        <a-descriptions-item label="医疗配送商" >
            <a-input style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.ps2"
                placeholder="请输入"  />
        </a-descriptions-item>
        <a-descriptions-item label="费用科目" >
            <a-select :options="options3"  style="min-width: 100px" v-model:value="formData.kemu3" mode="multiple" placeholder="多选项2"></a-select>
        </a-descriptions-item>
        <a-descriptions-item label="自定义">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.price5"
                :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
        <a-descriptions-item label="自定义">
            <a-input-number style="width: 100%; background: #f8f8f8;" id="inputNumber" v-model:value="formData.price5"
                :min="1" :max="100000000000" placeholder="请输入" />
        </a-descriptions-item>
        
    </a-descriptions>
        </div>
    </div>
   
</template>
<script setup lang="ts" >
import { ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs';
const dateFormat = 'YYYY/MM/DD';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const formData = ref({
    name: '',
    time: ref<[Dayjs, Dayjs]>([
        dayjs('2022/01/01', dateFormat),
        dayjs('2023/01/01', dateFormat),
      ]),
    price1: null,
    price2: null,
    price3: null,
    price4: null,
    price5: null,
    price6: null,
    price7: null,
    price8: null,
    kemu1:null,
    ps1:null,
    kemu2:[],
    ps2:null,
    kemu3:[],
    zdy1:null,
    zdy2:null,
})


const emit = defineEmits(['compChange']);
const  onClick=() =>{
    emit('compChange', false)
}

const options = ref([
    {
        value: '美复胶丸 24粒/盒',
        label: '美复胶丸 24粒/盒',
    },
    {
        value: '美复胶丸 12粒/盒',
        label: '美复胶丸 12粒/盒',
    },
    {
        value: '美复胶丸 36粒/盒',
        label: '美复胶丸 36粒/盒',
    },
]);
const options1 = ref([
    {
        value: '科目1',
        label: '科目1',
    },
    {
        value: '科目2',
        label: '科目2',
    },
    {
        value: '科目3',
        label: '科目3',
    },
]);
const options2 = ref([
    {
        value: '科目1',
        label: '科目1',
    },
    {
        value: '科目2',
        label: '科目2',
    },
    {
        value: '科目3',
        label: '科目3',
    },
]);
const options3 = ref([
    {
        value: '科目1',
        label: '科目1',
    },
    {
        value: '科目2',
        label: '科目2',
    },
    {
        value: '科目3',
        label: '科目3',
    },
]);

const handleChange = (value: string) => {
    formData.value.name = value
};



</script>