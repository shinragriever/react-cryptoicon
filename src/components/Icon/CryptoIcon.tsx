import React, { SVGProps } from 'react';
import { ZilIcon } from '../Svg';

export interface IIconProps {
  name: string;
  props?: SVGProps<SVGSVGElement>;
}

const CryptoIcon: React.FC = ({ name, props }: IIconProps) => {
  const getIcon = (name: string, props?: SVGProps<SVGSVGElement>): SVGSVGElement | null => {
    const Icons = {
      zilliqa: <ZilIcon {...props} />,
      ZilIcon: <ZilIcon {...props} />
    };

    return Icons[name];
  };

  return <>{getIcon(name, props)}</>;
};

export default CryptoIcon;
