<template>
  <div class="container-fluid">
    <h1> Ajoute un tag pour trouver un jeu</h1>
    <div class="search-wrapper">
      <form v-on:submit="getfilteredData">
        <div class="form-row">
          <div class="col-10">
            <input type="text" class="form-control" placeholder="tag ici  ..." v-model="search" v-on:keyup="getfilteredData">
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </form>
      <div id="checkboxes">
      <div v-for="(stack,index) in stacks" :key="index" class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox"  v-model="stack.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
        {{ stack.value }}
        </label>
      </div>    
    </div>
  </div>
  <div class="card-columns">
     <template v-for="(item, index) in filteredData" >
      <router-link :to="'/item/' + sanitize(item.name)" :key="index">
        <item-card  :key="index" :item="item"></item-card>
      </router-link>
     </template> 
   </div>
  </div>
</template>

<script>

import item from './item';
import data from '../data/data';

export default {
  name: 'tagsearch',
  components: {
    'item': item
  },
  computed: {
    selectedFilters: function() {
      let filters = [];
      let checkedFiters = this.stacks.filter(obj => obj.checked);
      checkedFiters.forEach(element => {
        filters.push(element.value);
      });
      return filters;
    }
  },
  data () {
    return {
      filteredData: [],
      search: '',
      stacks: [
      {
        checked: false,
        value: 'fps'
      },
      {
        checked: false,
        value: 'coop'
      },
      {
        checked: false,
        value: 'modern'
        },
      {
        checked: false,
        value: 'medieval'
      },
      {
        checked: false,
        value: 'online'
      },
      {
        checked: false,
        value: 'offline'
      },
      {
        checked: false,
        value: 'party game'
      },
      {
        checked: false,
        value: '3rd person'
      }
      ]
    };
  },
  methods: {
    getfilteredData: function() {
      this.filteredData = data;
      let filteredDataByfilters = [];
      let filteredDataBySearch = [];
      if (this.selectedFilters.length > 0) {
        filteredDataByfilters= this.filteredData.filter(obj => this.selectedFilters.every(val => obj.stack.indexOf(val) >= 0));
        this.filteredData = filteredDataByfilters;
      }
      if (this.search !== '') {
        filteredDataBySearch = this.filteredData.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
        this.filteredData = filteredDataBySearch;
      }
    }
  },
  mounted() {
    this.getfilteredData();
  }
};
</script>