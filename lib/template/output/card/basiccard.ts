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

export interface basicCarouselCell {
    title: string;
    description: string;
    buttons: Button[];
    thumbnail: {
        imageUrl: string;
    }
};

export interface basicCard {
    basicCard: {
        title: string;
        description: string;
        buttons: Button[];
        thumbnail: {
            imageUrl: string;
        }
    }
}

export class BasicCard extends Card {
    title: string;
    desc: string;
    thumbnail: string;
    buttons: Button[] = [];

    constructor(title: string, desc: string, thumbnail: string) {
        super('basicCard');
        this.title = title;
        this.desc = desc;
        this.thumbnail = thumbnail;
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

    json(): basicCard {
        return({
            "basicCard": {
                "title": this.title,
                "description": this.desc,
                "buttons": this.buttons.map(it => it.json() as Button),
                "thumbnail": {
                "imageUrl": this.thumbnail
                }
            }
        })
    }

    carousel(): basicCarouselCell {
        return({
            "title": this.title,
            "description": this.desc,
            "buttons": this.buttons.map(it => it.json() as Button),
            "thumbnail": {
              "imageUrl": this.thumbnail
            }
        });
    }
}
