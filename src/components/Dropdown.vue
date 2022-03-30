<template>
  <div class="dropdown">
    <h3 @click="toogleDropdown(title)">
      {{title}}
    </h3>
    <ol v-if="isDropdownActive">
      <li
        v-for="(item, idx) in list"
        :key="`dropdown--${idx}-${Math.round(Math.random() * 1000)}`">
        <h4>
          {{item.title}}
        </h4>
        <p>{{item.date}}</p>
        <ul>
          <li
            v-for="(text, idx) in item.info"
            :key="`dropdown--${idx}-${Math.round(Math.random() * 1000)}`"
          >
            <p>
              {{text.name}}
            </p>
            <p>{{text.label}}</p>
          </li>
        </ul>
      </li>
    </ol>
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
      isDropdownActive: false
    }
  },
  methods: {
    toogleDropdown(title) {
      console.log('voy a cambiar el dropdown', title)
      this.isDropdownActive = !this.isDropdownActive

    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  background-color: #449fdb;
}
ol {
  background-color: #594157;
}
</style>
