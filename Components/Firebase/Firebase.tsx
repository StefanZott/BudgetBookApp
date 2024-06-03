// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              Imports                                                          |
// |_______________________________________________________________________________________________________________|
// -----------------------------------------------Library-----------------------------------------------------------
import React, { useState, Component } from 'react';

// ------------------------------------------Custom Library---------------------------------------------------------
import AlertDialog from '../Alert/AlertDialog';

// ---------------------------------------------Firestore-----------------------------------------------------------
import { initializeApp } from "firebase/app";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7z23TY9LYa0nfcTPVeHFv_Uv30Sn6nZ4",
    authDomain: "finanzapp-f07d7.firebaseapp.com",
    projectId: "finanzapp-f07d7",
    storageBucket: "finanzapp-f07d7.appspot.com",
    messagingSenderId: "78974963788",
    appId: "1:78974963788:web:65039fcbe4b78ed2bf64e9"
  };

/**
 * 
 * @param email 
 * @param password 
 * @returns uid from user
 */
export async function signIn(email: string, password: string) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    if (email != null && password != null && email !== "" && password !== "") {
        return await new Promise((resolve, reject) => {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(async (data) => {
                    console.log('EVENT: Firebase -> Sign in successfully. UID: ' + data.user.uid);
                    resolve(data.user.uid);
                }).catch((error) => {
                    resolve(null);
                })
        }) 
    } else {
        console.log('EVENT: Firebase -> Username and/or password are empty!');
        AlertDialog("Error", "Bitte Benutzername und Passwort eingeben");
        return null;
    }
}

/**
 * 
 * @param email 
 * @param password 
 * @param firstName 
 * @param lastName 
 * @returns true = successfully, false = failed
 */
export async function createUser(email: string, password: string, firstName: string, lastName:string) {
    if (email != null && password != null && email !== "" && password !== "") {
        const userCredential = await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (data) => {
                await firestore()
                    .collection('User')
                    .doc(data.user.uid)
                    .set({
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                        password: password
                    })
                AlertDialog("successfully", "User account created & signed in!");
                return true;
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    AlertDialog("Error", "That email address is already in use!");
                }

                if (error.code === 'auth/invalid-email') {
                    AlertDialog("Error", "That email address is invalid!");
                }

                console.error(error.code);
                console.error(error);

                return false;
            });
    }

    return false;
}