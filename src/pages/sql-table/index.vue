<template>
  <div class="flex flex-col">
    <section class="main-table">
      <h2 class="text-sm">Main_Manager</h2>

      <MainTable></MainTable>
    </section>
    <section>
      <a-tabs v-model:activeKey="activeKey" size="small">
        <a-tab-pane key="1" tab="Sub table 1">
          <SubTableOne />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Sub table 1">
          <SubTableTwo />
        </a-tab-pane>
        <a-tab-pane key="3" tab="Sub table 1">
          <SubTableThree />
        </a-tab-pane>
        <a-tab-pane key="4" tab="Sub table 1">
          <SubTableFour />
        </a-tab-pane>
        <a-tab-pane key="5" tab="Sub table 1">
          <SubTableFive />
        </a-tab-pane>
        <a-tab-pane key="6" tab="Sub table 1">
          <SubTableSix />
        </a-tab-pane>
        <a-tab-pane key="7" tab="Sub table 1">
          <SubTableSeven />
        </a-tab-pane>
        <a-tab-pane key="8" tab="Sub table 1">
          <SubTableEight />
        </a-tab-pane>
      </a-tabs>
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
</script>
