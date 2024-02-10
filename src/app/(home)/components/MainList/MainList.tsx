import { mainListStyle } from './MainList.style';

export default function MainList() {
  const style = mainListStyle();
  return (
    <>
      <span className={style.label}>최근 뉴스</span>
      <section className={style.container}>
        <ol className={style.list}>
          <li className={style.item}>asdfasdf</li>
          <li className={style.item}>asdfasdf</li>
          <li className={style.item}>asdfasdf</li>
          <li className={style.item}>asdfasdf</li>
        </ol>
      </section>
    </>
  );
}
