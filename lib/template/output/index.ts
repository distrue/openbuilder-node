import {Card, CommerceCard, ListCard} from './card';
import { BasicCard } from './card/basiccard';

// TODO: commerceCard carousel
export type carouselType = 'basicCard';
type carouselCard = BasicCard;

export interface Output {
  addCarouselCell?(params: {title: string, desc: string, thumbnail: string}): void;
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

  constructor(
    type: 'basic' | 'commerce' | 'list',
    title: string,
    thumbnail: string,
    desc?: string,
  ) {
    super('bare');
    if(type === 'commerce') {
      const card = new CommerceCard(title, desc || '', thumbnail);
      this.card = card;
    }
    else if(type === 'list') {
      const card = new ListCard(title, thumbnail);
      this.card = card;
    }
    else {
      // assert type === 'basic'
      const card = new BasicCard(title, desc || '', thumbnail);
      this.card = card;
    }
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
    addCarouselCell({title, desc, thumbnail}:{title: string, desc: string, thumbnail: string}) {
      const card = new BasicCard(title, desc, thumbnail);
      this.items.push(card);
    }

    delCarouselCell(idx: number) {
        this.items.splice(idx, 1);
    }

    listCarouselCell() {
        return this.items;
    }

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

