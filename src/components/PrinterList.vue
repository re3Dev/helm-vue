<template>
  <div class="printer-list">
    <h2>Printer Fleet</h2>
    <ul>
      <li v-for="printer in printers" :key="printer.ip">
        <div>
          <h3>{{ printer.hostname }}</h3>
          <p>IP: {{ printer.ip }}</p>
          <p>Status: {{ printer.status }}</p>
          <p>Extruder Temp: {{ printer.extruder_temperature }}°C</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      printers: [],
    };
  },
  methods: {
    async fetchPrinters() {
      try {
        const response = await fetch('/api/devices');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        this.printers = await response.json();
      } catch (error) {
        console.error('Failed to fetch devices:', error);
      }
    },
  },
  mounted() {
    this.fetchPrinters();
  },
};
</script>

<style scoped>
.printer-list {
  padding: 20px;
}
</style>