import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
apiKey: "AIzaSyD73Q-gv7TZdVd_D1XVSNAX1fdvrUG3pXc",
  authDomain: "todoist-tut-c28aa.firebaseapp.com",
  databaseURL: "https://todoist-tut-c28aa.firebaseio.com",
  projectId: "todoist-tut-c28aa",
  storageBucket: "todoist-tut-c28aa.appspot.com",
  messagingSenderId: "296534678271",
  appId: "1:296534678271:web:65784a8a4cc4a5f92e8aca"
});

export { firebaseConfig as firebase };