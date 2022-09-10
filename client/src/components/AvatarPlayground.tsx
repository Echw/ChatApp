import React from 'react';
import styled from 'styled-components';
import Combobox from 'react-widgets/Combobox';
import 'react-widgets/styles.css';
import UserAvatar from './UserAvatar';
import { Avatar } from '../types/Avatar';

interface AvatarPlaygroundProps {
  avatar: Avatar;
  onChangeAvatar: (part: string, value: string) => void;
}

const AvatarPlayground = (props: AvatarPlaygroundProps) => {
  return (
    <Wrapper>
      <Styles>
        <EditWrapper>
          <p>Body</p>
          <div>
            <Combobox
              value={props.avatar.body}
              data={['chest', 'breasts']}
              onChange={(value: string) => props.onChangeAvatar('body', value)}
            />
          </div>
        </EditWrapper>
        <EditWrapper>
          <p>Skin Tone</p>
          <div>
            <Combobox
              value={props.avatar.skinTone}
              data={['light', 'yellow', 'brown', 'dark', 'red', 'black']}
              onChange={(value: string) =>
                props.onChangeAvatar('skinTone', value)
              }
            />
          </div>
        </EditWrapper>
        <EditWrapper>
          <p>Hair</p>
          <div>
            <Combobox
              value={props.avatar.hair}
              data={[
                'none',
                'long',
                'bun',
                'short',
                'pixie',
                'balding',
                'buzz',
                'afro',
                'bob',
              ]}
              onChange={(value: string) => props.onChangeAvatar('hair', value)}
            />
          </div>
        </EditWrapper>
        <EditWrapper>
          <p>Hair Color</p>
          <div>
            <Combobox
              value={props.avatar.hairColor}
              data={[
                'blonde',
                'orange',
                'black',
                'white',
                'brown',
                'blue',
                'pink',
              ]}
              onChange={(value: string) =>
                props.onChangeAvatar('hairColor', value)
              }
            />
          </div>
        </EditWrapper>
        <EditWrapper>
          <p>Clothing</p>
          <div>
            <Combobox
              value={props.avatar.clothing}
              data={[
                'naked',
                'shirt',
                'dressShirt',
                'vneck',
                'tankTop',
                'dress',
              ]}
              onChange={(value: string) =>
                props.onChangeAvatar('clothing', value)
              }
            />
          </div>
        </EditWrapper>
        <EditWrapper>
          <p>Clothing Color</p>
          <div>
            <Combobox
              value={props.avatar.clothingColor}
              data={['white', 'blue', 'black', 'green', 'red']}
              onChange={(value: string) =>
                props.onChangeAvatar('clothingColor', value)
              }
            />
          </div>
        </EditWrapper>
        <EditWrapper>
          <p>Facial Hair</p>
          <div>
            <Combobox
              value={props.avatar.facialHair}
              data={['none', 'stubble', 'mediumBeard']}
              onChange={(value: string) =>
                props.onChangeAvatar('facialHair', value)
              }
            />
          </div>
        </EditWrapper>
        <EditWrapper>
          <p>Eyes</p>
          <div>
            <Combobox
              value={props.avatar.eyes}
              data={[
                'normal',
                'leftTwitch',
                'happy',
                'content',
                'squint',
                'simple',
                'dizzy',
                'wink',
                'heart',
              ]}
              onChange={(value: string) => props.onChangeAvatar('eyes', value)}
            />
          </div>
        </EditWrapper>
        <EditWrapper>
          <p>Mouth</p>
          <div>
            <Combobox
              value={props.avatar.mouth}
              data={[
                'grin',
                'sad',
                'openSmile',
                'lips',
                'open',
                'serious',
                'tongue',
              ]}
              onChange={(value: string) => props.onChangeAvatar('mouth', value)}
            />
          </div>
        </EditWrapper>
      </Styles>
      <BigHeadWrapper avatar={props.avatar} />
    </Wrapper>
  );
};

export default AvatarPlayground;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #828282;
`;
const Styles = styled.div`
  display: flex;
  flex-direction: column;
  color: #828282;
`;
const EditWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-end;
`;

const BigHeadWrapper = styled(UserAvatar)`
  width: 30rem;
`;
