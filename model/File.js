var mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    }
});
const File = mongoose.model("Event", fileSchema);
exports.FileEntity = File;
