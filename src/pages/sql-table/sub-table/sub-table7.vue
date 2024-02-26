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
            label="inboundCondition"
            name="inboundCondition"
            :rules="[
              {
                required: true,
                message: 'Please input your inboundCondition!',
              },
            ]"
          >
            <a-input-password v-model:value="formState.inboundCondition" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="manuallnboundCondition"
            name="manuallnboundCondition"
            :rules="[
              {
                required: true,
                message: 'Please input your manuallnboundCondition!',
              },
            ]"
          >
            <a-input v-model:value="formState.manuallnboundCondition" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="subinventoryCode"
            name="subinventoryCode"
            :rules="[
              {
                required: true,
                message: 'Please input your subinventoryCode!',
              },
            ]"
          >
            <a-input v-model:value="formState.subinventoryCode" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="restrictedShipMents"
            name="restrictedShipMents"
            :rules="[
              {
                required: true,
                message: 'Please input your restrictedShipMents!',
              },
            ]"
          >
            <a-input v-model:value="formState.restrictedShipMents" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="region"
            name="region"
            :rules="[{ required: true, message: 'Please input your region!' }]"
          >
            <a-input v-model:value="formState.region" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="customer"
            name="customer"
            :rules="[
              { required: true, message: 'Please input your customer!' },
            ]"
          >
            <a-input v-model:value="formState.customer" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="originalContractNo"
            name="originalContractNo"
            :rules="[
              {
                required: true,
                message: 'Please input your originalContractNo!',
              },
            ]"
          >
            <a-input v-model:value="formState.originalContractNo" />
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            label="batchNo"
            name="batchNo"
            :rules="[{ required: true, message: 'Please input your batchNo!' }]"
          >
            <a-input v-model:value="formState.batchNo" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="120">
        <a-col :span="12">
          <a-form-item
            label="faultyProductHandlingOwner"
            name="faultyProductHandlingOwner"
            :rules="[
              {
                required: true,
                message: 'Please input your faultyProductHandlingOwner!',
              },
            ]"
          >
            <a-input v-model:value="formState.faultyProductHandlingOwner" />
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
  id?: string;
  productionStage: string;
  inboundCondition: string;
  manuallnboundCondition: string;
  subinventoryCode: string;
  restrictedShipMents: string;
  region: string;
  customer: string;
  originalContractNo: string;
  batchNo: string;
  faultyProductHandlingOwner: string;
  process: string;
}

const formState = reactive<FormState>({
  productionStage: "",
  inboundCondition: "",
  manuallnboundCondition: "",
  subinventoryCode: "",
  restrictedShipMents: "",
  region: "",
  customer: "",
  originalContractNo: "",
  batchNo: "",
  faultyProductHandlingOwner: "",
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
