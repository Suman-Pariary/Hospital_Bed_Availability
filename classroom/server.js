// const express = require("express");
// const app = express();
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const flash = require("connect-flash");
// const path = require("path");

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));



// const sessionOptions = {
//     secret: "mysupersecretstring",
//     resave: false,
//     saveUninitialized: true,
// };
// app.use(session(sessionOptions));
// app.use(flash());

// app.get("/register", (req, res) => {
//     let { name = "anonymous" } = req.query;
//     req.session.name = name;
//     req.flash("success","user registered successfully")
//     res.redirect("/hello");
// });

// app.get("/hello", (req, res) => {
//     res.render("page.ejs", {name: req.session.name, msg: req.flash("success")});
// });



// app.listen(8000, () => {
//     console.log("server is listening to 8000")
// });