import React from 'react';
import styled from 'styled-components';
import { IComment } from '../../organism/postDetail/comment.type';
import styleVariables from '../../styleVariables';

const CommentContainer = styled.div`
  margin: 0 0 40px 0;
`;

const Username = styled.div`
    font-size: 14px;
    color: ${styleVariables.colors.gray600};
`;

interface IProps {
  item: IComment;
}

function CommentItem({ item }: IProps) {
  return (
    <CommentContainer>
      <Username>
        {item.name}
        {' '}
        ($
        {item.email}
        )
      </Username>
      {item.body}
    </CommentContainer>
  );
}

export default CommentItem;
