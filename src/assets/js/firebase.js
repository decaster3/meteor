import * as firebase from 'firebase'
import sectionModel from '../../redux/models/section'
import todoModel from '../../redux/models/todo'

let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyBMMIBgH5d_kJd5f2y9FgyJDWTsqbNOmAk",
    authDomain: "meteor-764bf.firebaseapp.com",
    databaseURL: "https://meteor-764bf.firebaseio.com",
    projectId: "meteor-764bf",
    storageBucket: "meteor-764bf.appspot.com",
    messagingSenderId: "560068246876"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}
export const getSectionsDB = () => {
  return database.ref('/').once('value')
}
// get specified section
export const getTodoDB = (sectionId) => {
  return database.ref(`/${sectionId}`).once('value')
}
// add new section
export const addSection = (name) => {
  let key = database.ref('/').push().key
  let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/'+ key).set(model)
}
// add new todo item into specified section
export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database.ref(`/${id}`).once('value').then((todo) => {
      let todos = todo.val().todos || []
      let key = database.ref(`/${id}`).push().key
      todos.push(todoModel(key, name, firebase.database.ServerValue.TIMESTAMP))
      database.ref(`/${id}/todos`).set(todos)
        .then( res => {resolve(res)})
        .catch( error => {reject(error)})
    })
  })
}
