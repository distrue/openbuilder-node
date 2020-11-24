import {Card} from '.';
import {
    Button, 
    BlockButton, 
    MessageButton,
    ShareButton,
    OperatorButton,
    PhoneButton,
    LinkButton
} from './button';

interface listItem {
    title: string;
    description: string;
    imageUrl: string;
    link: {
        web: string;
    }
}

export interface listCard {
    listCard: {
        header: {
            title: string,
            imageUrl: string;
        },
        items: listItem[],
        buttons: Button[]
    }
}

export class ListCard extends Card {
    title: string;
    thumbnail: string;
    items: listItem[] = [];
    buttons: Button[] = [];

    constructor(title: string, thumbnail: string) {
        super('listCard');
        this.title = title;
        this.thumbnail = thumbnail;
    }

    addListItem({title, description, imageUrl, webLink}: {
        title: string,
        description: string,
        imageUrl: string,
        webLink?: string
    }) {
        this.items.push({
            "title": title,
            "description": description,
            "imageUrl": imageUrl,
            "link": {
                "web": webLink || ''
            }
        });
    }

    eraseListItem(idx: number) {
        this.items.splice(idx, 1);
    }

    showList() {
        return this.items;
    }

    addBlockBtn({label, messageText, blockId, extra}:{label: string, messageText: string, blockId: string, extra?: Object}) {
        const btn = new BlockButton(label, messageText, blockId, extra);
        this.buttons.push(btn);
    };

    addMsgBtn({label, messageText}:{label: string, messageText: string}) {
        const btn = new MessageButton(label, messageText);
        this.buttons.push(btn);
    };

    addShareBtn({label}:{label: string}) {
        const btn = new ShareButton(label);
        this.buttons.push(btn);
    }

    addOperBtn({label}:{label: string}) {
        const btn = new OperatorButton(label);
        this.buttons.push(btn);
    }

    addPhoneBtn({label, phoneNumber}:{label: string, phoneNumber: string}) {
        const btn = new PhoneButton(label, phoneNumber);
        this.buttons.push(btn);
    }

    addLinkBtn({label, link}: {label: string, link: string}) {
        const btn = new LinkButton(label, link);
        this.buttons.push(btn);
    }

    eraseBtn(idx: number) {
        this.buttons.splice(idx, 1);
    }

    showBtns() {
        return this.buttons;
    }

    json(): listCard {
        return({
            "listCard":{
              "header": {
                "title": this.title,
                "imageUrl": this.thumbnail
              },
              "items": this.items,
              "buttons": this.buttons.map(it => it.json() as Button),
            } 
          }); 
    }
}
