import express from 'express'


const app = express();
app.use(express.static("public"));
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/info", (req, res) => {
  res.send("Site Info");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
app.get("/process_get", function (req, res) {
    
 var response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  
