const router = require("express").Router();
const db = require("../models")

router.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});


router.get("/api/post", (req, res) => {
    db.Post.find({}).then(function (dbPost) {
        res.json(dbPost);
    }).catch(function (err) {
        res.json(err);
    });
});

// adds a new post
router.post("/api/post", (req, res) => {
    db.Post.create(req.body).then(function (dbPost) {
        res.json(dbPost)
    }).catch(function (err) {
        res.json(err)
    })
})

module.exports = router;

// ajax call to route on front end
// axios
// make sure all things required are in model and spelled the same
// received in req.body