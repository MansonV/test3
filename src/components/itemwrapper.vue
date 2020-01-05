    <template>
      <item-card :item="item"></item-card>
    </template>

    <script>
    import item from './item.vue';
    import data from '../data/data';

    export default {
      components: {
        item,
      },
      props: {
        stackNameUrl: {
          required: true,
          type: String,
        },
      },
      data() {
        return {
          item: {},
        }
      },
      computed: {
        isitemLoaded() {
          return this.item && this.item.name;
        },
        stackName() {
          return decodeURI(this.stackNameUrl).replace(/-/g, ' ');
        }

      },
      created() {
        this.item = data.find( fw => fw.name === this.stackName);
      }
    }
    </script>

    <style>

    </style>
