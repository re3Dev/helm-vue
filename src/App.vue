<template>
  <div id="app">
    <header>
      <h1>Printer Fleet Management</h1>
    </header>
    <main>
      <router-view @select-printer="onPrinterSelect" />
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    onPrinterSelect(id) {
      this.$router.push(`/printer/${id}`);
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  background-color: #42b983;
  color: white;
  padding: 20px;
  text-align: center;
}
main {
  padding: 20px;
}
</style>

