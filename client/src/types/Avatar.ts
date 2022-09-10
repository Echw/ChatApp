export type Avatar = {
  body: 'chest' | 'breasts';
  clothing: 'naked' | 'shirt' | 'dressShirt' | 'vneck' | 'tankTop' | 'dress';
  clothingColor: 'white' | 'blue' | 'black' | 'green' | 'red';
  eyes:
    | 'normal'
    | 'leftTwitch'
    | 'happy'
    | 'content'
    | 'squint'
    | 'simple'
    | 'dizzy'
    | 'wink'
    | 'heart';
  facialHair: 'none' | 'stubble' | 'mediumBeard';
  hair:
    | 'none'
    | 'long'
    | 'bun'
    | 'short'
    | 'pixie'
    | 'balding'
    | 'buzz'
    | 'afro'
    | 'bob';
  hairColor:
    | 'blonde'
    | 'orange'
    | 'black'
    | 'white'
    | 'brown'
    | 'blue'
    | 'pink';
  mouth: 'grin' | 'sad' | 'openSmile' | 'lips' | 'open' | 'serious' | 'tongue';
  skinTone: 'light' | 'yellow' | 'brown' | 'dark' | 'red' | 'black';
};
