import express from 'express'
import mongoose from 'mongoose'
import {MongoClient} from 'mongodb'



const cl =(...m)=>console.log(...m)

var url ="mongodb://localhost:27017/charlie"

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    cl('datebase is created')
    var dbase = db.db("charlie")

    // dbase.createCollection('cats',function(err,res){
    //     if(err) throw err;
    //     console.log('collection created')
    // })

    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbase.collection('cats').insertOne(myobj,(err,res)=>{
        if (err) throw err;
        console.log("文档插入成功");

    })

})


async function main(){

    const conn = await mongoose.createConnection('mongodb://localhost:27017/charlie').asPromise();
    console.log(conn.readyState); 

    const kittySchema = new mongoose.Schema({
        name:String
    })

    kittySchema.methods.speak = function speak(){
        const greeting = this.name ? "Meom name is " + this.name :"I don't have a name"
        cl(greeting)
    }

    const Kitten = mongoose.model('Kitten', kittySchema);

    const fulffy = new Kitten({name:'fluffy'})
    await fulffy.save();

    fulffy.speak();

    const kittens = await Kitten.find();

    cl('find from db.. ::', kittens)
}

// 
