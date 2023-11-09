// const products = [];
const fs = require('fs'); 
const rootDir = require('../util/path');
const path = require('path');

// const filePath =path.join(__dirname,'../','data','product.json');
const filePath =path.join(rootDir,'data','product.json');

const raedFileMethod = (cb) =>{
    fs.readFile(filePath,(err,data)=>{
        if (err){
            cb([]);
        }
        cb(JSON.parse(data));;
    })
}

module.exports = class Product{
    constructor(title){
        this.title = title;
    }
    save(){
        // products.push(this);
        raedFileMethod (products=>{
            products.push(this);
            fs.writeFile(filePath,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        })
        // fs.readFile(filePath,(err,data)=>{
        //     let products = [];
        //     if(!err){
        //         products = JSON.parse(data);
        //     }
            
        // })
        
    }
    static fetch(cb){
        raedFileMethod (cb);
    }
}