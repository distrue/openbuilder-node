import {card} from './card';
import { BasicCard } from './card/basiccard';

// TODO: commerceCard carousel
type carouselType = 'basicCard';
type carouselCard = BasicCard;

export class Bare {
  card: card;

  constructor(item: card) {
    this.card = item;
  }

  json(): any {
    return this.card.json();
  }
}

export class Carousel {
    type: carouselType;
    items: carouselCard[] = [];

    constructor(type: carouselType) {
        this.type = type;
    }

    addItem(item: carouselCard) {
        this.items.push(item);
    }

    eraseItem(idx: number) {
        this.items.splice(idx, 1);
    }

    showItems() {
        return this.items;
    }

    json(): Object {
      return({
        "carousel": {
          "type": this.type,
          "items": this.items.map(it => it.carousel())
        }
      });
    }
}

export type output = card | Carousel;
export default {
  Bare: Bare,
  Carousel: Carousel
};
