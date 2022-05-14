<template>
  <div class="dropdown">
    <h3
      class="dropdown__title"
      @click="toogleDropdown">
      {{title}}
    </h3>
    <Transition name="slide">
      <div v-if="isOpen" class="dropdown__container">
        <slot></slot>
      </div>
    </Transition>

  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toogleDropdown() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {
    border: 1px solid $c-primary-darken;
    border-radius: 0.25em;
    margin: $gap-xs;
    overflow: hidden;

    &__title {
      background:conic-gradient(from 45deg at 80% 100%, $c-secondary-darken 0%, $c-primary 25%, $c-tertiary 80%);
      color: white;
      font-size: $fs-medium;
      font-weight: $fw-bold;
      padding: $gap-xxs $gap-s;
      text-transform: capitalize;
    }

    &__container {
      padding: $gap-xs;
    }
  }

  .slide {
    &-enter-active,
    &-leave-active {
      max-height: 999px;
      transition:
          opacity .6s,
          max-height .5s,
          padding-bottom .5s,
          padding-top .5s;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
      max-height: 0;
      padding-bottom: 0;
      padding-top: 0;
    }
  }
</style>
