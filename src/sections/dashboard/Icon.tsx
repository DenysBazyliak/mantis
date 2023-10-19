import {
  AiOutlineEye,
  AiOutlineFieldTime,
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlineWarning,
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineFilter,
  AiOutlineCreditCard,
  AiOutlineCalendar,
  AiOutlineLogout,
  AiOutlineQuestionCircle
} from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import { SlCallEnd } from 'react-icons/sl';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import { FiTarget } from 'react-icons/fi';

type IconProps = {
  iconName: keyof Icons;
  rotate: boolean;
  iconSize: number;
  iconColor: string;
};

export type Icons = {
  callEnd: React.ReactNode;
  outlineMessage: React.ReactNode;
  outlineMail: React.ReactNode;
  outlineFieldTime: React.ReactNode;
  outlineDone: React.ReactNode;
  outlineEye: React.ReactNode;
  outlineWarning: React.ReactNode;
  outlineClockCircle: React.ReactNode;
  outlineStar: React.ReactNode;
  outlineFilter: React.ReactNode;
  outlineCreditCard: React.ReactNode;
  outlineCalendar: React.ReactNode;
  dotsThreeVerticalBold: React.ReactNode;
  outlineLogout: React.ReactNode;
  outlineQuestionCircle: React.ReactNode;
  target: React.ReactNode;
};

export const Icon = ({ iconName, rotate, iconSize, iconColor }: IconProps) => {
  const iconStyle = {
    fontSize: iconSize + 'px',
    transform: rotate ? 'scaleX(-1)scaleY(-1)' : 'scaleX(1)scaleY(1)',
    height: '100%',
    color: iconColor
  };
  const iconMap: Icons = {
    outlineFieldTime: <AiOutlineFieldTime style={iconStyle} />,
    outlineDone: <MdOutlineDone style={iconStyle} />,
    outlineEye: <AiOutlineEye style={iconStyle} />,
    outlineWarning: <AiOutlineWarning style={iconStyle} />,
    callEnd: <SlCallEnd style={iconStyle} />,
    outlineMessage: <AiOutlineMessage style={iconStyle} />,
    outlineMail: <AiOutlineMail style={iconStyle} />,
    outlineClockCircle: <AiOutlineClockCircle style={iconStyle} />,
    outlineStar: <AiOutlineStar style={iconStyle} />,
    outlineFilter: <AiOutlineFilter style={iconStyle} />,
    outlineCreditCard: <AiOutlineCreditCard style={iconStyle} />,
    outlineCalendar: <AiOutlineCalendar style={iconStyle} />,
    dotsThreeVerticalBold: <PiDotsThreeVerticalBold style={iconStyle} />,
    outlineLogout: <AiOutlineLogout style={iconStyle} />,
    outlineQuestionCircle: <AiOutlineQuestionCircle style={iconStyle} />,
    target: <FiTarget style={iconStyle} />
  };
  return iconName ? <>{iconMap[iconName]}</> : null;
};
