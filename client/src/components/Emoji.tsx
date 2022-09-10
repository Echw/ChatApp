import React from 'react';
import Picker, { IEmojiData } from 'emoji-picker-react';
import styled from 'styled-components';

interface EmojiProps {
  onEmojiClick: (
    event: React.MouseEvent<Element, MouseEvent>,
    data: IEmojiData
  ) => void;
}

const Emoji = (props: EmojiProps) => {
  return (
    <Wrapper>
      <Picker onEmojiClick={props.onEmojiClick} />
    </Wrapper>
  );
};

export default Emoji;

const Wrapper = styled.div`
  position: fixed;
  bottom: 6rem;
`;
