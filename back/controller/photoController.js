export const getPhoto = (req, res) => { };

export const postUploadPhoto = (req, res) => {
  console.log(req.file)
  res.json(req.file.filename)
};