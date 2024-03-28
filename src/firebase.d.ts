declare module '../firebase.js' {
  // Tipos para el objeto de configuración de Firebase
  interface FirebaseConfig {
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId?: string
  }

  // Tipos para el objeto de inicialización de Firebase
  interface FirebaseApp {
    analytics?: any // Puedes definir tipos más específicos si los necesitas
    firestore(): FirebaseFirestore.Firestore
    // Otros métodos y propiedades de Firebase que estés utilizando en tu proyecto
  }

  // Objeto global de Firebase
  const firebase: FirebaseApp

  export default firebase
}
