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
            label="originalItemCode"
            name="ecno"
            :rules="[
              {
                required: true,
                message: 'Please input your originalItemCode!',
              },
            ]"
          >
            <a-input v-model:value="formState.originalItemCode" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="originalItemDescription"
            name="originalItemDescription"
            :rules="[
              {
                required: true,
                message: 'Please input your originalItemDescription!',
              },
            ]"
          >
            <a-input v-model:value="formState.originalItemDescription" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="substitutePartNo"
            name="title"
            :rules="[
              {
                required: true,
                message: 'Please input your substitutePartNo!',
              },
            ]"
          >
            <a-input v-model:value="formState.substitutePartNo" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="substituteManufacture"
            name="createdBy"
            :rules="[
              {
                required: true,
                message: 'Please input your substituteManufacture!',
              },
            ]"
          >
            <a-input v-model:value="formState.substituteManufacture" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="originalQtyItemDescription"
            name="originalQtyItemDescription"
            :rules="[
              {
                required: true,
                message: 'Please input your originalQtyItemDescription!',
              },
            ]"
          >
            <a-input v-model:value="formState.originalQtyItemDescription" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="substituItemCode"
            name="substituItemCode"
            :rules="[
              {
                required: true,
                message: 'Please input your substituItemCode!',
              },
            ]"
          >
            <a-input v-model:value="formState.substituItemCode" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="substitute"
            name="createdBy"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.substitute" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="substitutePartNo"
            name="lastUpdateTime"
            :rules="[
              {
                required: true,
                message: 'Please input your substitutePartNo!',
              },
            ]"
          >
            <a-input v-model:value="formState.substitutePartNo" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="substituteManufacture"
            name="substituteManufacture"
            :rules="[
              {
                required: true,
                message: 'Please input your substituteManufacture!',
              },
            ]"
          >
            <a-input v-model:value="formState.substituteManufacture" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="substituteQty"
            name="downloadOn"
            :rules="[
              { required: true, message: 'Please input your substituteQty!' },
            ]"
          >
            <a-input v-model:value="formState.substituteQty" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="substituteScope"
            name="substituteScope"
            :rules="[
              { required: true, message: 'Please input your substituteScope!' },
            ]"
          >
            <a-input v-model:value="formState.substituteScope" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            class="w-100"
            label="boardsOrProjects"
            name="description"
            :rules="[
              {
                required: true,
                message: 'Please input your boardsOrProjects!',
              },
            ]"
          >
            <a-textarea :rows="3" v-model:value="formState.boardsOrProjects" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            class="w-100"
            label="processOpinion"
            name="processOpinion"
            :rules="[
              { required: true, message: 'Please input your processOpiniono!' },
            ]"
          >
            <a-textarea :rows="3" v-model:value="formState.processOpinion" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            class="w-100"
            label="process"
            name="process"
            :rules="[{ required: true, message: 'Please input your process!' }]"
          >
            <a-textarea :rows="3" v-model:value="formState.process" />
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
  originalItemCode: string;
  originalItemDescription: string;
  originalPartNo: string;
  originalManufacture: string;
  originalQtyItemDescription: string;
  substituItemCode: string;
  substitute: string;
  substitutePartNo: string;
  substituteManufacture: string;
  substituteQty: string;
  substituteScope: string;
  boardsOrProjects: string;
  processOpinion: string;
  process: string;
}

const formState = reactive<FormState>({
  id: "",
  originalItemCode: "",
  originalItemDescription: "",
  originalPartNo: "",
  originalManufacture: "",
  originalQtyItemDescription: "",
  substituItemCode: "",
  substitute: "",
  substitutePartNo: "",
  substituteManufacture: "",
  substituteQty: "",
  substituteScope: "",
  boardsOrProjects: "",
  processOpinion: "",
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
