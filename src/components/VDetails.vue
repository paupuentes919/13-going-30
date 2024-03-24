<template>
  <div class="pau-background-event">
    <div class="max-w-screen-xl px-4 pb-8 mx-auto">
      <div class="flex justify-center mb-8">
        <img
          src="../assets/images/EventDetails.png"
          alt="event details"
          class="pau-margin-negative"
        />
      </div>
      <div class="pau-border-details pau-background-pattern p-12 pau-margin-up">
        <div class="flex items-center gap-x-8 mb-8">
          <div class="w-24 flex-shrink-0">
            <img src="../assets/images/Agenda.png" alt="agenda" class="w-full" />
          </div>
          <div class="pau-text-details">Viernes 4 de Octubre</div>
        </div>
        <div class="flex items-center gap-x-8 mb-8">
          <div class="w-24 flex-shrink-0">
            <img src="../assets/images/clock.png" alt="clock" class="w-full" />
          </div>
          <div class="pau-text-details">21 horas</div>
        </div>
        <div class="flex items-center gap-x-8 mb-8">
          <div class="w-24 flex-shrink-0">
            <img src="../assets/images/house.png" alt="house" class="w-full" />
          </div>
          <div class="pau-text-details">Av. Avellaneda 1851 - sum</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.pau-background-pattern {
  background-image: url(../assets/images/pattern.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.pau-background-event {
  background-color: rgb(242, 237, 237);
}
.pau-border-details {
  border: 15px solid pink;
  -webkit-filter: drop-shadow(5px 5px 5px #666666);
}

.pau-margin-negative {
  margin-top: -100px;
}

.pau-text-details {
  font-family: 'Graduate';
  font-size: 55px;
  color: #881c56;
  font-weight: 600;
}

.img-events {
  width: 200px;
}

@media (max-width: 1241px) {
  .pau-text-details {
    font-size: 45px;
  }
}

@media (max-width: 1092px) {
  .pau-text-details {
    font-size: 35px;
  }
}

@media (max-width: 950px) {
  .pau-text-details {
    font-size: 30px;
  }
  .img-events {
    width: 150px;
  }
}

@media (max-width: 1000px) {
  .pau-margin-negative {
    height: 120px;
  }
}

@media (max-width: 819px) {
  .img-events {
    width: 100px;
  }
}

@media (max-width: 800px) {
  .pau-margin-negative {
    height: 80px;
  }
}

@media (max-width: 769px) {
  .pau-text-details {
    font-size: 25px;
  }
  .img-events {
    width: 80px;
  }
}

@media (max-width: 658px) {
  .w-24 {
    width: 4rem;
  }
}

@media (max-width: 600px) {
  .pau-text-details {
    font-size: 20px;
  }
}

@media (max-width: 530px) {
  .pau-margin-negative {
    height: 50px;
  }

  .pau-margin-up {
    margin-top: -60px;
  }
}

@media (max-width: 490px) {
  .pau-text-details {
    font-size: 15px;
  }
}

@media (max-width: 450px) {
  .img-events {
    display: none;
  }
  .gap-x-8 {
    gap: 1.5rem;
  }
  .w-24 {
    width: 2.8rem;
  }
}
</style>
