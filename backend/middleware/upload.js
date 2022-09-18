const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
require('dotenv').config()

const storage = new GridFsStorage({
    url: process.env.DB_CONNECTION,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1)
        {
            return `${Date.now()}-julia-${file.originalname}`;
        }
        console.log('store');
        return {
            bucketName: 'posts',
            filename: `${Date.now()}-julia-${file.originalname}`,
            request: req
        };
    },
});

console.log('store', storage)
module.exports = multer({ storage });