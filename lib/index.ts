export interface blockParams {
  label: string,
  messageText: string,
  blockId: string,
  extra?: Object
}

export interface msgParams {
  label: string,
  messageText: string
}

type carouselType = 'basicCard';

function responseWrapper(items: Object[]) {
  return ({
    "version": "2.0",
    "template": {
      "outputs": items
    }
  });
}

function listItem(title: string, description: string, imageUrl: string, webLink?: string) {
  return ({
    "title": title,
    "description": description,
    "imageUrl": imageUrl,
    "link": {
      "web": webLink || undefined
    }
  });
}

function buttonItem(type: string, actionParams: blockParams | Object) {
  if(type === 'block') {
    const params = actionParams as blockParams;
    return({
      "action": "block",
      "label": params.label,
      "messageText": params.messageText,
      "blockId": params.blockId,
      "extra": params.extra || undefined // {restaurant_name: searchTitle(data.name)}
    });
  }
  
  if(type === 'message') {
    const params = actionParams as msgParams;
    return {
        "action": "message",
        "label": params.label,
        "messageText": params.messageText
    };
  }

  return({
    "action": "share",
    "label": "공유하기"
  });
}

function listCard(title: string, titleThumbnail: string, items:any[] = [], buttons:any[] = []) {
  return({
    "listCard":{
      "header": {
        "title": title,
        "imageUrl": titleThumbnail
      },
      "items": items,
      "buttons": buttons
    } 
  });
}

function basicCard(msg: string, description: string, imageUrl: string, buttons:any[] = []) {
  return({
    "basicCard": {
      "title": msg,
      "description": description,
      "buttons": buttons,
      "thumbnail": {
        "imageUrl": imageUrl
      }
    }
  });
}

function carousel(type: carouselType, list: any[]) {
  return({
    "carousel": {
      "type": type,
      "items": list
    }
  });
}

function fallbackBlock(msg:string, type?: string) {
    let buttons:any = [];
    let imageUrl = "https://snuffstatic.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%82%E1%85%AE%E1%84%91%E1%85%AE%E1%84%91%E1%85%A1+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.PNG";
    if(type === 'coupon') {
        imageUrl = "https://snuffstatic.s3.ap-northeast-2.amazonaws.com/coupon.png";
    }
    if(type === 'qrcode') {
      imageUrl = "https://snuffstatic.s3.ap-northeast-2.amazonaws.com/qrque.png"
    }

    return({
        "version": "2.0",
        "template": {
          "outputs": [
            {
                "basicCard": {
                    "title": msg,
                    "buttons": buttons,
                    "thumbnail": {
                        "imageUrl": imageUrl
                    }
                }
            }]
        }
    });
}

function basicCardCarousel(list:any[]) {
  return({
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "carousel": {
            "type": "basicCard",
            "items": list
          }
        }
      ]
    }
  });
}

export default {
  responseWrapper,
  listItem,
  buttonItem,
  listCard,
  basicCard,
  carousel,
  fallbackBlock,
  basicCardCarousel
}
