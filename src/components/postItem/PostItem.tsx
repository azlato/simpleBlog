import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../organism/postList/post.type';

interface IProps {
  item: IPost
}

function PostItem({ item }: IProps) {
  return (
    <div>
      <Link to={`/post/${item.id}`}>
        {item.user?.username}
        {' '}
        :
        {' '}
        {item.title}
      </Link>
    </div>
  );
}

export default PostItem;
