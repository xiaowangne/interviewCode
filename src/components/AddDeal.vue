<template>
    <div class="addDeal">
        <div class="add">
            <a-button @click="add" type="primary">新增</a-button>
        </div>
        <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
            <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
                <div class="content">
                    <h3>协议内容：</h3>
                    <a-textarea  :rows="6" />
                </div>
            </a-tab-pane>
        </a-tabs>
    </div>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const content=ref({})
    const panes = ref<{ title: string; content: string; key: string; closable?: boolean }[]>([
      { title: '补充协议1', content: '', key: '1',closable: false },
      { title: '补充协议2', content: '', key: '2' },
      { title: '补充协议3', content: '', key: '3',  },
    ]);
    const activeKey = ref(panes.value[0].key);
    const newTabIndex = ref(0);

    const add = () => {
        activeKey.value = `新增补充协议${++newTabIndex.value}`;
      panes.value.push({
        title: `${activeKey.value}`,
        content: ``,
        key: activeKey.value,
      });
    };

    const remove = (targetKey: string) => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter(pane => pane.key !== targetKey);
      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };

    const onEdit = (targetKey: string) => {
      remove(targetKey);
    };

    return {
      panes,
      activeKey,
      onEdit,
      add,
    };
  },
})
</script>
  
  