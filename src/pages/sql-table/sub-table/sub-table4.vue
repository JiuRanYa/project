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
            label="productionStage"
            name="productionStage"
            :rules="[
              { required: true, message: 'Please input your productionStage!' },
            ]"
          >
            <a-input v-model:value="formState.productionStage" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="executionObject"
            name="executionObject"
            :rules="[
              { required: true, message: 'Please input your executionObject!' },
            ]"
          >
            <a-input v-model:value="formState.executionObject" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="whatToDo"
            name="whatToDo"
            :rules="[
              { required: true, message: 'Please input your whatToDo!' },
            ]"
          >
            <a-input v-model:value="formState.whatToDo" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="24">
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
  productionStage: string;
  executionObject: string;
  whatToDo: string;
  process: string;
}

const formState = reactive<FormState>({
  productionStage: "",
  executionObject: "",
  whatToDo: "",
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
