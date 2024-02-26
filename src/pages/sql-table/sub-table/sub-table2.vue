<template>
  <div class="p-4">
    <a-form
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
        <a-col :span="10">
          <a-form-item
            label="trackingNo"
            name="trackingNo"
            :rules="[
              { required: true, message: 'Please input your trackingNo!' },
            ]"
          >
            <a-input v-model:value="formState.trackingNo" />
          </a-form-item>
        </a-col>

        <a-col :span="20">
          <a-form-item
            label="descriptions"
            name="descriptions"
            :rules="[
              { required: true, message: 'Please input your descriptions!' },
            ]"
          >
            <a-textarea v-model:value="formState.descriptions" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
          <a-form-item
            label="trackingItemCode"
            name="trackingItemCode"
            :rules="[
              {
                required: true,
                message: 'Please input your trackingItemCode!',
              },
            ]"
          >
            <a-input v-model:value="formState.trackingItemCode" />
          </a-form-item>
        </a-col>
        <a-col :span="10">
          <a-form-item
            label="trackingItemDes"
            name="trackingItemDes"
            :rules="[
              { required: true, message: 'Please input your trackingItemDes!' },
            ]"
          >
            <a-input v-model:value="formState.trackingItemDes" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
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

        <a-col :span="10">
          <a-form-item
            label="manufacturerModal"
            name="manufacturerModal"
            :rules="[
              {
                required: true,
                message: 'Please input your manufacturerModal!',
              },
            ]"
          >
            <a-input v-model:value="formState.manufacturerModal" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
          <a-form-item
            label="iItemScreenPrint"
            name="iItemScreenPrint"
            :rules="[
              {
                required: true,
                message: 'Please input your iItemScreenPrint!',
              },
            ]"
          >
            <a-input v-model:value="formState.iItemScreenPrint" />
          </a-form-item>
        </a-col>

        <a-col :span="10">
          <a-form-item
            label="iItemVerifyQty"
            name="iItemVerifyQty"
            :rules="[
              { required: true, message: 'Please input your iItemVerifyQty!' },
            ]"
          >
            <a-input v-model:value="formState.iItemVerifyQty" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
          <a-form-item
            label="substitutelItemCode"
            name="substitutelItemCode"
            :rules="[
              {
                required: true,
                message: 'Please input your substitutelItemCode!',
              },
            ]"
          >
            <a-input v-model:value="formState.substitutelItemCode" />
          </a-form-item>
        </a-col>

        <a-col :span="10">
          <a-form-item
            label="substitutelItemDes"
            name="substitutelItemDes"
            :rules="[
              {
                required: true,
                message: 'Please input your substitutelItemDes!',
              },
            ]"
          >
            <a-input v-model:value="formState.substitutelItemDes" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
          <a-form-item
            label="engineerId"
            name="engineerId"
            :rules="[
              {
                required: true,
                message: 'Please input your engineerId!',
              },
            ]"
          >
            <a-input v-model:value="formState.engineerId" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
          <a-form-item
            label="assignment"
            name="assignment"
            :rules="[
              {
                required: true,
                message: 'Please input your substitutelItemCode!',
              },
            ]"
          >
            <a-input v-model:value="formState.assignment" />
          </a-form-item>
        </a-col>

        <a-col :span="10">
          <a-form-item
            label="assignmentQty"
            name="assignmentQty"
            :rules="[
              {
                required: true,
                message: 'Please input your assignmentQty!',
              },
            ]"
          >
            <a-input v-model:value="formState.substitutelItemDes" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="10">
          <a-form-item
            label="process"
            name="process"
            :rules="[
              {
                required: true,
                message: 'Please input your process!',
              },
            ]"
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
  parentId: string;
  trackingNo: string;
  descriptions: string;
  trackingItemCode: string;
  trackingItemDes: string;
  manufacturer: string;
  manufacturerModal: string;
  iItemScreenPrint: string;
  iItemVerifyQty: string;
  substitutelItemCode: string;
  substitutelItemDes: string;
  engineerId: string;
  assignment: string;
  assignmentQty: string;
  process: string;
}

const formState = reactive<FormState>({
  id: "",
  parentId: "",
  trackingNo: "",
  descriptions: "",
  trackingItemCode: "",
  trackingItemDes: "",
  manufacturer: "",
  manufacturerModal: "",
  iItemScreenPrint: "",
  iItemVerifyQty: "",
  substitutelItemCode: "",
  substitutelItemDes: "",
  engineerId: "",
  assignment: "",
  assignmentQty: "",
  process: "",
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
