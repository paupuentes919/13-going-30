<template>
  <div class="pau-background-form">
    <div class="pau-border-lines">
      <div class="flex justify-center">
        <img src="../assets/images/FormText.png" alt="form text" class="pau-text-form" />
      </div>
      <div class="flex justify-center">
        <img src="../assets/images/pen.png" alt="pen" class="pau-img-pen" />
      </div>
      <div class="pau-girls-text mb-12">
        <div class="flex justify-center px-3">
          Paula Puentes: [panicked and confused] Wait, listen to me. I'm 13!
        </div>
        <div class="flex justify-center px-3">
          Mike: Paula, if you're gonna start lying about your age, I'd go with 27.
        </div>
      </div>
      <form>
        <!-- <form action="#" method="post"> -->
        <div class="relative">
          <img src="../assets/images/cinta.png" alt="cinta" class="pau-cinta" />
          <div class="pau-position-up">Nombre y Apellido</div>
        </div>
        <div class="pau-form-text-description">
          <span style="color: red">*</span> Ingrese su nombre y apellido
        </div>
        <div class="flex justify-center pb-12 self-center">
          <div class="flex self-end">
            <img src="../assets/images/mike.png" alt="duli left" class="pau-pau-right" />
          </div>
          <div class="pau-borders-card">
            <div class="pau-card-form">HI, I AM:</div>
            <div class="flex justify-center mt-3">
              <img
                src="../assets/images/arrows.png"
                alt="arrows"
                height="100px"
                class="pau-width-150"
              />
            </div>
            <div class="flex justify-center pt-3 pb-3">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name and surname"
                v-model="name"
                class="pau-input-form-name"
                :class="{ 'border-red-500': !nombreValido }"
                @input="clearError"
              />
            </div>
            <span v-if="!nombreValido" class="mensaje-error"
              >El nombre y apellido son obligatorios</span
            >
            <div class="flex justify-center">
              <div class="pau-exclusive-friend pb-12">... Exclusive friend of Pau ...</div>
            </div>
            <div class="pau-pink-divider"></div>
          </div>
          <div class="flex self-end">
            <img src="../assets/images/pauright.png" alt="pau right" class="pau-pau-right" />
          </div>
        </div>
        <div class="relative">
          <img src="../assets/images/cinta.png" alt="cinta" class="pau-cinta" />
          <div class="pau-position-up">Email</div>
        </div>
        <div class="pau-form-text-description">
          <span style="color: red">*</span> Ingrese su email
        </div>
        <div class="flex justify-center pb-12 self-center">
          <div class="relative">
            <img src="../assets/images/newemail.jpg" alt="new email" class="pau-new-email" />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              v-model="email"
              class="pau-email-input"
              :class="{ 'border-red-500': !emailValido }"
              @input="clearError"
            />
            <span v-if="!emailValido" class="mensaje-error pau-position-error">{{
              emailError
            }}</span>
          </div>
        </div>
        <div class="relative">
          <img src="../assets/images/cinta.png" alt="cinta" class="pau-cinta" />
          <div class="pau-position-up">DNI</div>
        </div>
        <div class="pau-form-text-description">
          <span style="color: red">*</span> Ingrese su dni
        </div>
        <div class="flex justify-center pb-12 self-center">
          <div class="relative">
            <img src="../assets/images/mask.png" alt="sleep mask" class="pau-mask" />
            <input
              type="number"
              name="dni"
              id="dni"
              placeholder="Enter your dni"
              v-model="dni"
              class="pau-dni-input"
              :class="{ 'border-red-500': !dniValido }"
              @input="clearError"
            />
            <span v-if="!dniValido" class="mensaje-error pau-position-error-dni">{{
              dniError
            }}</span>
          </div>
        </div>
        <div class="relative">
          <img src="../assets/images/cinta.png" alt="cinta" class="pau-cinta" />
          <div class="pau-position-up">Comentarios</div>
        </div>
        <div class="pau-form-text-description">
          Avisanos si consideras que tenemos que saber alguna restricción alimenticia, por ejemplo:
          alergias, intolerancias, no consumo ciertos alimentos, etc.
        </div>
        <div class="flex justify-center pb-12 self-center">
          <div class="relative pau-wd-background">
            <img
              src="../assets/images/wishingdustelements.png"
              alt="wishing dust elements"
              class="pau-wd-elements"
            />
            <img
              src="../assets/images/wishingdustfont.png"
              alt="wishing dust font"
              class="pau-wd-font"
            />
            <div class="flex justify-center pb-12">
              <textarea
                type="text"
                name="comments"
                id="comments"
                placeholder="Enter your comments here"
                v-model="comments"
                class="pau-comments-input"
                @input="clearError"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="flex justify-center pb-3 self-center pau-info-text">
          Si todos tus datos son correctos, luego de apretar el boton "Enviar", se abrirá un pop-up
          con más detalles
        </div>
        <div
          v-if="!emailValido || !dniValido || !nombreValido"
          class="flex justify-center p-3"
          style="color: red; font-family: 'Outfit'; font-size: 20px"
        >
          Por favor, verifique sus datos ya que hay errores
        </div>
        <div class="flex justify-end p-8">
          <img src="../assets/images/alex.png" alt="alex" class="pau-width-150" />
          <button @click="submitForm" type="submit" class="pau-button-form">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { firestore } from '../firebase'
