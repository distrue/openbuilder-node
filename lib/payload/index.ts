interface bot {
  id: string;
  name: string;
}

interface userRequest {
  timezone:	string; // 사용자의 시간대를 반환합니다.한국에서 보낸 요청이라면 “Asia/Seoul”를 갖습니다.
  block: {
    id: string,
    name: string
  }; //	사용자의 발화에 반응한 블록의 정보입니다. 블록의 id와 name을 포함합니다.
  utterance: string; // 봇 시스템에 전달된 사용자의 발화입니다.
  lang: string;	// 사용자의 언어를 반환합니다. 한국에서 보낸 요청이라면 “kr”를 갖습니다.
  botUserKey: string;
  plusFriendUserKey: string;
  appUserId: string;
  isFriend: boolean;
}

interface action {
  id: string; // 스킬의 고유한 식별자입니다.
  name: string; // 설정된 스킬의 이름입니다.
  params: {[title: string]: string};
  detailParams: {[title: string]: any};
  clientExtra: {[title: string]: any};
}

export class SkillPayload {
  indent = "Not supported on this version";
  from: userRequest;
  bot: bot;
  action: action;

  constructor(json: any) {
    try {
      this.bot = json.bot;
      this.from = {
        timezone: json.userRequest.timezone,
        block: {
          id: json.userRequest.block.id,
          name: json.userRequest.block.name
        },
        utterance: json.userRequest.utterance,
        lang: json.userRequest.lang,
        botUserKey: json.userRequest.user.id,
        plusFriendUserKey: json.userRequest.user.properties.plusfriendUserKey,
        appUserId: json.userRequest.user.properties.appUserId || '',
        isFriend: json.userRequest.user.properties.isFriend || false
      };
      this.action = json.action;
    } catch(err) {
      throw Error("Invalid input for SkillPayload: [ " + String(err) + " ]");
    }
  }
}