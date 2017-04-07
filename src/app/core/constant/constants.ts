export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBfT1NjQ_3Ln0OuV0Fs-Gcu7F3HTW-dGyk",
  authDomain: "bugged-out-a14d1.firebaseapp.com",
  databaseURL: "https://bugged-out-a14d1.firebaseio.com",
  storageBucket: "bugged-out-a14d1.appspot.com",
  messagingSenderId: "223246360241"
}

export enum STATUS {
  'Logged' = 1,
  'Recreated',
  'In Progess',
  'Fixed',
  'Declined'
}

export enum SEVERITY {
  'Severe' = 1,
  'Medium',
  'Low'
}
