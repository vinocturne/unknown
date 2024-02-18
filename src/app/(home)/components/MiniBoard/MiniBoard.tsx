import { useState } from 'react';
import { miniBoardStyle } from './MiniBoard.style';
import Image from 'next/image';
import { css, cx } from '@styled-system/css';

export default function MiniBoard() {
  const style = miniBoardStyle({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onHover = (selectedIndex: number) => {
    setSelectedIndex(selectedIndex);
  };

  const data = [
    {
      title: 'Palworld',
    },
    {
      title: 'Yakuza 8',
    },
    {
      title: 'Tekken 8',
    },
    {
      title: 'CyberPunk 2077 : Pantom Liberty',
    },
    {
      title: 'HellDivers 2',
    },
  ];

  return (
    <section className={style.root}>
      <span className={style.label}>랭크 게임 커뮤니티</span>
      <section className={style.container}>
        <section className={style.list}>
          <div className={cx(style.item, selectedIndex === 0 && 'selected')} onMouseEnter={() => onHover(0)}>
            <Image
              src={
                'https://i.namu.wiki/i/UPX5478k5eOc0I22TRgcFWhlu6Sp1Nw-V4SkaIECQoCowybAC9zbTJhb-epG1oP2VL8MutNT14oDXkWyiFA7pA.webp'
              }
              className={style.image}
              alt={'image'}
              width={70}
              height={30}
            />
            <span className={style.rank}>1</span>
            <div className={style.info}>Palword</div>
          </div>
          <div className={cx(style.item, selectedIndex === 1 && 'selected')} onMouseEnter={() => onHover(1)}>
            <Image
              src={
                'https://i.namu.wiki/i/vcy_beLNX15peqV1zneRIFZHAnNTyUVEcuc6F8xL82TdSp0t2iMVsJo-2bpkIRkrDabzyuCUV6uK9isK3Up1cQ.webp'
              }
              className={style.image}
              alt={'image'}
              width={70}
              height={30}
            />
            <span className={style.rank}>2</span>
            <div className={style.info}>Yakuza 8</div>
          </div>
          <div className={cx(style.item, selectedIndex === 2 && 'selected')} onMouseEnter={() => onHover(2)}>
            <Image
              src={
                'https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/11/HankyungGametoc/20230311012741609kiie.jpg'
              }
              className={style.image}
              alt={'image'}
              width={70}
              height={30}
            />
            <span className={style.rank}>3</span>
            <div className={style.info}>Tekken 8</div>
          </div>
          <div className={cx(style.item, selectedIndex === 3 && 'selected')} onMouseEnter={() => onHover(3)}>
            <Image
              src={
                'https://i.namu.wiki/i/talpS3Zk2xoaIDH3gepwRmtx3Itihjaj8KU5dMPZwxwJJgSfdllU3KAwQTG_Q3jIvPMMo_dVYoXMdj51h1dVPS4hYvntGeZ4jb0K-5sKPT5kRmXaVPk7qEnmYTt2KAyig76CCEgXYj3wnaBcn_WIQg.webp'
              }
              className={style.image}
              alt={'image'}
              width={70}
              height={30}
            />
            <span className={style.rank}>4</span>
            <div className={style.info}>CyberPunk 2077 : Pantom Liberty</div>
          </div>
          <div className={cx(style.item, selectedIndex === 4 && 'selected')} onMouseEnter={() => onHover(4)}>
            <Image
              src={
                'https://i.namu.wiki/i/zTkuk4DCaIQaJwRVZOiWZTomErn1VSB8qu64WhrW1ACu510X7vY451cvJG93yU1mFgQ1qE9JMLh8wX1u2DqvWZa-KNU54nF9AY-n0UdVg7AZLeor0J73Rt8Srw7C-cm2RGGecFepNV3Yqs7sf-G5pA.webp'
              }
              className={style.image}
              alt={'image'}
              width={70}
              height={30}
            />
            <span className={style.rank}>5</span>
            <div className={style.info}>HellDivers 2</div>
          </div>
        </section>
        <section className={style.detail}>
          <span className={style.title}>
            {data[selectedIndex].title}
            <span className={css({ color: '{colors.gray.950}' })}> 관련 최신글</span>
          </span>
        </section>
      </section>
    </section>
  );
}
