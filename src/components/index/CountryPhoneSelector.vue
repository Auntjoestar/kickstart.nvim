<script setup>
import { ref, onMounted } from 'vue';
import IntlTelInput from 'intl-tel-input/vue';

const phoneInputRef = ref();
const fullNumber = ref('');

function updateDialCode() {
  const instance = phoneInputRef.value?.instance;
  if (!instance) return;

  const dialCode = instance.getSelectedCountryData().dialCode;
  const hiddenInput = document.querySelector('input[name="extension"]');
  if (hiddenInput) {
    hiddenInput.value = `+${dialCode}`;
  }
}

function handleCodeUpdate() {
	updateDialCode()
}
</script>

<template>
  <IntlTelInput
    ref="phoneInputRef"
    @changeCountry="handleCodeUpdate"
    :inputProps="{ required: true, id: 'phone', name: 'phone' }"
    :options="{
      initialCountry: 'ni',
      loadUtils: () => import('intl-tel-input/build/js/utils.js'),
    }"
  />
</template>
