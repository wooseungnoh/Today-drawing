export const getPhoto = (req, res) => {};

export const postUploadPhoto = (req, res) => {
  const data = req.file.filename;
  console.log(data)
  res.json(data);
};
