import { auth } from './firebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';

export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const token = await userCredential.user.getIdToken();
  localStorage.setItem('token', token);
};

export const signup = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  await signOut(auth);
  localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const decodeToken = (token: string) => {
  return JSON.parse(atob(token.split('.')[1]));
};

export const loginWithGithub = async () => {
  const provider = new GithubAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  const token = await userCredential.user.getIdToken();
  localStorage.setItem('token', token);
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  const token = await userCredential.user.getIdToken();
  localStorage.setItem('token', token);
};
