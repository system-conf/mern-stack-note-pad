
import expres from 'express'

import {loginKullanici,signupKullanici} from '../controllers/kullaniciController.js';

const router=expres.Router();

router.post('/login',loginKullanici)
router.post('/signup',signupKullanici)

export default router;
