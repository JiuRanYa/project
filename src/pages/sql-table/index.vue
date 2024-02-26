<template>
  <div class="flex flex-col content-center">
    <section class="main-table">
      <h2 class="text-sm">Main_Manager</h2>

      <MainTable ref="mainTable"></MainTable>
    </section>

    <section>
      <a-tabs v-model:activeKey="activeKey" size="small">
        <a-tab-pane key="1" tab="Sub table 1">
          <SubTableOne ref="subTable" />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Sub table 1">
          <SubTableTwo ref="subTable" />
        </a-tab-pane>
        <a-tab-pane key="3" tab="Sub table 1">
          <SubTableThree ref="subTable" />
        </a-tab-pane>
        <a-tab-pane key="4" tab="Sub table 1">
          <SubTableFour ref="subTable" />
        </a-tab-pane>
        <a-tab-pane key="5" tab="Sub table 1">
          <SubTableFive ref="subTable" />
        </a-tab-pane>
        <a-tab-pane key="6" tab="Sub table 1">
          <SubTableSix ref="subTable" />
        </a-tab-pane>
        <a-tab-pane key="7" tab="Sub table 1">
          <SubTableSeven ref="subTable" />
        </a-tab-pane>
        <a-tab-pane key="8" tab="Sub table 1">
          <SubTableEight ref="subTable" />
        </a-tab-pane>
      </a-tabs>
    </section>

    <section>
      <div class="flex flex-row justify-center">
        <a-button htmlType="reset">取消</a-button>
        <a-button
          @click="onClick"
          htmlType="submit"
          class="ms-10"
          type="primary"
          >确定</a-button
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import MainTable from "./main-table/index.vue";
import SubTableOne from "./sub-table/sub-table1.vue";
import SubTableTwo from "./sub-table/sub-table2.vue";
import SubTableThree from "./sub-table/sub-table3.vue";
import SubTableFour from "./sub-table/sub-table4.vue";
import SubTableFive from "./sub-table/sub-table5.vue";
import SubTableSix from "./sub-table/sub-table6.vue";
import SubTableSeven from "./sub-table/sub-table7.vue";
import SubTableEight from "./sub-table/sub-table8.vue";

const activeKey = ref();
const mainTable = ref();
const subTable = ref();

async function onClick() {
  // const mainFormData = await mainTable.value.mainForm.validate();
  // console.log(mainFormData);
  const subFormData = await subTable.value.subForm.validate();
  console.log(subFormData);
}
</script>
