import express from 'express';
import path from 'path';
import {fileURLToPath} from "url";
import {
    loginOutUser,
    loginPage,
    loginUser,
    registrationPage,
    registrationUser
} from "../controllers/userControllers.js";


const router = express.Router();


/**
 * =============All Router ===========
 */


//Registration Page
router.get('/registration', registrationPage);

//Registration New User
router.post('/register', registrationUser);

//Login Page
router.get('/login', loginPage);

//Login User
router.post('/login', loginUser);

//Log Out User
router.get('/logout', loginOutUser)


export default router;