import emailjs from 'emailjs-com'
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { ref } from 'vue'
console.log('this is a codeql test')
const name = ref('')
const email = ref('')
const dni = ref('')
const comments = ref('')
const emailError = ref('')
const dniError = ref('')
const nombreValido = ref(true)
const emailValido = ref(true)
const dniValido = ref(true)

const submitForm = async (event: Event): Promise<void> => {
  event.preventDefault() // Prevenir el comportamiento por defecto del formulario

  if (name.value.trim() === '') {
    nombreValido.value = false
  }
  if (email.value.trim() === '') {
    emailValido.value = false
    emailError.value = 'El email es obligatorio'
  }
  if ((!email.value.includes('@') || !email.value.includes('.com')) && email.value.trim() !== '') {
    emailValido.value = false
    emailError.value = 'Por favor, ingrese un email válido'
  }
  if (dni.value === '') {
    dniValido.value = false
    dniError.value = 'El dni es obligatorio'
  }
  if ((dni.value.toString().length < 7 || dni.value.toString().length > 8) && dni.value !== '') {
    dniValido.value = false
    dniError.value = 'Por favor, ingrese un dni válido'
  }
  if (nombreValido.value && emailValido.value && dniValido.value) {
    try {
      const formData = {
        comments: comments.value.trim(),
        dni: dni.value,
        email: email.value.trim(),
        name: name.value.trim()
      }

      // Realiza una consulta a Firestore para buscar el DNI
      const querySnapshot = await getDocs(
        query(collection(firestore, 'Invitados'), where('dni', '==', dni.value))
      )
      // Verifica si la consulta devuelve algún resultado
      if (!querySnapshot.empty) {
        Swal.fire({
          title: `¡${name.value.trim()}, ya te anotaste!`,
          text: `Validamos los datos y ya te encuentras en nuestra lista de invitados`,
          icon: 'warning',
          confirmButtonText: 'Volver al inicio'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/'
          }
        })
      } else {
        // Envia mail a cumplepauyduli2024@gmail.com
        sendEmail()

        // Envia mail al usuario con mas data
        sendEmailUser()

        // Mando a Firebase
        const docRef = await addDoc(collection(firestore, 'Invitados'), formData)
        console.log('Formulario enviado a Firebase con ID: ', docRef.id)
        Swal.fire({
          title: `¡Muchas gracias por anotarte, ${name.value.trim()}!`,
          text: `Te hemos enviado un correo electrónico a ${email.value.trim()} con más detalles.`,
          icon: 'success',
          confirmButtonText: 'Volver al inicio'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/'
          }
        })
      }
    } catch (error) {
      console.error('Error al enviar el formulario a Firebase: ', error)
    }
  }
}
const clearError = (): void => {
  if (name.value.trim() !== '') {
    nombreValido.value = true
  }
  if (email.value.trim() !== '') {
    emailValido.value = true
  }
  if (dni.value !== '') {
    dniValido.value = true
  }
}

