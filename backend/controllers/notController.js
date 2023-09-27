
import NotModel from "../models/notModel.js"
import mongoose from "mongoose"

const notlarGetir=async (req,res)=>{

    const kullanici_id=req.kullanici._id
  
    const notlar=await NotModel.find({kullanici_id}).sort({createdAt:-1})
  
    res.status(200).json(notlar)
  }
  
  
  const notGetir=async (req,res)=>{
      const {id}=req.params
  
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:'ID Geçersiz'})
      }
  
      const not=await NotModel.findById(id);
  
      if(!not){
        return res.status(404).json({hata:'Not Bulunamadı'})
      }
  
      res.status(200).json(not)
  }
  
  
  const notOlustur=async (req,res)=>{
    const {baslik,aciklama}=req.body;
  
    let bosAlanlar=[]
  
    if(!baslik){
      bosAlanlar.push('baslik')
    }
  
    if(bosAlanlar.length >0){
      return res.status(400).json({hata:'Alanlar Boş Geçilemez',bosAlanlar})
    }
  
    try {
  
      const kullanici_id=req.kullanici._id
  
      const not=await NotModel.create({baslik,aciklama,kullanici_id})
      res.status(200).json(not)
    } catch (e) {
      res.status(400).json({hata:e.message})
    }
  }
  
  
  const notSil=async (req,res)=>{
    const {id}=req.params
  
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({hata:'ID Geçersiz'})
    }
  
    const not=await NotModel.findOneAndDelete({_id:id})
  
    if(!not){
      return res.status(400).json({hata:'Not Bulunamadı'})
    }
  
    res.status(200).json(not)
  }
  
  
  
  const notGuncelle=async (req,res)=>{
    const {id}=req.params
  
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({hata:'ID Geçersiz'})
    }
  
    const not=await NotModel.findOneAndUpdate({_id:id},{
      ...req.body
    })
  
    if(!not){
      return res.status(400).json({hata:'Not Bulunamadı'})
    }
  
    res.status(200).json(not)
  }
  

export{notOlustur,notlarGetir,notGetir,notSil,notGuncelle};