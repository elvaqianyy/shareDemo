<template>
  <div id="nav">
      <a :href="url">{{name}}</a>
    </div>
</template>
<script>
export default {
  props: {
    name: String,
    url: String
  }
}
</script>