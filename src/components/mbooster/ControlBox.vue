<template>
  <div class="controlBox d-flex align-items-center justify-content-between pt-5">
    <ui-pill @click="resetGame">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
        <g id="icon-clock" transform="translate(-48 -21)">
          <g
            id="Ellipse_2"
            data-name="Ellipse 2"
            transform="translate(48 21)"
            fill="none"
            stroke="#3a54ff"
            stroke-width="3"
          >
            <circle cx="13.5" cy="13.5" r="13.5" stroke="none" />
            <circle cx="13.5" cy="13.5" r="12" fill="none" />
          </g>
          <path
            id="Path_81"
            data-name="Path 81"
            d="M70,85.263V94l-3.979,3.18"
            transform="translate(-8 -57.536)"
            fill="none"
            stroke="#3a54ff"
            stroke-linecap="round"
            stroke-width="3"
          />
        </g>
      </svg>

      <span class="ml-5">00.02</span>
    </ui-pill>

    <ui-pill @click="shuffle">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24">
        <defs>
          <clipPath id="a"><path d="M0 0h360v640H0z" /></clipPath>
        </defs>
        <g clip-path="url(#a)" data-name="Memory Booster – 1" transform="translate(-233 -62)">
          <g data-name="Group 431">
            <path
              fill="none"
              stroke="#ff4685"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M237 63h16"
              data-name="Line 5"
            />
            <path
              fill="#ff4685"
              d="M245 79h-2s-6-6-6-12v-4h16v4c0 6-6 12-6 12z"
              data-name="Union 1"
            />
            <path
              fill="#ff4685"
              d="M250 85h-10v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z"
              data-name="Path 90"
            />
            <path
              fill="none"
              stroke="#ff4685"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M240 85h10"
              data-name="Line 6"
            />
            <path
              fill="none"
              stroke="#ff4685"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M251 71s1-4 3.5-4a2.5 2.5 0 0 1 2.5 2.5c0 3.5-10 6.5-10 6.5"
              data-name="Path 91"
            />
            <path
              fill="none"
              stroke="#ff4685"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M239 71s-1-4-3.5-4a2.5 2.5 0 0 0-2.5 2.5c0 3.5 10 6.5 10 6.5"
              data-name="Path 93"
            />
          </g>
        </g>
      </svg>

      <span class="ml-5">{{ score }}</span>
    </ui-pill>
  </div>
</template>

<script>
import PillVue from '../ui/Pill.vue'
export default {
  name: 'controlBox',
  props: {
    score: {
      type: Number,
      default: 0
    },
    resetGame: {
      type: Function,
      required: true
    },
    shuffle: {
      type: Function,
      required: true
    }
  },
  components: {
    uiPill: PillVue
  }
}
</script>

<style lang="scss" scoped></style>
