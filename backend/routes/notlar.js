import  express from "express";
import {notOlustur, notlarGetir,notGetir, notSil, notGuncelle} from "../controllers/notController.js";
import authKontrol from "../middlewares/authKontrol.js";

const router=express.Router()

router.use(authKontrol)


//Görüntüle

router.get('/',notlarGetir)

router.get('/:id',notGetir)
//Ekle
router.post('/',notOlustur)
//Sil
router.delete('/:id',notSil)

//Güncelle
router.patch('/:id',notGuncelle)

export default router;