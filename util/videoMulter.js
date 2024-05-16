const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({}),
  limits: {
    fileSize: 50 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => { 
    if (file.mimetype.startsWith('video/')) { 
      req.fileType = 'video'; 
      cb(null, true); 
    } else {
      cb(new Error('Unsupported file type. Only video files are allowed.')); 
    }
  },
});

module.exports = upload;
