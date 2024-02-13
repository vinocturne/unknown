import { useCallback, useEffect, useState } from 'react'
import { carouselStyle } from './Carousel.style'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel'
import Image from 'next/image'

export default function Carousel() {
  const style = carouselStyle()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start'
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])
  return (
    <section className={style.root}>
      <span className={style.label}>최근 게임 순위</span>
      <div
        ref={emblaRef}
        className={style.container}
      >
        <div className={style.bannerList}>
          <div className={style.item}>
            <Image
              src={
                'https://i.namu.wiki/i/UPX5478k5eOc0I22TRgcFWhlu6Sp1Nw-V4SkaIECQoCowybAC9zbTJhb-epG1oP2VL8MutNT14oDXkWyiFA7pA.webp'
              }
              width={300}
              height={300}
              alt={'image'}
              className={style.image}
            />
            <div className={style.bottomInfo}>
              <span className={style.rank}>1</span>
              <div className={style.info}>
                <span className={style.gameName}>Palworld</span>
                <span className={style.published}>2024.01.19</span>
              </div>
            </div>
          </div>
          <div className={style.item}>
            <Image
              src={
                'https://i.namu.wiki/i/vcy_beLNX15peqV1zneRIFZHAnNTyUVEcuc6F8xL82TdSp0t2iMVsJo-2bpkIRkrDabzyuCUV6uK9isK3Up1cQ.webp'
              }
              width={300}
              height={300}
              alt={'image'}
              className={style.image}
            />
            <div className={style.bottomInfo}>
              <span className={style.rank}>2</span>
              <div className={style.info}>
                <span className={style.gameName}>Yakuza 8</span>
                <span className={style.published}>2024.01.26</span>
              </div>
            </div>
          </div>
          <div className={style.item}>
            <Image
              src={
                'https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/11/HankyungGametoc/20230311012741609kiie.jpg'
              }
              width={300}
              height={300}
              alt={'image'}
              className={style.image}
            />
            <div className={style.bottomInfo}>
              <span className={style.rank}>3</span>
              <div className={style.info}>
                <span className={style.gameName}>Tekken 8</span>
                <span className={style.published}>2024.01.26</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
