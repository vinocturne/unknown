import Image from 'next/image';
import { avatarStyle } from './Avatar.style';

interface AvatarProps {
  src?: string;
  height?: number;
  width?: number;
  isCircle?: boolean;
}

export default function Avatar({ src, height, width, isCircle = false }: AvatarProps) {
  const style = avatarStyle({ isCircle });
  return (
    <div className={style.root}>
      <Image
        className={style.image}
        src={src ?? 'https://picsum.photos/50/50'}
        alt={'avatar'}
        width={width}
        height={height}
      />
    </div>
  );
}
