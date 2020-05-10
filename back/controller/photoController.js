import Photo from '../model/Photo';

export const getPhoto = (req, res) => {};

export const postUploadPhoto = (req, res) => {
  res.json(req.file.filename);
};

export const postUploadPost = async (req, res) => {
  const {
    body: { title, description, imagePaths },
  } = req;

  const newPost = await Photo.create({
    fileUrl: imagePaths[0],
    title,
    description,
    creator: req.user.id,
  });

  try {
    const post = await Photo.findById(newPost.id).populate('creator');
    res.send(post);
  } catch (e) {
    console.log(e);
    res.send('포스트 업데이트 실패');
  }
  return;
};

export const loadedPostList = async (req, res) => {
  try {
    const post = await Photo.find({}).sort({ _id: -1 });
    res.json(post);
  } catch (e) {
    console.log(e);
  }
  res.send('로딩');
};
