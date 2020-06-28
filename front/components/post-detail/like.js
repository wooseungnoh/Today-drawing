import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LIKE_REQUEST, UNLIKE_REQUEST, LIKE_ON } from '../../reducers/drawing';

const Like = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { nowShowingPost } = useSelector((state) => state.drawing);

  const likeRequest = () => {
    dispatch({
      type: LIKE_REQUEST,
      data: {
        id: nowShowingPost.post._id,
      },
    });
    dispatch({
      type: LIKE_ON,
    });
  };

  const unlikeRequest = () => {
    dispatch({
      type: UNLIKE_REQUEST,
      data: {
        id: nowShowingPost.post._id,
      },
    });
  };

  const printLike = () => {
    if (nowShowingPost && me) {
      return String(nowShowingPost.post.liker.indexOf(me._id)) === '-1' ? (
        <div onClick={likeRequest} style={{background:'url(../../static/heart-regular.svg)', width:'20px', height:'20px'}}></div>
      ) : (
        <div onClick={unlikeRequest} style={{background:'url(../../static/heart-solid.svg)', width:'20px', height:'20px'}}></div>
        );
    }else{
      return <></>;
    }
  };

  return printLike();
};

export default Like;
