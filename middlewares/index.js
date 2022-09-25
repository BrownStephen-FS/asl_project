const util = require("util");
const path = require("path");

const { Image } = require("../models");

const uploadImage = async (req, res, next) => {
  let uploadPath = `${__dirname}/../public/images/%s%s`;

  if (!req.imageId) {
    return;
  }

  if (Object.keys(req.files).length > 0) {
    uploadPath = util.format(uploadPath, req.imageId);

    return await req.files.image
      .mv(uploadPath)
      .then(
        async () => await Image.update({ where: { id: Number(req.imageId) } })
      );
  }
};

module.exports = { uploadImage };
