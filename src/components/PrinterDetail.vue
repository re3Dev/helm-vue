<template>
    <div class="printer-detail">
      <h2>Printer Details</h2>
      <div v-if="printer">
        <p><strong>Name:</strong> {{ printer.name }}</p>
        <p><strong>Status:</strong> {{ printer.status }}</p>
        <p><strong>Model:</strong> {{ printer.model }}</p>
      </div>
      <div v-else>
        <p>Select a printer to view details.</p>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: ['printerId'],
    data() {
      return {
        printer: null
      };
    },
    watch: {
      printerId: 'fetchPrinterDetails'
    },
    methods: {
      async fetchPrinterDetails() {
        if (this.printerId) {
          try {
            const response = await fetch(`http://${this.printerId}/printer/info`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.printer = await response.json();
          } catch (error) {
            console.error('Error fetching printer details:', error);
          }
        }
      }
    },
    mounted() {
      this.fetchPrinterDetails();
    }
  };
  </script>

  <style scoped>
  .printer-detail {
    padding: 20px;
  }
  </style>