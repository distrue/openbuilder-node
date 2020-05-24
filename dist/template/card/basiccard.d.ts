import { button } from '../cmpnts/button';
interface carouselCell {
    title: string;
    description: string;
    buttons: button[];
    thumbnail: {
        imageUrl: string;
    };
}
interface basicCard {
    basicCard: {
        title: string;
        description: string;
        buttons: button[];
        thumbnail: {
            imageUrl: string;
        };
    };
}
export declare class BasicCard {
    title: string;
    desc: string;
    thumbnail: string;
    buttons: button[];
    constructor(title: string, desc: string, thumbnail: string);
    addBtn(item: button): void;
    eraseBtn(idx: number): void;
    showBtns(): button[];
    json(): basicCard;
    carousel(): carouselCell;
}
export {};
