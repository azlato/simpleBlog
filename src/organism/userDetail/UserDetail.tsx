import React from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from './user.type';
import useData from '../../hooks/useData';
import UserBio from '../../molecule/userBio/UserBio';
import CardContainer from '../../templates/CardContainer';

function UserDetail() {
  const { userId } = useParams();
  const [user] = useData<IUser>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  return (
    <CardContainer>
      {user
            && <UserBio user={user} />}
    </CardContainer>
  );
}

export default UserDetail;
