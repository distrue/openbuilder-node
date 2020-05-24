import {BasicCard} from './basiccard';
import {ListCard, ListItem} from './listcard';

export type card = BasicCard | ListCard;

export default {
    BasicCard: BasicCard,
    ListCard: ListCard,
    ListItem: ListItem
};
