import {button} from '../cmpnts/button';

interface carouselCell {
    title: string;
    description: string;
    buttons: button[];
    thumbnail: {
        imageUrl: string;
    }
}

interface basicCard {
    basicCard: {
        title: string;
        description: string;
        buttons: button[];
        thumbnail: {
            imageUrl: string;
        }
    }
}

export class BasicCard {
    title: string;
    desc: string;
    thumbnail: string;
    buttons: button[] = [];

    constructor(title: string, desc: string, thumbnail: string) {
        this.title = title;
        this.desc = desc;
        this.thumbnail = thumbnail;
    }

    addBtn(item: button) {
        this.buttons.push(item);
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
                "buttons": this.buttons,
                "thumbnail": {
                "imageUrl": this.thumbnail
                }
            }
        })
    }

    carousel(): carouselCell {
        return({
            "title": this.title,
            "description": this.desc,
            "buttons": this.buttons,
            "thumbnail": {
              "imageUrl": this.thumbnail
            }
        });
    }
}
