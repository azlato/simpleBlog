import React from 'react';
import styled from 'styled-components';
import { IComment } from '../../organism/postDetail/comment.type';
import styleVariables from '../../styleVariables';

const CommentContainer = styled.div`
  position: relative;
  margin: 0 0 40px 0;
  padding-left: 6px;

  &:last-child {
    margin: 0;
  }

  &:before {
    position: absolute;
    left: -6px;

    content: '"';
    color: ${styleVariables.colors.gray300};
  }
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
