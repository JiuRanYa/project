<template>
  <div class="p-4">
    <a-form
      ref="mainForm"
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
            label="ecno"
            name="ecno"
            :rules="[{ required: true, message: 'Please input your echo!' }]"
          >
            <a-input v-model:value="formState.ecno" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="assignment"
            name="assignment"
            :rules="[
              { required: true, message: 'Please input your assignment!' },
            ]"
          >
            <a-input v-model:value="formState.assignment" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="title"
            name="title"
            :rules="[{ required: true, message: 'Please input your title!' }]"
          >
            <a-input v-model:value="formState.title" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="downloadBy"
            name="downloadBy"
            :rules="[
              { required: true, message: 'Please input your downloadBy!' },
            ]"
          >
            <a-input v-model:value="formState.downloadBy" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="downloadOn"
            name="downloadOn"
            :rules="[
              { required: true, message: 'Please input your downloadOn!' },
            ]"
          >
            <a-input v-model:value="formState.site" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            label="site"
            name="site"
            :rules="[{ required: true, message: 'Please input your site!' }]"
          >
            <a-select v-model:value="formState.site">
              <a-select-option value="LD">LD</a-select-option>
              <a-select-option value="XG">XG</a-select-option>
              <a-select-option value="SZ">SZ</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            label="ecStatus"
            name="ecStatus"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.ecStatus" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            class="w-100"
            label="description"
            name="description"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-textarea :rows="3" v-model:value="formState.description" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

interface FormState {
  id?: string;
  ecno: string;
  assignment: string;
  title: string;
  description: string;
  ecStatus: string;
  createdBy?: string;
  modifyBy?: string;
  creatd?: string;
  lastUpdateTime?: string;
  downloadBy: string;
  downloadOn: string;
  site: string;
}

const formState = reactive<FormState>({
  ecno: "",
  assignment: "",
  title: "",
  description: "",
  ecStatus: "",
  downloadBy: "",
  downloadOn: "",
  site: "",
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const mainForm = ref();

defineExpose({
  mainForm,
});
</script>
