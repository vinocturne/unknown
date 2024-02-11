import Link from 'next/link';
import { mainListStyle } from './MainList.style';

export default function MainList() {
  const style = mainListStyle();
  return (
    <>
      <span className={style.label}>최근 뉴스</span>
      <section className={style.container}>
        <ol className={style.list}>
          <li className={style.item}>
            <Link href={'https://www.tgdaily.co.kr/news/articleView.html?idxno=330718'}>
              위메이드 '나이트 크로우' 도전의 재미 강화
            </Link>
          </li>
          <li className={style.item}>
            <Link href={'https://www.tgdaily.co.kr/news/articleView.html?idxno=330664'}>
              게임업계 설 연휴 이벤트 '풍성'
            </Link>
          </li>
          <li className={style.item}>
            <Link href={'https://www.tgdaily.co.kr/news/articleView.html?idxno=330693'}>
              호요버스 '붕괴: 스타레일' 여의도서 오프라인 이벤트 개최
            </Link>
          </li>
          <li className={style.item}>
            <Link href={'https://www.tgdaily.co.kr/news/articleView.html?idxno=330700'}>
              [게임스톡] 엔씨 아쉬운 실적에 하락 3.99%↓
            </Link>
          </li>
        </ol>
      </section>
    </>
  );
}
