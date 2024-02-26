<template>
  <div class="p-4">
    <a-form
      ref="subForm"
      :model="formState"
      name="basic"
      :label-col="{ style: { width: 100 } }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            label="partNumber"
            name="partNumber"
            :rules="[
              { required: true, message: 'Please input your partNumber!' },
            ]"
          >
            <a-input v-model:value="formState.partNumber" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="description"
            name="description"
            :rules="[
              { required: true, message: 'Please input your description!' },
            ]"
          >
            <a-textarea v-model:value="formState.description" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="currentVersion"
            name="currentVersion"
            :rules="[
              { required: true, message: 'Please input your currentVersion!' },
            ]"
          >
            <a-input v-model:value="formState.currentVersion" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="newVersion"
            name="newVersion"
            :rules="[
              { required: true, message: 'Please input your newVersion!' },
            ]"
          >
            <a-input v-model:value="formState.newVersion" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="softwareType"
            name="softwareType"
            :rules="[
              { required: true, message: 'Please input your softwareType!' },
            ]"
          >
            <a-input v-model:value="formState.softwareType" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="productionStage"
            name="productionStage"
            :rules="[
              { required: true, message: 'Please input your productionStage!' },
            ]"
          >
            <a-input v-model:value="formState.productionStage" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="process"
            name="process"
            :rules="[{ required: true, message: 'Please input your process!' }]"
          >
            <a-input v-model:value="formState.process" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

interface FormState {
  id: string;
  partNumber: string;
  description: string;
  currentVersion: string;
  newVersion: string;
  softwareType: string;
  productionStage: string;
  process: string;
}

const formState = reactive<FormState>({
  id: "",
  partNumber: "",
  description: "",
  currentVersion: "",
  newVersion: "",
  softwareType: "",
  productionStage: "",
  process: "",
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const subForm = ref();

defineExpose({
  subForm,
});
</script>
