import mongoose from 'mongoose';
const Sema=mongoose.Schema

const notSema=Sema({
    baslik:{
        type:String,
        required:[true,"Başlık zorunludur"]
    },
    aciklama:{
        type:String
    },
    kullanici_id:{
        type:String,
        require:true
    },
},{
    timestamps:true
})

export default mongoose.model('Not', notSema);