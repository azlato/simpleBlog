import React from 'react';
import styled from 'styled-components';
import { IUser } from '../../organism/userDetail/user.type';
import Username from '../../atom/username/Username';

const UserContainer = styled.div`
  margin: 36px 0;
`;

interface IProps {
  user: IUser;
}

function UserBio({ user }: IProps) {
  return (
    <UserContainer>
      <Username user={user} />
      <div>{user.website}</div>
    </UserContainer>
  );
}

export default UserBio;
