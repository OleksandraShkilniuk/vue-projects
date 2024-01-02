
<template>

  <div class="d-inline-block me-3">{{characteristic.title}}</div>
  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-outline-primary" @click="decrease()">-</button>
    <button type="button" class="btn btn-primary" readonly>{{ count }}</button>
    <button type="button" class="btn btn-outline-primary" @click="increase()">+</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      count: 0,
      maxTotalCount: 0,
    }
  },
  name: "characteristics",

  props: {
    characteristic: {
      required: true,
      type: Object
    }
  },

  methods: {
    increase() {
      this.count++;

      this.eventChanged()
    },
    decrease() {
      if(this.count > 0) {
        this.count--;

      }
      this.eventChanged()
    },

    eventChanged() {

      let updatedCharacter = {...this.characteristic};

      updatedCharacter.count = this.count;

      this.$emit('changeCounter', updatedCharacter);
    }

  }
}

</script>

<style scoped>

</style>