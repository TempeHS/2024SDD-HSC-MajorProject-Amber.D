const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('.database/datasource.db');

let myString = '[\n';
db.all("SELECT * FROM sddstudent1", function(err, rows) {
    let myCounter = 0;
    rows.forEach(function (row){
        myString = myString + '{\n "nesaID": '+ row.nesaID + ',\n "name":"'+ row.name + '",\n "age":"'+ row.age; +",\n";
        myCounter++;
        if (myCounter == rows.length){
            myString = myString + '"\n}\n';
        } else  {
            myString = myString + '"\n},\n';
        }
    });
    var fs = require('fs');
    fs.writeFile ("public/frontEndData.json", myString + "]", function (err){
    if (err) {
        console.log(err);
    }
}
);
});

const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "myPWA/public/index.html"));
});
app.listen(8000, () => console.log("testing") );
/*
START 
    GET record
    LET outputString = "[\n"
    LET COUNT = 0 
    COUNT LOOP from 0 to record.length
        outputString = outputString +"{\n"
        outputString = outputString +'"nesaID:"'
        outputString = outputString + record.nesaID(COUNT)
        outputString = outputString + ",\n"
        outputString = outputString +'"name:"'
        outputString = outputString + record.name(COUNT)
        outputString = outputString + ",\n"
        outputString = outputString +'"age:"'
        outputString = outputString + record.age(COUNT)
        outputString = outputString + ",\n"
        outputString = outputString + "]\n"
    COUNT ++
END COUNT 
END


*/
