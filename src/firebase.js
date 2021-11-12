// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  addDoc,
} from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDe7Y_-jWD7EsBDS-imBNJkN1stOyVry44",
  authDomain: "go-hum-test.firebaseapp.com",
  projectId: "go-hum-test",
  storageBucket: "go-hum-test.appspot.com",
  messagingSenderId: "979742325711",
  appId: "1:979742325711:web:80cf4468b89789360370ba",
  measurementId: "G-2C33RDZN0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Init db
export const db = getFirestore();

// Fetch influencers
export async function fetchAllfluencers(db) {
  const influencersCol = collection(db, "influencer");
  const influencersSnapshot = await getDocs(influencersCol);
  const influencersData = influencersSnapshot.docs.map((doc) => doc.data());
  console.log(influencersData);
  return influencersData;
}

export async function fetchSingleInfluencer(db, influencerId) {
  const docRef = doc(db, "influencer", influencerId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function loadData() {
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  });
}

export async function createLinkClickRecord(influencerId) {
  // Add a new document in collection "cities"
  // await setDoc(doc(db, "clicks", ""), {
  //   influencerId: influencerId,
  //   timeClicked: Date.now(),
  // });
  // console.log("****** Data sent******");
  const data = {
    influencerId: influencerId,
    timeClicked: Date.now(),
    videoNames: "FatumaShop"
  };
  addDoc(collection(db, "clicks"), data).then();
}