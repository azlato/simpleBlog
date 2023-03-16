import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Username from '../../atom/username/Username';
import { IPost } from '../../organism/postList/post.type';
import styleVariables from '../../styleVariables';

const PostContainer = styled.div`
  margin: 36px 0;
`;

const PostTitle = styled.h1`
  font-weight: ${styleVariables.fontWeight[500]};
  font-size: 22px;
`;

const PostDescription = styled.p`
  color: ${styleVariables.colors.gray400};

  ${({ isTruncated }: { isTruncated?: boolean }) => isTruncated && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

const PostLink = styled(Link)`
  color: ${styleVariables.colors.black};

  &:focus, &:hover {
    color: ${styleVariables.colors.gray400};
    text-decoration: underline;
  }
`;

interface IProps {
  item: IPost;
  isTruncated?: boolean;
}

function PostItem({ item, isTruncated }: IProps) {
  return (
    <PostContainer>
      {item.user && <Username user={item.user} />}
      <PostLink to={`/post/${item.id}`}>
        <PostTitle>{item.title}</PostTitle>
      </PostLink>
      <PostDescription isTruncated={isTruncated}>{item.body}</PostDescription>
    </PostContainer>
  );
}

PostItem.defaultProps = {
  isTruncated: false,
};

export default PostItem;
