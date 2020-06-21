import User from '../model/User';

export const secession = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const user = await User.findByIdAndRemove(id);
    const userList = await User.find({});
    res.json(userList);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};
