import React from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from './user.type';
import useData from '../../hooks/useData';
import UserBio from '../../molecule/userBio/UserBio';
import CardContainer from '../../templates/CardContainer';
import PostPlaceholder from '../../atom/postPlaceholder/PostPlaceholder';
import Head1 from '../../atom/head/Head1';

function UserDetail() {
  const { userId } = useParams();
  const [user] = useData<IUser>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  return (
    <CardContainer>
      <Head1>User detail</Head1>
      {user
        ? <UserBio user={user} />
        : <PostPlaceholder />}
    </CardContainer>
  );
}

export default UserDetail;
