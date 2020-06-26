import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/Router';
import Container, { GalleryContainer } from '../components/styled/container';
import Text from '../components/styled/text';
import { Button } from '../components/styled/uiComponent';
import { EDITING_PROFILE_ON, LOAD_LIKELIST_REQUEST } from '../reducers/user';
import EditProfile from '../components/editProfile';
import PhotoView from '../components/photoView';

const Mypage = () => {
  const { me, isLoggedIn, likeList } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch({
      type: LOAD_LIKELIST_REQUEST,
    });
  }, []);

  const editProfile = (e) => {
    e.preventDefault();
    dispatch({
      type: EDITING_PROFILE_ON,
    });
  };

  return (
    <>
      <EditProfile />
      <Container flexDirection="column">
        <h3>마이페이지</h3>
        <Button onClick={editProfile}>Edit Profile</Button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            textAlign: 'left',
          }}
        >
          <Text fontSize="medium" style={{ marginBottom: '8px' }}>
            작가
          </Text>
          <Text fontSize="big" bold>
            {me ? me.writer : ''}
          </Text>
          <br />
          <Text fontSize="medium" style={{ marginBottom: '8px' }}>
            작가 소개
          </Text>
          <Text fontSize="big" bold>
            {me ? me.userInfo : ''}
          </Text>
        </div>
        <h2>좋아하는 그림</h2>
        <GalleryContainer mypage>
          {likeList ? (
            likeList.map((item, id) => (
              <Link key={id} href="/p/[imgDetail]" as={`/p/${item._id}`}>
                <a>
                  <PhotoView creater={item.title} url={`${item.fileUrl}`} />
                </a>
              </Link>
            ))
          ) : (
            <></>
          )}
        </GalleryContainer>
      </Container>
    </>
  );
};

export default Mypage;
