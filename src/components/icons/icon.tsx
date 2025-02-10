import React from 'react';
import { IconAppStore } from "./appstore";
import { IconBookmark } from "./bookmark";
import { IconMedium } from './medium';
import { IconExternal } from "./external";
import { IconFolder } from "./folder";
import { IconFork } from "./fork";
import { IconGitHub } from "./github";
import { IconInstagram } from "./instagram";
import { IconLinkedin } from './linkedIn';
import { IconLoader } from './iconloader';
import { IconLogo } from "./logo";
import { IconPlayStore } from "./playstore";
import { IconStar } from './start';
import { IconTwitter } from "./twitter";

// Define the type for the `name` prop
export type IconName =
  | 'AppStore'
  | 'Bookmark'
  | 'Medium'
  | 'External'
  | 'Folder'
  | 'Fork'
  | 'GitHub'
  | 'Instagram'
  | 'Linkedin'
  | 'Loader'
  | 'Logo'
  | 'PlayStore'
  | 'Star'
  | 'Twitter';

interface IconProps {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Medium':
      return <IconMedium />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
