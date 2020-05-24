import {button} from '../cmpnts/button';

interface listItem {
    title: string;
    description: string;
    imageUrl: string;
    link: {
        web: string;
    }
}

export function ListItem(
        title: string,
        description: string,
        imageUrl: string,
        webLink?: string
    ): listItem {
    return ({
      "title": title,
      "description": description,
      "imageUrl": imageUrl,
      "link": {
        "web": webLink || ''
      }
    });
}

interface listCard {
    listCard: {
        header: {
            title: string,
            imageUrl: string;
        },
        items: listItem[],
        buttons: button[]
    }
}

export class ListCard {
    title: string;
    thumbnail: string;
    items: listItem[] = [];
    buttons: button[] = [];

    constructor(title: string, thumbnail: string) {
        this.title = title;
        this.thumbnail = thumbnail;
    }

    addList(item: listItem) {
        this.items.push(item);
    }

    eraseList(idx: number) {
        this.items.splice(idx, 1);
    }

    showLists() {
        return this.items;
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

    json(): listCard {
        return({
            "listCard":{
              "header": {
                "title": this.title,
                "imageUrl": this.thumbnail
              },
              "items": this.items,
              "buttons": this.buttons
            } 
          }); 
    }
}
