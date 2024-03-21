<template>
  <section class="pau-background-hero">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <div
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
        >
          <img src="../assets/images/13Going30.png" alt="13 going 30" />
        </div>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 mt-8 lg:mb-8 md:text-lg lg:text-xl font-bold pau-text"
        >
          30, flirty, and thriving. Why the 30s are the best years of your life
        </p>
      </div>
      <div class="lg:ml-24 lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="../assets/images/13going30-dulipau.png"
          alt="duli and pau"
          class="pau-img-height"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleGetStarted() {
      // Your logic for handling 'Get started' click event goes here
    }
  }
}
</script>

<style scoped>
.pau-background-hero {
  background-image: url(../assets/images/cityNY.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.pau-img-height {
  height: 400px;
}

.pau-text {
  color: #881c56;
  font-weight: 600;
}
</style>
