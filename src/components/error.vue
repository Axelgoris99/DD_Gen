<template>
  <div class="containter">
    Hmmmm it seems that something went terribly bad....
    <img
      className="gif"
      src="https://c.tenor.com/1zi9Ppr4YDsAAAAj/travolta-lost.gif"
    />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "error",
};
</script>

<style scoped>
.containter {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #073037;
}

.gif {
  width: 400px;
  height: 300px;
  margin: 30px;
}
</style>
