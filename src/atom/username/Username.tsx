import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IUser } from '../../organism/userDetail/user.type';
import styleVariables from '../../styleVariables';

const UserLink = styled(Link)`
  margin-bottom: 2px;

  font-size: 14px;
  color: ${styleVariables.colors.gray600};

  &:focus, &:hover {
    color: ${styleVariables.colors.black};
  }
`;

interface IProps {
  user: IUser;
}

function Username({ user }: IProps) {
  return (
    <UserLink to={`/user/${user.id}`}>{user.username}</UserLink>
  );
}

export default Username;
