const express = require("express");
const router = express.Router();


const Post = require("../model/Post");


// Get all the posts

router.get("/", async (req, res) => {
    res.send("I'm inside the posts");
    try {
        // find() -> get all the posts
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err})
    }
});

// get a specific post
router.get("/:postId", async (req, res) => {
    try {
        // find() -> get all the posts
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err})
    }
})


// update the specific  post

router.patch("/:postId", async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                },
            })

        res.json(updatedPost);
    }  catch(err) {

    }
})


// delete a posts

router.delete("/:postId",async (req, res) => {
    try {
        const removePost = await Post.remove(
            {_id: req.params.postId});
            res.json(removePost);
    } catch(err) {
        res.json({message: err}); 
    }
  
})

// save a post 

router.post("/", async (req, res) => {
    // res.send("post is working");
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    })

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err})
    }

    // post.save().then(data=>{
    //     res.json(data);
    // }).catch(err =>{
    //     res.json({message: err})
    // })

});







  module.exports = router;