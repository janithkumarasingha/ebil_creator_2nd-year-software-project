import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "203010@#NAmaths",
   database: "projectwork"
})

//if there is any authentication problem 
// ALTER USER 'root'@'3306' IDENTIFIED WITH mysql_native_password BY '203010@#NAmaths';

app.use(express.json())
app.use(cors())
//app.use(express.static(path.join(__dirname,'static')));



app.get("/", (req, res) => {
   res.json("hello this is the backend")

})
app.get("/salesrep", (req, res) => {
   const q = "SELECT * FROM sales_rep"
   db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);

   })

})



app.post("/add", (req, res) => {
   const q = "INSERT * FROM sales_rep"
   db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
   })
})

app.get("/stock",(req,res)=>{
   const p="SELECT * FROM stock"
   db.query(p,(err,data)=>{
      if(err)return res.json(err);
      return res.json(data);
   })
})

app.get("/user", (req, res) => {
   const r = "SELECT * FROM userpw "
   db.query(r, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);

   })

})

app.post("/userreg", (req, res) => {


   const r = "INSERT INTO `projectwork`.`userpw` (`userid`, `password`) VALUES (?,?);"

   const values = [
      req.body.userid,
      req.body.password
     
   ];
   db.query(r, values, (err, data) => {
      if (err) {
         return res.json(err)
         return res.json("usernamepassword values has been created successfully");
      }else {
         res.send ({message :"No user found"})
      }
     
     
   })
})


app.post("/stock", (req, res) => {
   const p = "INSERT INTO `projectwork`.`stock` (`stockID`, `qty`, `productname`, `name`, `price`, `manufacturedate`, `expirydate`, `discount`) VALUES (?,?,?,?,?,?,?,?);"

   const values = [
      req.body.stockID,
      req.body.qty,
      req.body.productname,
      req.body.name,
      req.body.price,
      req.body.manufacturedate,
      req.body.expirydate,
      req.body.discount
   ];
   db.query(p, values, (err, data) => {
      if (err) return res.json(err)
      return res.json("stock values has been created successfully");
   })
})





app.post("/salesrep", (req, res) => {
   const q = "INSERT INTO `projectwork`.`sales_rep` (`RID`, `NIC`, `registrationdate`, `fullname`, `password`, `email`, `phoneNo`, `type`, `address`) VALUES (?,?,?,?,?,?,?,?,?);"

   const values = [
      req.body.rid,
      req.body.nic,
      req.body.registrationdate,
      req.body.fullname,
      req.body.password,
      req.body.email,
      req.body.phoneNo,
      req.body.type,
      req.body.address
   ];

   // console.log(values);
   db.query(q, values, (err, data) => {
      if (err) return res.json(err)
      return res.json("salesrep values has been created successfully");
   })
})



app.listen(8800, () => {
   console.log("Connected to backend !1")

})


