// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              Imports                                                          |
// |_______________________________________________________________________________________________________________|
// -----------------------------------------------Library-----------------------------------------------------------
import React, { useState, Component } from 'react';

// ------------------------------------------Custom Library---------------------------------------------------------
import AlertDialog from '../Alert/AlertDialog';
import NewsFeeds from '../Newsfeeds/Newsfeeds';

// ---------------------------------------------Firestore-----------------------------------------------------------
import { initializeApp } from "firebase/app"; // Import the functions you need from the SDKs you need
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { DocumentData } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7z23TY9LYa0nfcTPVeHFv_Uv30Sn6nZ4",
  authDomain: "finanzapp-f07d7.firebaseapp.com",
  projectId: "finanzapp-f07d7",
  storageBucket: "finanzapp-f07d7.appspot.com",
  messagingSenderId: "78974963788",
  appId: "1:78974963788:web:b1f5f63036a42251bf64e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/**
 * 
 * @param email 
 * @param password 
 * @returns uid from user
 */
export async function signIn(email: string, password: string) {
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

/**
 * @returns send all News back
 */
export async function getNews() {
    let arrayOfNews = new Array();
    let keyValue = 0;

    await firestore()
        .collection('News')
        .get()
        .then(querySnapshot => {
            console.log('EVENT: Firebase -> Load News!');
            querySnapshot.forEach(documentSnapshot => {
                arrayOfNews.push(
                    <NewsFeeds key={keyValue} id={documentSnapshot.id} title={documentSnapshot.data()["title"]} text={documentSnapshot.data()["text"]} />
                )
                keyValue++
            });
        });
    
    return arrayOfNews;
}

export async function signOut() {
    return await new Promise((resolve, reject) => {
        auth()
            .signOut()
            .then(() => {
                console.log('EVENR: Firebase -> User sign out!');
                resolve(true);
            }).catch(() => {
                resolve(false);
            })
    })
}

export async function getAppVersion() {
        let data = (await firestore().collection('App').doc('Meta').get()).data();
        return data["Version"];
}