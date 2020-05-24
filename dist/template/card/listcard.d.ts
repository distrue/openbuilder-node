import { button } from '../cmpnts/button';
interface listItem {
    title: string;
    description: string;
    imageUrl: string;
    link: {
        web: string;
    };
}
export declare function ListItem(title: string, description: string, imageUrl: string, webLink?: string): listItem;
interface listCard {
    listCard: {
        header: {
            title: string;
            imageUrl: string;
        };
        items: listItem[];
        buttons: button[];
    };
}
export declare class ListCard {
    title: string;
    thumbnail: string;
    items: listItem[];
    buttons: button[];
    constructor(title: string, thumbnail: string);
    addList(item: listItem): void;
    eraseList(idx: number): void;
    showLists(): listItem[];
    addBtn(item: button): void;
    eraseBtn(idx: number): void;
    showBtns(): button[];
    json(): listCard;
}
export {};
