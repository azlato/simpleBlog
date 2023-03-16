import React from 'react';
import styled from 'styled-components';
import CommentItem from '../commentItem/CommentItem';
import CardContainer from '../../templates/CardContainer';
import { IComment } from '../../organism/postDetail/comment.type';
import styleVariables from '../../styleVariables';

const Head2 = styled.h2`
  margin: 10px 10px 18px;
  border-bottom: 1px solid ${styleVariables.colors.gray200};
  padding: 16px;

  font-size: 20px;
  font-weight: ${styleVariables.fontWeight[500]};
`;

interface IProps {
  comments: IComment[];
}

function CommentsList({ comments }: IProps) {
  return (
    <CardContainer>
      <Head2>Comments</Head2>
      {comments?.map((item) => (
        <CommentItem key={item.id} item={item} />
      ))}
    </CardContainer>
  );
}

export default CommentsList;
