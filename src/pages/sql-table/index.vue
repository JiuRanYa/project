<template>
  <div class="flex flex-col content-center">
    <section class="main-table">
      <h2 class="text-sm">EC_Manager</h2>

      <MainTable ref="mainTable"></MainTable>
    </section>

    <section>
      <a-tabs v-model:activeKey="activeKey" size="small">
        <a-tab-pane forceRender key="1" tab="Labels">
          <SubTableOne ref="subTableLabel" />
        </a-tab-pane>
        <a-tab-pane forceRender key="2" tab="Material_quality_track">
          <SubTableTwo ref="subTableTrack" />
        </a-tab-pane>
        <a-tab-pane forceRender key="3" tab="Material_Restrictions">
          <SubTableThree ref="subTableRest" />
        </a-tab-pane>
        <a-tab-pane forceRender key="4" tab="Operation_Guide">
          <SubTableFour ref="subTableGuide" />
        </a-tab-pane>
        <a-tab-pane forceRender key="5" tab="Production_Stage">
          <SubTableFive ref="subTableStage" />
        </a-tab-pane>
        <a-tab-pane forceRender key="6" tab="Software_Versions">
          <SubTableSix ref="subTableVersion" />
        </a-tab-pane>
        <a-tab-pane forceRender key="7" tab="Specified_Inbound">
          <SubTableSeven ref="subTableInbound" />
        </a-tab-pane>
        <a-tab-pane forceRender key="8" tab="Substitute_Material">
          <SubTableEight ref="subTableMater" />
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
import ApiService from "@/api/ApiService";
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
const subTableLabel = ref();
const subTableTrack = ref();
const subTableRest = ref();
const subTableGuide = ref();
const subTableStage = ref();
const subTableVersion = ref();
const subTableInbound = ref();
const subTableMater = ref();

const subTableMap = ref();
const tableFieldMap = reactive({
  1: "ecLabels",
  2: "ecMaterialQualityTrack",
  3: "ecMaterialRestrictions",
  4: "ecOperationGuide",
  5: "ecProductionStage",
  6: "ecSoftwareVersions",
  7: "ecSpecifiedInbound",
  8: "ecSubstituteMaterial",
}) as any;

async function onClick() {
  let resData: any = {};
  const mainFormData = await mainTable.value.mainForm.validate();
  resData = { ...mainFormData };

  for (let i = 1; i <= 1; i++) {
    try {
      const subForm = (subTableMap.value as any)[i];
      const subFormData = await subForm.subForm.validate();

      const fieldName = tableFieldMap[`${i}`];
      resData[fieldName] = subFormData;
    } catch (e) {
      activeKey.value = `${i}`;
      break;
    }
  }

  const res = await ApiService.post("ecManager/add", resData);
  console.log(res);
}

onMounted(() => {
  nextTick(() => {
    subTableMap.value = {
      1: subTableLabel,
      2: subTableTrack,
      3: subTableRest,
      4: subTableGuide,
      5: subTableStage,
      6: subTableVersion,
      7: subTableInbound,
      8: subTableMater,
    };
  });
});
</script>
