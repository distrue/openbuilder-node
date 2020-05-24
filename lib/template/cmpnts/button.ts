interface blockParams {
    label: string,
    messageText: string,
    blockId: string,
    extra?: Object
}
  
interface msgParams {
    label: string,
    messageText: string
}

interface shareParams {
  label: string;
}

interface operatorParams {
  label: string;
}

interface phoneParams {
  label: string;
  phoneNumber: string;
}

interface linkParams {
  label: string;
  link: string;
}

type buttonParams = blockParams | msgParams | shareParams | operatorParams | phoneParams;

interface blockButton {
    action: string;
    label: string;
    messageText: string;
    blockId: string;
    extra: Object;
}

interface msgButton {
    action: string;
    label: string;
    messageText: string;
}

interface shareButton {
    action: string;
    label: string;
}

interface operatorButton {
  action: string;
  label: string;
}

interface phoneButton {
  action: string;
  label: string;
  phoneNumber: string;
}

interface linkButton {
  action: string;
  label: string;
  webLinkUrl: string;
}

export type button = blockButton | msgButton | shareButton;

export function Button(type: string, actionParams: buttonParams): button {
    if(type === 'block') {
      const params = actionParams as blockParams;
      return <blockButton>({
        "action": "block",
        "label": params.label,
        "messageText": params.messageText,
        "blockId": params.blockId,
        "extra": params.extra || {}
      });
    }
    
    if(type === 'message') {
      const params = actionParams as msgParams;
      return <msgButton>({
          "action": "message",
          "label": params.label,
          "messageText": params.messageText
      });
    }

    if(type === "share") {
      const params = actionParams as shareParams;
      return <shareButton>({
        "action": "share",
        "label": params.label
      });
    }
  
    if(type === "operator") {
      const params = actionParams as operatorParams;
      return <operatorButton>({
        "action": "operator",
        "label": params.label
      });
    }
  
    if(type === "phone") {
      const params = actionParams as phoneParams;
      return <phoneButton>({
        "action": "phone",
        "label": params.label,
        "phoneNumber": params.phoneNumber
      });
    }
  
    if(type === "webLink") {
      const params = actionParams as linkParams;
      return <linkButton>({
        "action": "webLink",
        "label": params.label,
        "webLinkUrl": params.link
      });
    }
  
    throw Error("unsupported button type");
  }
  
  