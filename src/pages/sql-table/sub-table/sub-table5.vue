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
            label="activity"
            name="activity"
            :rules="[
              { required: true, message: 'Please input your activity!' },
            ]"
          >
            <a-input v-model:value="formState.activity" />
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
              { required: true, message: 'Please input your description!' },
            ]"
          >
            <a-input v-model:value="formState.description" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="unit"
            name="unit"
            :rules="[{ required: true, message: 'Please input your unit!' }]"
          >
            <a-input v-model:value="formState.unit" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="oldQty"
            name="oldQty"
            :rules="[{ required: true, message: 'Please input your oldQty!' }]"
          >
            <a-input v-model:value="formState.oldQty" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="newQty"
            name="newQty"
            :rules="[{ required: true, message: 'Please input your newQty!' }]"
          >
            <a-input v-model:value="formState.newQty" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="convolutionNewQty"
            name="convolutionNewQty"
            :rules="[
              {
                required: true,
                message: 'Please input your convolutionNewQty!',
              },
            ]"
          >
            <a-input v-model:value="formState.convolutionNewQty" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="convolutionOldQty"
            name="convolutionOldQty"
            :rules="[
              {
                required: true,
                message: 'Please input your convolutionOldQty!',
              },
            ]"
          >
            <a-input v-model:value="formState.convolutionOldQty" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            label="deletedReferenceDesignator"
            name="deletedReferenceDesignator"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input v-model:value="formState.deletedReferenceDesignator" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            label="addedReferenceDesignator"
            name="addedReferenceDesignator"
            :rules="[
              {
                required: true,
                message: 'Please input your addedReferenceDesignator!',
              },
            ]"
          >
            <a-input v-model:value="formState.addedReferenceDesignator" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="fulfillRoHS"
            name="fulfillRoHS"
            :rules="[
              { required: true, message: 'Please input your fulfillRoHS!' },
            ]"
          >
            <a-input v-model:value="formState.fulfillRoHS" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="leadOrFree"
            name="leadOrFree"
            :rules="[
              { required: true, message: 'Please input your leadOrFree!' },
            ]"
          >
            <a-input v-model:value="formState.leadOrFree" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="isAreaArrayComponent"
            name="isAreaArrayComponent"
            :rules="[
              {
                required: true,
                message: 'Please input your isAreaArrayComponent!',
              },
            ]"
          >
            <a-input v-model:value="formState.isAreaArrayComponent" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="source"
            name="source"
            :rules="[{ required: true, message: 'Please input your source!' }]"
          >
            <a-input v-model:value="formState.source" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="source"
            name="source"
            :rules="[{ required: true, message: 'Please input your source!' }]"
          >
            <a-input v-model:value="formState.source" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="handlingSuggestions"
            name="handlingSuggestions"
            :rules="[
              {
                required: true,
                message: 'Please input your handlingSuggestions!',
              },
            ]"
          >
            <a-input v-model:value="formState.handlingSuggestions" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            class="w-100"
            label="process"
            name="process"
            :rules="[{ required: true, message: 'Please input your process!' }]"
          >
            <a-input :rows="3" v-model:value="formState.process" />
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
  parent_id: string;
  activity: string;
  partNumber: string;
  description: string;
  unit: string;
  oldQty: string;
  newQty: string;
  convolutionOldQty: string;
  convolutionNewQty: string;
  deletedReferenceDesignator: string;
  addedReferenceDesignator: string;
  fulfillRoHS: string;
  leadOrFree: string;
  isAreaArrayComponent: string;
  source: string;
  handlingSuggestions: string;
  process: string;
}

const formState = reactive<FormState>({
  id: "",
  parent_id: "",
  activity: "",
  partNumber: "",
  description: "",
  unit: "",
  oldQty: "",
  newQty: "",
  convolutionOldQty: "",
  convolutionNewQty: "",
  deletedReferenceDesignator: "",
  addedReferenceDesignator: "",
  fulfillRoHS: "",
  leadOrFree: "",
  isAreaArrayComponent: "",
  source: "",
  handlingSuggestions: "",
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
