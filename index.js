const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();

 app.use(
   cors({origin:'http://localhost:3000',
  credentials: true,})
 );
 

const SELECT_ALL='SELECT * FROM manager';
const SELECT_FIRST='SELECT * FROM manager WHERE id=01';
const SELECT_SECOND='SELECT * FROM manager WHERE id=02';
const SELECT_THIRD='SELECT * FROM manager WHERE id=03';
const SELECT_FOUR='SELECT * FROM manager WHERE id=04';

const SELECT_LONG_FARMER1='SELECT * FROM longterm WHERE id=01';
const SELECT_LONG_FARMER2='SELECT * FROM longterm WHERE id=02';
const SELECT_LONG_FARMER3='SELECT * FROM longterm WHERE id=03';
const SELECT_LONG_FARMER4='SELECT * FROM longterm WHERE id=04';

const SELECT_SHORT_FARMER1='SELECT * FROM shortterm WHERE id=01';
const SELECT_SHORT_FARMER2='SELECT * FROM shortterm WHERE id=02';
const SELECT_SHORT_FARMER3='SELECT * FROM shortterm WHERE id=03';
const SELECT_SHORT_FARMER4='SELECT * FROM shortterm WHERE id=04';

const SELECT_LIVE_FARMER1='SELECT * FROM livestock WHERE id=01';
const SELECT_LIVE_FARMER2='SELECT * FROM livestock WHERE id=02';
const SELECT_LIVE_FARMER3='SELECT * FROM livestock WHERE id=03';
const SELECT_LIVE_FARMER4='SELECT * FROM livestock WHERE id=04';

const SELECT_POULTRY_FARMER1='SELECT * FROM poultry WHERE id=01';
const SELECT_POULTRY_FARMER2='SELECT * FROM poultry WHERE id=02';
const SELECT_POULTRY_FARMER3='SELECT * FROM poultry WHERE id=03';
const SELECT_POULTRY_FARMER4='SELECT * FROM poultry WHERE id=04';


const connection= mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'EmployeeDB'});

connection.connect(err=>{if(err)return err;})
console.log(connection);
app.use(cors());

app.get('/get',(req,res)=>{res.send('i am back');});

