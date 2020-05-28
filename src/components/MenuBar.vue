<template>
  <div class="MenuBar">
    <h4 class="mt-5">{{ currentPath }}</h4>
    <b-button pill @click="previous()" class="mt-2 mb-5">precedent</b-button>
    <b-form inline>
      <!-- for [declaration de varibale qu'on affiche] in [l'objet/tableau/json sur quoi on boucle] -->
      <div v-for="(data, index) in datas" :key="index">
        <b-row>
          <b-col>
            <div
              v-if="data.isdirectory == true"
              @click="chooseDirectory(data.name, data.isdirectory)"
              class="cursorPointer mr-2"
            >
              <img src="../assets/img/folder.png" alt="Folder" width="100" />
              <h5>{{ data.name }}</h5>
            </div>
            <div
              v-else
              @click="chooseDirectory(data.name, data.isdirectory)"
              class="cursorPointer mr-2"
            >
              <img src="../assets/img/file.png" alt="File" width="100" />
              <h5>{{ data.name }}</h5>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-form>
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
      datas: [],
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
      if (type == true) {
        this.currentPath = join(this.currentPath, name);
        this.getListFiles();
        console.log(`${name} est un document`);
      } else alert(`${name} est un fichier`);
    },
  }
};
</script>

<style scoped>
.cursorPointer {
  cursor: pointer;
}
</style>