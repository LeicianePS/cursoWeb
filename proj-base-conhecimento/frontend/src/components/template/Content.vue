<template>
  <div class="cotent">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Cotent',
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }
</style>