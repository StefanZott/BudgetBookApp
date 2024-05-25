// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              Imports                                                          |
// |_______________________________________________________________________________________________________________|
// -----------------------------------------------Library-----------------------------------------------------------
import React, { useState, Component } from 'react';

// ------------------------------------------Custom Library---------------------------------------------------------
import AlertDialog from '../Alert/AlertDialog';

// ---------------------------------------------Firestore-----------------------------------------------------------
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

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