const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      if(file.mimetype.startsWith('image/')){
        req.fileType='image'
      }else{
        req.fileType='video'
      }
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type'));
    }
  },
});

module.exports = upload;
