import Post from '../model/Post';
import User from '../model/User';
import Word from '../model/Word';
import { basicWordList } from '../wordList';

class DateConstructor {
  constructor(model) {
    this.model = model;
  }
  //지난달의 인덱스 넘버를 반환함
  previousMonthIndexNumber() {
    const date = new Date();
    const index = this.model.findIndex(
      (i) => i.name === `${date.getMonth()}월`,
    );
    return index;
  }

  //이번달의 인덱스 넘버를 반환함
  thisMonthIndexnumber() {
    const date = new Date();
    const index = this.model.findIndex(
      (i) => i.name === `${date.getMonth() + 1}월`,
    );
    return index;
  }

  //어제의 단어를 반환함
  yesterdayWord() {
    const date = new Date();
    const index = this.model.findIndex(
      (i) => i.name === `${date.getMonth() + 1}월`,
    );
    return this.model[index].wordListArray[date.getDate() - 2];
  }

  //오늘의 단어를 반환함
  todayWord() {
    const date = new Date();
    const index = this.model.findIndex(
      (i) => i.name === `${date.getMonth() + 1}월`,
    );
    return this.model[index].wordListArray[date.getDate() - 1];
  }
}

//업로드 화면에서 이미지 추가시 미리보기 이미지의 URL을 반환함
export const uploadPhoto = (req, res) => {
  res.json(req.file.location);
};

//포스트를 업로드함
export const uploadPost = async (req, res) => {
  const {
    body: { title, description, imagePaths, word },
  } = req;

  const newPost = await Post.create({
    fileUrl: imagePaths[0],
    title,
    description,
    creator: req.user.id,
    subject: word,
  });

  try {
    const post = await Post.findById(newPost.id).populate('creator');
    res.send(post);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};

//오늘의 포스트를 불러옴
export const loadedPostList = async (req, res) => {
  try {
    const wordData = await Word.find({});
    const dateConstructor = new DateConstructor(wordData);
    const post = await Post.find({
      subject: dateConstructor.todayWord(),
    }).sort({ _id: -1 });
    const todayPostList = {
      postList: post,
      todayWord: dateConstructor.todayWord(),
    };
    res.json(todayPostList);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};

//선택된 주제의 포스트를 불러옴
export const loadedSelectedPostList = async (req, res) => {
  const { word } = req.body;
  try {
    const post = await Post.find({ subject: word }).sort({ _id: -1 });
    const postAndWodr = {
      postList: post,
      selectedWord: word,
    };
    res.json(postAndWodr);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};

//포스트의 세부사항을 전달함
export const loadedPostDetail = async (req, res) => {
  const {
    body: { postId },
    user,
  } = req;
  try {
    const post = await Post.findById(postId).populate('creator');
    if (user) {
      const data = {
        post,
        user,
      };
      res.json(data);
    } else {
      const data = {
        post,
        user: '',
      };
      res.json(data);
    }
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};

//포스트 수정
export const editPost = async (req, res) => {
  const { id, title, description } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(id, {
      title,
      description,
    });
    res.send('수정완료');
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};

//포스트 삭제
export const deletePost = async (req, res) => {
  const { id } = req.body;
  try {
    await Post.findByIdAndRemove({ _id: id });
    const PostList = await Post.find({}).populate('creator').sort({ _id: -1 });
    res.json(PostList);
  } catch (e) {
    console.log(e);
  }
  return;
};

//좋아요
export const like = async (req, res) => {
  const {
    body: { id },
    user,
  } = req;
  try {
    const post = await Post.findById(id).populate('creator');
    const users = await User.findById(user._id);
    post.liker.push(req.user._id);
    users.likeList.push(id);
    users.save();
    post.save();

    if (user) {
      const data = {
        post,
        user,
      };
      res.json(data);
    } else {
      const data = {
        post,
        user: '',
      };
      res.json(data);
    }
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};

//좋아요 취소
export const unlike = async (req, res) => {
  const {
    body: { id },
    user,
  } = req;
  try {
    const post = await Post.findById(id).populate('creator');
    const users = await User.findById(user._id);
    users.likeList.pull(id);
    post.liker.pull(user._id);
    users.save();
    post.save();

    if (user) {
      const data = {
        post,
        user,
      };
      res.json(data);
    } else {
      const data = {
        post,
        user: '',
      };
      res.json(data);
    }
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

//단어 불러오기
export const loadWord = async (req, res) => {
  const date = new Date();
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let wordArray = [];
  const lastDay = lastDate.getDate();
  const wordLength = basicWordList.length;
  try {
    const wordData = await Word.find({});
    const dateConstructor = new DateConstructor(wordData);
    const prevMonthOldWord =
      wordData[dateConstructor.previousMonthIndexNumber()].oldWordList;

    if (date.getDate() === 1 && dateConstructor.thisMonthIndexnumber() === -1) {
      //1일마다 새로운 배열생성
      for (let i = 0; i < lastDay; i++) {
        const worditem = basicWordList[Math.floor(Math.random() * wordLength)];
        wordArray.push(worditem);
      }
      const wordData = await Word.create({
        name: String(`${date.getMonth() + 1}월`),
        wordListArray: wordArray,
        oldWordList: [...prevMonthOldWord],
      });

      res.json(wordData.wordListArray[date.getDate() - 1]);
    } else {
      //오늘의 단어를 리턴하는 부분

      //어제의 단어가 oldWordList 에 포함되었는지 확인용
      const findindex = wordData[
        dateConstructor.thisMonthIndexnumber()
      ].oldWordList.includes(dateConstructor.yesterdayWord());

      //민약 어제의 단어가 리스트에 없다면 추가하는 부분
      if (!findindex) {
        wordData[dateConstructor.thisMonthIndexnumber()].oldWordList.push(
          dateConstructor.yesterdayWord(),
        );
      }

      //oldList 정렬
      const sortOldWordList = wordData[
        dateConstructor.thisMonthIndexnumber()
      ].oldWordList.reverse();
      wordData[dateConstructor.thisMonthIndexnumber()].save();

      //프론트로 반환
      res.json({
        word: dateConstructor.todayWord(),
        oldWordList: sortOldWordList,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
  // const day = String(date).split(' ')[2];
  // res.json(wordList[Number(day)]);
};

//단어 추가하기
export const addWord = async (req, res) => {
  const { wordName } = req.body;
  const date = new Date();
  try {
    const wordData = await Word.find({});
    const dateConstructor = new DateConstructor(wordData);
    wordData[dateConstructor.thisMonthIndexnumber()].wordListArray.splice(
      Math.floor(
        Math.random() *
          (wordData[dateConstructor.thisMonthIndexnumber()].wordListArray
            .length -
            (date.getDate() + 1)) +
          (date.getDate() + 1),
      ),
      0,
      wordName,
    );
    wordData[dateConstructor.thisMonthIndexnumber()].save();
    res.send('추가성공');
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};
