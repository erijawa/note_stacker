"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* スライド1 */}
          <div className="embla__slide flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 shadow xl:p-8">
            <h4 className="mb-4 text-2xl font-semibold">
              気になる記事をコメント付きで投稿
            </h4>
            <div className="flex justify-center items-baseline my-8">
            <a href="https://gyazo.com/3ef84cb8f80facf6adde406fdc0ef733"><img src="https://i.gyazo.com/3ef84cb8f80facf6adde406fdc0ef733.png" alt="Image from Gyazo" width="1031"/></a>
            </div>
            <h4 className="text-2xl font-semibold">カテゴリも作成可能</h4>
          </div>
          {/* スライド2 */}
          <div className="embla__slide flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 shadow xl:p-8">
            <h4 className="mb-4 text-2xl font-semibold">
              マイページで投稿一覧を閲覧
            </h4>
            <div className="flex justify-center items-baseline my-8">
            <a href="https://gyazo.com/9f961c9f820274c1c107381db011eb74"><img src="https://i.gyazo.com/9f961c9f820274c1c107381db011eb74.png" alt="Image from Gyazo" width="1033"/></a>
            </div>
            <h4 className="mb-4 text-2xl font-semibold">
              カテゴリによる絞り込みも可能
            </h4>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
