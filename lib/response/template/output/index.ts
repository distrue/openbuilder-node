import {Card, CommerceCard, ListCard} from './card';
import { BasicCard } from './card/basiccard';

// TODO: commerceCard carousel
export type carouselType = 'basicCard';
type carouselCard = BasicCard;

export interface Output {
  // no both-using non-abstract method
}

export abstract class Output {
  type: 'bare' | 'carousel';
  constructor(type: 'bare' | 'carousel') {
    this.type = type;
  }

  abstract json(): Object;
}

export class BareOutput extends Output {
  card: Card;

  constructor(card: Card) {
    super('bare');
    this.card = card;
  }

  getCardasBasic(): BasicCard {
    return this.card as BasicCard;
  }

  getCardasCommerce(): CommerceCard {
    return this.card as CommerceCard;
  }

  getCardasList(): ListCard {
    return this.card as ListCard;
  }

  json(): any {
    return this.card.json();
  }
}

export class CarouselOutput extends Output {
    itemType: carouselType;
    items: carouselCard[] = [];
    header: any = {};

    constructor(type: carouselType) {
      super('carousel');
        this.itemType = type;
    }

    // TODO: seperate Commmerce Carousel and Basic Carousel Cell addition
    // Only one type can be line up
    addCarouselCell(card: carouselCard) {
      this.items.push(card);
    }
    
    addBasicCarouselCell({title, desc, thumbnail}:{title: string, desc: string, thumbnail: string}) {
      const card = new BasicCard({title, desc, thumbnail});
      this.items.push(card);
    }

    delCarouselCell(idx: number) {
        this.items.splice(idx, 1);
    }

    listCarouselCell() {
        return this.items;
    }

    // TODO: this is experimental one
    addHeader(title: string, desc: string, image: string) {
      this.header = {
        "title": title,
        "desc": desc,
        "thumbnail": {
          "imageUrl": image
        }
      }
    }

    json(): Object {
      return({
        "carousel": {
          "type": this.itemType,
          "items": this.items.map(it => it.carousel()),
          "header": this.header
        }
      });
    }
}
