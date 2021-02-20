import {Card, Output, SkillResponse, SkillPayload} from '../lib';

const bare = new SkillResponse();
bare.template.addOutput(
  new Output.BareOutput(
    new Card.BasicCard({
      title: '안녕하세요', 
      thumbnail: 'http://k.kakaocdn.net/dn/bSxJ8y/btqF02kThBu/4ZjrER4JOjU4okzstNsUY1/img_640x640.jpg',
      desc: '반갑습니다'
    })
  )
);

const it = (bare.template.outputs[0] as Output.BareOutput).card;
if(it instanceof Card.BasicCard) {
  it.addBlockBtn({
    label: '버튼',
    messageText: '메세지',
    blockId: "id",
  });
}
console.log(JSON.stringify(bare.json()));

const carousel = new SkillResponse();
carousel.template.addOutput(
  new Output.CarouselOutput('basicCard')
);
if(carousel.template.outputs[0] instanceof Output.CarouselOutput) {
  const out = (carousel.template.outputs[0] as Output.CarouselOutput);
  out.addCarouselCell(
    new Card.BasicCard({
      title:  'carousel', 
      desc: 'Heloo', 
      thumbnail: 'http://k.kakaocdn.net/dn/bSxJ8y/btqF02kThBu/4ZjrER4JOjU4okzstNsUY1/img_640x640.jpg'
    })
  );
  out.addCarouselCell(
    new Card.BasicCard({
      title: 'carousel', 
      desc: 'Heloo', 
      thumbnail: 'http://k.kakaocdn.net/dn/bSxJ8y/btqF02kThBu/4ZjrER4JOjU4okzstNsUY1/img_640x640.jpg'
    })
  )
}

console.log(JSON.stringify(carousel.json()));

const req = new SkillPayload({
  bot: { id: '5f3f34ed4fbf5200015f06d7', name: '호약' },
  userRequest: {
    block: { id: '5f3f34ed4fbf5200015f06d7', name: '호약' },
    utterance: '01050290810',
    params: { surface: 'Kakaotalk.plusfriend' },
    isInSlotFilling: true,
    user: {
      id: '8dcae25ae7508eafa4dd2207fbf9418753597a7116ca862072a4e50f087e6a9928',
      type: 'botUserKey',
      properties: {
        botUserKey: '8dcae25ae7508eafa4dd2207fbf9418753597a7116ca862072a4e50f087e6a9928',
        appUserStatus: 'REGISTERED',
        isFriend: true,
        app_user_status: 'REGISTERED',
        app_user_id: '1620160768',
        plusfriendUserKey: 'UEBpJodrFRCP',
        appUserId: '1620160768',
        bot_user_key: '8dcae25ae7508eafa4dd2207fbf9418753597a7116ca862072a4e50f087e6a9928',
        plusfriend_user_key: 'UEBpJodrFRCP'
      }
    },
    value: { origin: '01050290810', resolved: '01050290810' },
    timezone: 'Asia/Seoul',
    lang: 'ko'
  },
  indent: {},
  action: {
    name: '',
    clientExtra: {},
    params: {},
    id: '',
    detailParams: {}
  }
});

console.log(req.bot, req.from, req.action);
