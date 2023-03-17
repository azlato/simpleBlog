import React from 'react';
import styled from 'styled-components';
import { IUser } from '../../organism/userDetail/user.type';
import styleVariables from '../../styleVariables';

const Username = styled.h1`
    margin-bottom: 8px;

    font-size: 18px;
`;

const SubItem = styled.p`
    margin-bottom: 4px;

    font-size: 16px;
    color: ${styleVariables.colors.gray600};
`;

const ContactLink = styled.a`
    color: ${styleVariables.colors.gray600};

    &:focus, &:hover {
        color: ${styleVariables.colors.black};
    }
`;

interface IProps {
  user: IUser;
}

function UserBio({ user }: IProps) {
  return (
    <section>
      <Username>{user.name}</Username>
      <SubItem>
        🌍 Website:
        {' '}
        <ContactLink href={`//${user.website}`}>{user.website}</ContactLink>
      </SubItem>
      <SubItem>
        📞 Phone:
        {' '}
        <ContactLink href={`tel:${user.phone}`}>{user.phone}</ContactLink>
      </SubItem>
    </section>
  );
}

export default UserBio;
