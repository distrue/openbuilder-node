import { card } from './card';
import { BasicCard } from './card/basiccard';
declare type carouselType = 'basicCard';
declare type carouselCard = BasicCard;
export declare class Bare {
    card: card;
    constructor(item: card);
    json(): any;
}
export declare class Carousel {
    type: carouselType;
    items: carouselCard[];
    constructor(type: carouselType);
    addItem(item: carouselCard): void;
    eraseItem(idx: number): void;
    showItems(): BasicCard[];
    json(): Object;
}
export declare type output = card | Carousel;
declare const _default: {
    Bare: typeof Bare;
    Carousel: typeof Carousel;
};
export default _default;
