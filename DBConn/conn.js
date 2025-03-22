const mongooes= require("mongoose")
mongooes.connect('mongodb://localhost:27017/gymBackend').then(()=>console.log('DB connection successfully !')).catch(err=>{
    console.log(err)
});