<script setup>
import IntlTelInput from "intl-tel-input/vue";
import "intl-tel-input/styles";
</script>

<template>
  <IntlTelInput
    @changeNumber="number = $event"
    @changeValidity="isValid = $event"
    @changeErrorCode="errorCode = $event"
    :options="{
      initialCountry: 'ni',
      loadUtils: () => import('intl-tel-input/build/js/utils.js'),
    }"
  />
</template>
