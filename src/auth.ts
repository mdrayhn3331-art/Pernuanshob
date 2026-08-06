import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  signOut,
  updateProfile
} from "firebase/auth";

import { auth } from "./firebase";

// Register
export async function register(
  name: string,
  email: string,
  password: string
) {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      displayName: name
    });

    await sendEmailVerification(auth.currentUser);
  }

  return userCredential.user;
}

// Login
export async function login(
  email: string,
  password: string
) {
  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  return userCredential.user;
}

// Google Login
export async function googleLogin() {
  const provider = new GoogleAuthProvider();

  const result =
    await signInWithPopup(auth, provider);

  return result.user;
}

// Forgot Password
export async function forgotPassword(
  email: string
) {
  await sendPasswordResetEmail(auth, email);
}

// Logout
export async function logout() {
  await signOut(auth);
}
