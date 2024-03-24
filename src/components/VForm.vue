<template>
  <div class="pau-background-form">
    <div class="pau-border-lines">
      <div class="flex justify-center">
        <img src="../assets/images/FormText.png" alt="form text" class="pau-text-form" />
      </div>
      <div class="flex justify-center">
        <img src="../assets/images/pen.png" alt="pen" class="pau-img-pen" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.pau-background-form {
  background-color: rgb(242, 237, 237);
  padding: 3rem;
}

.pau-border-lines {
  border: 3px double lightblue;
}

.pau-text-form {
  margin-top: 2rem;
  height: 100px;
}

.pau-img-pen {
  transform: rotate(90deg);
  margin-top: -90px;
  height: 200px;
}
</style>
