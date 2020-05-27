<template>
  <div>
    <b-button pill @click="previous()">precedent</b-button>
    <br />
    <br />
    <!-- for [declaration de varibale qu'on affiche] in [l'objet/tableau/json sur quoi on boucle] -->
    <li v-for="(data, index) in datas" :key="index">
      <span
        @click="chooseDirectory(data.name, data.isdirectory)"
      >{{ data.name }}- {{ data.isdirectory }}</span>
    </li>
  </div>
</template>

<script>
import * as fs from "fs.extra";
import { join } from "path";

export default {
  name: "MenuBar",
  data() {
    return {
      currentPath: process.cwd(),
      datas: []
    };
  },
  mounted() {
    this.getListFiles();
  },
  methods: {
    getListFiles: function() {
      this.datas = [];
      fs.readdir(this.currentPath, { withFileTypes: true }, (err, files) => {
        files.forEach(e => {
          // loops the elements of the table
          this.datas = [
            // creation of the table with the recovered elements
            ...this.datas, // retrieve the elements of the array already retrieved as a .push
            { name: e.name, isdirectory: e.isDirectory() } // formatting of the object to recover name + type
          ];
        });
        console.log(this.datas);
      });
    },
    previous: function() {
      this.currentPath = join(this.currentPath, "../");
      this.getListFiles();
    },
    chooseDirectory: function(name, type) {
      if (type != true) {
        console.log(`${name} est un fichier`);
      } else {
        console.log(`${name} est un document`);
      }
    },
    
  }
};
</script>