const sendEmail = async () => {
  try {
    const templateParams = {
      to_email: 'cumplepauyduli2024@gmail.com',
      from_email: email.value.trim(),
      from_name: name.value.trim(),
      subject: 'Nuevo invitado: ' + name.value.trim()
    }

    const response = await emailjs.send(
      'service_k69emhy', // Aquí debes proporcionar tu Service ID de EmailJS
      'template_qd7grwo', // Aquí debes proporcionar tu Template ID de EmailJS
      templateParams,
      'erEPHi7VRNfaN2lfQ'
    )

    console.log('Correo electrónico enviado:', response)
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error)
  }
}

const sendEmailUser = async () => {
  try {
    const templateParams = {
      from_email: 'cumplepauyduli2024@gmail.com',
      to_email: email.value.trim(),
      to_name: name.value.trim()
    }

    const response = await emailjs.send(
      'service_k69emhy', // Aquí debes proporcionar tu Service ID de EmailJS
      'template_1gh8snt', // Aquí debes proporcionar tu Template ID de EmailJS
      templateParams,
      'erEPHi7VRNfaN2lfQ'
    )

    console.log('Correo electrónico enviado:', response)
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error)
  }
}
</script>

<style scoped>
.pau-background-form {
  background-image: url(../assets/images/razzles.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 15rem;
  padding-right: 15rem;
}

.pau-border-lines {
  border: 10px double #0fe9d9;
  background-color: rgb(242, 237, 237);
}

.pau-cinta {
  width: 400px;
}

.pau-position-up {
  font-family: 'Graduate';
  font-size: 25px;
  position: absolute;
  left: 2rem;
  bottom: 3.5rem;
}

.pau-form-text-description {
  font-family: 'Outfit';
  padding-left: 2rem;
  padding-bottom: 1.5rem;
  font-weight: 600;
  font-size: 17px;
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

.pau-girls-text {
  margin-top: -2.5rem;
  color: #c003ff;
  font-family: 'Outfit';
}

.pau-borders-card {
  border: 3px solid #111211;
  max-width: 26rem;
  border-radius: 8px;
}

.pau-card-form {
  background-color: #f6014c;
  font-family: 'Just Another Hand';
  color: white;
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding: 0.5rem;
}

.pau-input-form-name {
  width: 23rem;
  padding: 1rem;
  font-family: 'Cedarville Cursive';
  font-size: 22px;
  font-weight: 900;
}

.pau-exclusive-friend {
  font-family: 'Cedarville Cursive';
  font-size: 18px;
  font-weight: 500;
}

.pau-pink-divider {
  height: 20px;
  background-color: #f6014c;
}

.mensaje-error {
  color: red;
  font-size: 15px;
  margin-left: 1rem;
  font-family: 'Outfit';
}

.pau-pau-right {
  height: 300px;
}

.border-red-500 {
  border: 3px solid red;
}

.pau-width-150 {
  width: 150px;
}

.pau-new-email {
  width: 23rem;
}

.pau-mask {
  width: 25rem;
}

.pau-email-input {
  position: absolute;
  height: 4.1rem;
  width: 20rem;
  top: 5.3rem;
  left: 1.3rem;
  font-family: 'Cedarville Cursive';
  font-size: 22px;
  font-weight: 900;
  padding: 1rem;
}

.pau-dni-input {
  position: absolute;
  height: 4.1rem;
  width: 20rem;
  top: 5.3rem;
  left: 3.2rem;
  font-family: 'Cedarville Cursive';
  font-size: 22px;
  font-weight: 900;
  padding: 1rem;
}

.pau-position-error {
  position: absolute;
  bottom: 0.5rem;
  left: 0.2rem;
}

.pau-position-error-dni {
  position: absolute;
  bottom: 4.5rem;
  left: 2.2rem;
  background: rgb(255, 255, 255);
}

.pau-wd-background {
  background-color: #f6522f;
}

.pau-wd-elements,
.pau-wd-font {
  width: 22rem;
  height: 10rem;
  padding-bottom: 1.5rem;
}

.pau-comments-input {
  width: 20rem;
  height: 8rem;
  padding: 1rem;
  font-size: 20px;
  font-family: 'Cedarville Cursive';
  font-weight: 900;
}

.pau-button-form {
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 25px;
  font-family: 'Graduate';
  font-weight: 600;
  color: white;
  background-color: #0592e1;
  border: 3px solid #111211;
  border-radius: 8px;
}

.pau-info-text {
  font-family: 'Outfit';
  font-size: 15px;
  font-weight: 600;
  padding: 1rem;
}

@media (max-width: 1255px) {
  .pau-pau-right {
    height: 250px;
  }
}

@media (max-width: 1190px) {
  .pau-pau-right {
    height: 200px;
  }

  .pau-background-form {
    padding-left: 10rem;
    padding-right: 10rem;
  }
}

@media (max-width: 975px) {
  .pau-background-form {
    padding-left: 7rem;
    padding-right: 7rem;
  }
}

@media (max-width: 865px) {
  .pau-background-form {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (max-width: 800px) {
  .pau-background-form {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media (max-width: 800px) {
  .pau-borders-card {
    max-width: 20rem;
  }

  .pau-background-form {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (max-width: 800px) {
  .pau-background-form {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

@media (max-width: 600px) {
  .pau-background-form {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .pau-borders-card {
    max-width: 17rem;
  }

  .pau-input-form-name {
    width: 17rem;
    font-size: 18px;
  }

  .pau-exclusive-friend {
    font-size: 14px;
  }

  .pau-pau-right {
    height: 180px;
  }

  .pau-card-form {
    font-size: 30px;
  }

  .pau-width-150 {
    width: 100px;
  }
}

@media (max-width: 530px) {
  .pau-pau-right {
    height: 150px;
  }
}

@media (max-width: 490px) {
  .pau-pau-right {
    height: 100px;
  }

  .pau-card-form {
    font-size: 25px;
  }

  .pau-width-150 {
    width: 70px;
  }

  .pau-new-email {
    width: 17rem;
  }

  .pau-email-input {
    font-size: 18px;
    top: 3rem;
    width: 15rem;
  }
  .pau-position-error {
    top: 7rem;
  }

  .pau-width-150 {
    width: 70px;
  }

  .pau-mask {
    width: 17rem;
  }

  .pau-dni-input {
    font-size: 18px;
    top: 3rem;
    width: 12rem;
  }
  .pau-position-error-dni {
    bottom: 1.8rem;
  }

  .pau-wd-elements,
  .pau-wd-font {
    width: 17rem;
    height: 7rem;
  }

  .pau-comments-input {
    width: 15rem;
    padding: 1rem;
    font-size: 18px;
  }

  .pau-button-form {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 20px;
  }
}

@media (max-width: 425px) {
  .pau-card-form {
    font-size: 20px;
  }
  .pau-width-150 {
    width: 50px;
  }
  .pau-borders-card {
    max-width: 13rem;
  }
  .pau-input-form-name {
    width: 13rem;
    font-size: 13px;
  }

  .pau-exclusive-friend {
    font-size: 10px;
  }

  .pau-position-up {
    bottom: 2.9rem;
    font-size: 18px;
  }
}

@media (max-width: 350px) {
  .pau-pau-right {
    height: 50px;
  }

  .pau-new-email {
    width: 15rem;
  }

  .pau-email-input {
    font-size: 13px;
    top: 3rem;
    width: 13rem;
    height: 3.3rem;
  }
  .pau-position-error {
    top: 6.1rem;
  }

  .pau-mask {
    width: 15rem;
  }

  .pau-dni-input {
    font-size: 13px;
    top: 3rem;
    left: 2.2rem;
    width: 11rem;
    height: 3.3rem;
  }
  .pau-position-error-dni {
    bottom: 1.4rem;
    left: 1.3rem;
  }

  .pau-wd-elements,
  .pau-wd-font {
    width: 15rem;
    height: 6rem;
  }

  .pau-comments-input {
    width: 13rem;
    padding: 1rem;
    font-size: 13px;
  }
}

@media (max-width: 300px) {
  .pau-pau-right {
    display: none;
  }
  .pau-position-up {
    bottom: 2rem;
  }
}
</style>