app.get('/dget',(req,res)=>{connection.query(SELECT_ALL,(err,results)=>{ if(err){
        return res.send(err)} else {return res.json({
            data:results}) } })});
                
                 /****long term manager */
                app.get('/fsdget',(req,res)=>{connection.query( SELECT_FIRST,(err,results)=>{ if(err){
                return res.send(err)} else {return res.json({
                 data:results}) } })});

                    /**short term manager */

                app.get('/sedget',(req,res)=>{connection.query( SELECT_SECOND,(err,results)=>{ if(err){
                return res.send(err)} else {return res.json({
                    data:results}) } })});
    
                     /****live stock manager */
              app.get('/thdget',(req,res)=>{connection.query( SELECT_THIRD,(err,results)=>{ if(err){
                return res.send(err)} else {return res.json({
                    data:results}) } })});

                      /****poultry manager */
              app.get('/frdget',(req,res)=>{connection.query( SELECT_FOUR,(err,results)=>{ if(err){
                return res.send(err)} else {return res.json({
                    data:results}) } })});
        
                  
                    /****longterm farmer***/
            app.get('/longFarmerdget',(req,res)=>{connection.query( SELECT_LONG_FARMER1,(err,results)=>{ if(err){
            return res.send(err)} else {return res.json({
          data:results}) } })});

           app.get('/longFarmer2dget',(req,res)=>{connection.query( SELECT_LONG_FARMER2,(err,results)=>{ if(err){
            return res.send(err)} else {return res.json({
          data:results}) } })});

         app.get('/longFarmer3dget',(req,res)=>{connection.query( SELECT_LONG_FARMER3,(err,results)=>{ if(err){
            return res.send(err)} else {return res.json({
          data:results}) } })});

           app.get('/longFarmer4dget',(req,res)=>{connection.query( SELECT_LONG_FARMER4,(err,results)=>{ if(err){
            return res.send(err)} else {return res.json({
          data:results}) } })});

     /*****short term farmer **/

     app.get('/shortFarmerdget',(req,res)=>{connection.query( SELECT_SHORT_FARMER1,(err,results)=>{ if(err){
      return res.send(err)} else {return res.json({
    data:results}) } })});

    app.get('/shortFarmer2dget',(req,res)=>{connection.query( SELECT_SHORT_FARMER2,(err,results)=>{ if(err){
      return res.send(err)} else {return res.json({
    data:results}) } })});

    app.get('/shortFarmer3dget',(req,res)=>{connection.query( SELECT_SHORT_FARMER3,(err,results)=>{ if(err){
      return res.send(err)} else {return res.json({
    data:results}) } })});

    app.get('/shortFarmer4dget',(req,res)=>{connection.query( SELECT_SHORT_FARMER4,(err,results)=>{ if(err){
      return res.send(err)} else {return res.json({
    data:results}) } })});
 

      //*******live stock farm */

      app.get('/liveFarmerdget',(req,res)=>{connection.query( SELECT_LIVE_FARMER1,(err,results)=>{ if(err){
      return res.send(err)} else {return res.json({
      data:results}) } })});

       app.get('/liveFarmer2dget',(req,res)=>{connection.query( SELECT_LIVE_FARMER2,(err,results)=>{ if(err){
       return res.send(err)} else {return res.json({
         data:results}) } })});

      app.get('/liveFarmer3dget',(req,res)=>{connection.query( SELECT_LIVE_FARMER3,(err,results)=>{ if(err){
     return res.send(err)} else {return res.json({
      data:results}) } })});

     app.get('/liveFarmer4dget',(req,res)=>{connection.query( SELECT_LIVE_FARMER4,(err,results)=>{ if(err){
     return res.send(err)} else {return res.json({
    data:results}) } })});
  
    /***poultr farm */
       app.get('/poultryFarmerdget',(req,res)=>{connection.query( SELECT_POULTRY_FARMER1,(err,results)=>{ if(err){
      return res.send(err)} else {return res.json({
      data:results}) } })});

        app.get('/poultryFarmer2dget',(req,res)=>{connection.query( SELECT_POULTRY_FARMER2,(err,results)=>{ if(err){
        return res.send(err)} else {return res.json({
        data:results}) } })});

        app.get('/poultryFarmer3dget',(req,res)=>{connection.query( SELECT_POULTRY_FARMER3,(err,results)=>{ if(err){
          return res.send(err)} else {return res.json({
          data:results}) } })});

          app.get('/poultryFarmer4dget',(req,res)=>{connection.query( SELECT_POULTRY_FARMER4,(err,results)=>{ if(err){
            return res.send(err)} else {return res.json({
            data:results}) } })});



            app.get('/owner/add',(req,res)=>{
   const{firstName,lastName}=req.query;
 const INSERT_OWNER_QUERY = `INSER INTO owner(id,name) VALUES('${firstName}',${lastName})`;
 connection.query(INSERT_OWNER_QUERY,(err,results)=>{
     if(err){
         return res.send(err)
     }
     else{
         return res.send('successfully added data')
     }
 });
});

  //*****POST METHOD ****/

  
   app.post('/owner/adding',function(req,res){
        const nwdata ={
          fsname:req.body
        };
        console.log(body);
   });
   

   /*app.post('/owner/adding',function (req,res){
       let task = req.body.task;
       if(!task){
         return res.status(400).send({error:true,message:'please pro'});
          }

      var query=mc.query("INSERT INTO task SET ?",{task:task},function(error,results,fields){
         if(error) throw error;
         console.log(task);
         return res.send({error:false,data:results,message:'new task created'
         });
      });
   });*/


                    
    app.listen(4000,()=>{console.log("server started on 4000")});