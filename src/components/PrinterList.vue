<template>
    <div class="printer-list">
      <h2>Printer Fleet</h2>
      <ul>
        <li v-for="printer in printers" :key="printer.id">
          <a @click="selectPrinter(printer.id)">{{ printer.name }}</a>
        </li>
      </ul>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        printers: [
      { id: 1, name: 'Printer A' },
      { id: 2, name: 'Printer B' },
    ]
      };
    },
    methods: {
      async fetchPrinters() {
        const response = await fetch('/api/printers');
        this.printers = await response.json();
      },
      selectPrinter(id) {
        this.$emit('select-printer', id);
      }
    },
    mounted() {
      this.fetchPrinters();
    }
  };
  </script>

  <style scoped>
  .printer-list {
    padding: 20px;
  }
  </style>