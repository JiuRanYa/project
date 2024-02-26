
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
        <a-col :span="10">
          <a-form-item
            label="id"
            name="id"
            :rules="[{ required: true, message: 'Please input your id!' }]"
          >
            <a-input v-model:value="formState.id" />
          </a-form-item>
        </a-col>

        <a-col :span="10">
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
        <a-col :span="10">
          <a-form-item
            label="assignment"
            name="assignment"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="formState.assignment" />
          </a-form-item>
        </a-col>

        <a-col :span="10">
          <a-form-item
            label="title"
            name="title"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.title" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
          <a-form-item
            label="createdBy"
            name="createdBy"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.createdBy" />
          </a-form-item>
        </a-col>
        <a-col :span="10">
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
        <a-col :span="10">
          <a-form-item
            label="modifyBy"
            name="modifyBy"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.modifyBy" />
          </a-form-item>
        </a-col>

        <a-col :span="10">
          <a-form-item
            label="createdBy"
            name="createdBy"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.createdBy" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
          <a-form-item
            label="lastUpdateTime"
            name="lastUpdateTime"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.lastUpdateTime" />
          </a-form-item>
        </a-col>

        <a-col :span="10">
          <a-form-item
            label="downloadBy"
            name="downloadBy"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.downloadBy" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
          <a-form-item
            label="downloadOn"
            name="downloadOn"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.downloadOn" />
          </a-form-item>
        </a-col>

        <a-col :span="10">
          <a-form-item
            label="site"
            name="site"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.site" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="20">
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
  id: string;
  ecno: string;
  assignment: string;
  title: string;
  description: string;
  ecStatus: string;
  createdBy: string;
  modifyBy: string;
  creatd: string;
  lastUpdateTime: string;
  downloadBy: string;
  downloadOn: string;
  site: string;
}

const formState = reactive<FormState>({
  id: "",
  ecno: "",
  assignment: "",
  title: "",
  description: "",
  ecStatus: "",
  createdBy: "",
  modifyBy: "",
  creatd: "",
  lastUpdateTime: "",
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
const subForm = ref()

defineExpose({
	subForm
})
</script>
