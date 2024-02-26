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
            label="labelMaterial"
            name="labelMaterial"
            :rules="[
              { required: true, message: 'Please input your labelMaterial!' },
            ]"
          >
            <a-input v-model:value="formState.labelMaterial" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="labelText"
            name="labelText"
            :rules="[
              { required: true, message: 'Please input your labelText!' },
            ]"
          >
            <a-input v-model:value="formState.labelText" />
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

      <a-row :gutter="120">
        <a-col :span="24">
          <a-form-item
            label="attachedTo"
            name="attachedTo"
            :rules="[
              { required: true, message: 'Please input your attachedTo!' },
            ]"
          >
            <a-upload
              v-model:file-list="formState.attachedTo"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <a-button>
                <upload-outlined></upload-outlined>
                Upload Files
              </a-button>
            </a-upload>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";

interface FormState {
  id?: string;
  parentId?: string;
  productionStage: string;
  labelMaterial: string;
  labelText: string;
  attachedTo: string[];
  process: string;
}

const formState = reactive<FormState>({
  productionStage: "",
  labelMaterial: "",
  labelText: "",
  attachedTo: [],
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
