var multer = require("multer");
var express = require('express');
var router = express.Router();
var {FileEntity}=require("../model/File");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({storage: storage});

router.get('/',async(req,res)=>{
    try {
        const files = await FileEntity.find();
        res.status(200).send(files);
    }catch (e) {
        res.status(500).send(e)
    }
})
router.post("/", upload.single("file"), async(req, res) => {

    try {
        const {date,fileName} = req.body;
        const newFile = new FileEntity({
            fileName: fileName,
            date:date,
        });

        const savedFile = await newFile.save();

        res.status(200).json(savedFile);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});
module.exports = router;
