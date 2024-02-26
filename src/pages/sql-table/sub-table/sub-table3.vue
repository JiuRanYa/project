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
        <a-col :span="12">
          <a-form-item
            label="id"
            name="id"
            :rules="[{ required: true, message: 'Please input your id!' }]"
          >
            <a-input v-model:value="formState.id" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="parentId"
            name="parentId"
            :rules="[
              { required: true, message: 'Please input your parentId!' },
            ]"
          >
            <a-input v-model:value="formState.parentId" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="partNumber"
            name="partNumber"
            :rules="[
              { required: true, message: 'Please input your partNumber!' },
            ]"
          >
            <a-input-password v-model:value="formState.partNumber" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="description"
            name="description"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.description" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="type"
            name="type"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.type" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="currentPCBVersion"
            name="currentPCBVersion"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.currentPCBVersion" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="newPCBVersion"
            name="newPCBVersion"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.newPCBVersion" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="manufacturer"
            name="manufacturer"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.manufacturer" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="condition"
            name="condition"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.condition" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="code"
            name="code"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.code" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            label="deliverSubstituteItems"
            name="deliverSubstituteItems"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.deliverSubstituteItems" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            class="w-100"
            label="locator"
            name="locator"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input :rows="3" v-model:value="formState.locator" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            class="w-100"
            label="qty"
            name="qty"
            :rules="[{ required: true, message: 'Please input your qty!' }]"
          >
            <a-input :rows="3" v-model:value="formState.qty" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            label="subinventoryCode"
            name="subinventoryCode"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.subinventoryCode" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            class="w-100"
            label="productionStage"
            name="productionStage"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-textarea :rows="3" v-model:value="formState.productionStage" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            class="w-100"
            label="process"
            name="process"
            :rules="[{ required: true, message: 'Please input your qty!' }]"
          >
            <a-select :rows="3" v-model:value="formState.process" />
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
  parentId: string;
  partNumber: string;
  description: string;
  type: string;
  currentPCBVersion: string;
  newPCBVersion: string;
  manufacturer: string;
  condition: string;
  code: string;
  deliverSubstituteItems: string;
  subinventoryCode: string;
  locator: string;
  qty: string;
  productionStage: string;
  process: string;
}

const formState = reactive<FormState>({
  id: "",
  parentId: "",
  partNumber: "",
  type: "",
  description: "",
  currentPCBVersion: "",
  newPCBVersion: "",
  manufacturer: "",
  condition: "",
  code: "",
  deliverSubstituteItems: "",
  subinventoryCode: "",
  locator: "",
  qty: "",
  productionStage: "",
  process: "",
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
