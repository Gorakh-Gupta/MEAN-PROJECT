const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()
const postsRoutes = require("./routes/posts");

const app = express();

mongoose
.connect("mongodb+srv://gorakhgupta852:" + process.env.MONGO_ATLAS_PW + "@cluster0.t3goq4i.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(() => {
        console.log("connection Failed");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers',
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST,PUT,DELETE,PATCH,OPTIONS"
    );
    next();
});

// app.post("/api/posts", (req, res, next) => {
//     const post = new Post({
//         title: req.body.title,
//         content: req.body.content
//     });
//     post.save().then((createdPost) => {
//         res.status(201).json({
//             message: "successfully posted",
//             postId:createdPost._id
//         });
//     });

// });

// app.get('/api/posts', (req, res, next) => {
//     Post.find()
//         .then(documents => {
//             res.status(200).json({
//                 mesage: "posts has successfully send",
//                 posts: documents
//             });

//         });
// });

// app.delete('/api/posts:id', (req, res, next) => {
//     Post.deleteOne({ _id: req.params.id }).then((result) => {
//         console.log(result);
//         res.status(200).json({
//             mesage: "deleted successfully",
//         });
//     })
// });

app.use("/api/posts", postsRoutes);

module.exports = app;
