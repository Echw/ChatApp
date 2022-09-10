import React from 'react';
import styled from 'styled-components';
import { BigHead } from '@bigheads/core';
import { Avatar } from '../types/Avatar';

interface UserAvatarProps {
  avatar: Avatar;
  className?: string;
}

const UserAvatar = (props: UserAvatarProps) => {
  return (
    <BigHeadWrapper className={props.className}>
      <BigHead
        accessory="none"
        body={props.avatar.body}
        circleColor="blue"
        clothing={props.avatar.clothing}
        clothingColor={props.avatar.clothingColor}
        eyebrows="angry"
        eyes={props.avatar.eyes}
        facialHair={props.avatar.facialHair}
        graphic="react"
        hair={props.avatar.hair}
        hairColor={props.avatar.hairColor}
        hat="none"
        hatColor="green"
        lashes={false}
        lipColor="red"
        mask={true}
        mouth={props.avatar.mouth}
        skinTone={props.avatar.skinTone}
        faceMask={false}
        faceMaskColor="black"
      />
    </BigHeadWrapper>
  );
};

export default UserAvatar;

const BigHeadWrapper = styled.div`
  width: 100%;
`;
