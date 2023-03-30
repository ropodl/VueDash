<script setup>
import { ref, computed } from "vue";
import { useDraggable, usePointerSwipe } from "@vueuse/core";

const el = ref(null);

let position = ref("");
let status = ref("locked");

const target = "el";
const container = ".v-card";
const containerWidth = computed(() => container.value?.offsetWidth);
const left = ref("0");
const opacity = ref(1);

const reset = () => {
  left.value = "0";
  opacity.value = 1;
};
const { distanceX, isSwiping, direction } = usePointerSwipe(target, {
  onSwipe() {
    if (containerWidth.value) {
      if (distanceX.value < 0) {
        const distance = Math.abs(distanceX.value);
        left.value = `${distance}px`;
        opacity.value = 1.25 - distance / containerWidth.value;
      } else {
        left.value = "0";
        opacity.value = 1;
      }
    }
  },
  onSwipeEnd() {
    if (
      distanceX.value < 0 &&
      containerWidth.value &&
      Math.abs(distanceX.value) / containerWidth.value >= 0.5
    ) {
      left.value = "100%";
      opacity.value = 0;
    } else {
      left.value = "0";
      opacity.value = 1;
    }
  },
});
</script>
<template>
  <v-container class="h-100">
    <v-row align="center" justify="center" class="h-100">
      <v-col cols="12" md="4" class="h-100">
        {{ isSwiping }} {{ direction }}
        <v-card border flat height="50" class="position-relative">
          <v-btn
            ref="el"
            class="position-absolute text-capitalize"
            height="50"
            rounded="0"
            :class="{ 'transition-all duration-200 ease-linear': !isSwiping }"
            :style="{ left, opacity }"
          >
            Slide To Unlock
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
