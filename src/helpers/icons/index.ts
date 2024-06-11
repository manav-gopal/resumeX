import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaHackerrank } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { SiHackerearth } from 'react-icons/si';
import { SiLeetcode } from 'react-icons/si';

export const socialIcons = new Map([
  ['linkedin', AiFillLinkedin],
  ['github', AiFillGithub],
  ['twitter', AiOutlineTwitter],
  ['hackerrank', FaHackerrank],
  ['hackerearth', SiHackerearth],
  ['codechef', SiCodechef],
  ['leetcode', SiLeetcode],
]);

import a from 'public/icons/graphicals/a.png';
import b from 'public/icons/graphicals/b.png';
import c from 'public/icons/graphicals/c.png';
import d from 'public/icons/graphicals/d.png';
import e from 'public/icons/graphicals/e.png';
import f from 'public/icons/graphicals/f.png';
export const graphicalIcons = () => {
  const graphicals = {
    a: a.src,
    b: b.src,
    c: c.src,
    d: d.src,
    e: e.src,
    f: f.src,
  };
  return graphicals;
};
