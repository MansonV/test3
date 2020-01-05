<template>
  <div class="card p-3">
    <div class="text-center">
      <div class="card-body">
        <h5 class="card-title">{{ item.name | capitalize }} </h5>
      </div>
      <div>
    <span v-for="(group, index) in item.stack" :key="index" :class="`badge badge-${tags[group]}`">{{ group }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    // list of tags to giving each stack a different color
      tags: {
        fps: 'light',
        coop: 'dark',
        modern: 'success',
        coop: 'danger',
        online: 'warning',
        offline: 'secondary',
        partygame: 'info',
        database: 'danger'
      }
    };
  },
  filters: {
   // this filter will can be used to capitalize a word
    capitalize: item => {
      return item.toUpperCase();
    }
  },
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
};
</script>