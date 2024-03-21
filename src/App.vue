<script setup lang="ts">
import VHeroBlock from './components/VHeroBlock.vue'
import VDetails from './components/VDetails.vue'
</script>

<template>
  <VHeroBlock />
  <div class="pau-background py-36 px-20">
    <div class="pau-background-2 p-3">
      <div class="flex justify-center">
        <img src="./assets/images/aboutus.png" alt="about us" class="pau-about-us-font" />
      </div>
      <div class="pau-img-text m-12 gap-x-8">
        <img src="./assets/images/poisepau.png" alt="poise pau" class="pau-poise-pau-img" />
        <div class="pau-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </div>
      <div class="pau-img-text m-12 gap-x-8">
        <img src="./assets/images/poiseduli.png" alt="poise duli" class="pau-poise-pau-img" />
        <div class="pau-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center pau-background-2">
    <img src="./assets/images/disco.png" alt="disco" class="pau-disco-img" />
  </div>
  <VDetails />
</template>

<style scoped>
.pau-background {
  background-image: url(./assets/images/13going30wallpaper.jpg);
}

.pau-background-2 {
  background-color: rgb(242, 237, 237);
  border-radius: 8px;
}

.pau-about-us-font {
  height: 100px;
}

.pau-poise-pau-img {
  height: 400px;
}

.pau-img-text {
  display: flex;
}

.pau-text {
  font-family: 'Outfit';
  font-size: 28px;
  align-self: center;
}

.pau-disco-img {
  height: 550px;
}

@media (max-width: 1230px) {
  .pau-text {
    font-size: 25px;
  }
}

@media (max-width: 1100px) {
  .pau-text {
    font-size: 20px;
  }
}

@media (max-width: 1000px) {
  .pau-disco-img {
    height: 450px;
  }
}

@media (max-width: 920px) {
  .pau-text {
    font-size: 18px;
  }
}

@media (max-width: 850px) {
  .pau-img-text {
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
  }
}

@media (max-width: 800px) {
  .pau-disco-img {
    height: 350px;
  }
}

@media (max-width: 550px) {
  .px-20 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .pau-about-us-font {
    height: 70px;
  }

  .m-12 {
    margin: 1rem;
  }
}

@media (max-width: 530px) {
  .pau-disco-img {
    height: 250px;
  }
}
</style>
