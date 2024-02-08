import { chipStyle } from './Chip.style';

interface ChipProps {
  isClickable?: boolean;
  data?: { label?: string; value?: string };
  onClick?: () => void;
}

export default function Chip({ isClickable = false, data, onClick }: ChipProps) {
  const style = chipStyle({ isClickable });

  if (isClickable) {
    return (
      <button className={style.root} onClick={onClick}>
        {data?.label}
      </button>
    );
  } else {
    return <section className={style.root}>{data?.label}</section>;
  }
}
