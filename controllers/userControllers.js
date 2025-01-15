import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


/**
 * Registration Page
 * Version: 1.0.0.0.0
 */


export const registrationPage = (req, res) => {
    res.send(`<h1>Welcome to the Registration Page!</h1>`)
}

/**
 * Registration New User
 * Version: 1.0.0.0.0
 */


export const registrationUser = (req, res) => {
    res.send(`<h1>Welcome to the Registration Page!</h1>`)
}

/**
 * Login Page
 * Version: 1.0.0.0.0
 */


export const loginPage = (req, res) => {
    res.send(`<h1>Welcome to the login Page!</h1>`)
}


/**
 * Login User
 * Version: 1.0.0.0.0
 */


export const loginUser = (req, res) => {
    res.send(`<h1>Welcome to the login Page!</h1>`)
}


/**
 * Log Out User
 * Version: 1.0.0.0.0
 */


export const loginOutUser = (req, res) => {
    res.send(`<h1>Welcome to the log Out Page!</h1>`)
}
