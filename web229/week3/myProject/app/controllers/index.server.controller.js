exports.render = function (req, res) {
    // res.send("WElcome to the world of Express!");
     const date = new Date().toISOString()
    res.render("index",{
      title:`Hello World, Charlie: ${date}`
    })

    // res.send("WElcome to the world of Express!");

  };
  