import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <FontAwesomeIcon icon={faHeart} color="#707070" onClick={likeRequest} />
      ) : (
          <FontAwesomeIcon icon={fullHeart} color="#ff5959" onClick={unlikeRequest} />
        );
    }else{
      return <></>;
    }
  };

  return printLike();
};

export default Like;
