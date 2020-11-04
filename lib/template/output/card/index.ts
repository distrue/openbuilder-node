import {basicCard, basicCarouselCell} from './basiccard';
import {commerceCard, commerceCarouselCell} from './commercecard';
import {listCard} from './listcard';

// there are three types of card: basic, list, and commerce card
type cardType = 'basicCard' | 'listCard' | 'commerceCard';

export interface Card {
    // carousel format only allows basic, commerce card
    carousel?(): basicCarouselCell | commerceCarouselCell;
}

export abstract class Card {
    type: cardType;

    constructor(type: cardType) {
        this.type = type;
    }

    abstract json(): basicCard | commerceCard | listCard;
};

export {BasicCard as BasicCard} from './basiccard';

export {ListCard as ListCard} from './listcard';

export {CommerceCard as CommerceCard} from './commercecard';
