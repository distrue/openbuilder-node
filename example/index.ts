import {SkillResponse as Resp} from '../lib';

const bare = new Resp();
bare.template.addBareOutput({
  type: 'basic', 
  title: '안녕하세요', 
  thumbnail: 'http://k.kakaocdn.net/dn/bSxJ8y/btqF02kThBu/4ZjrER4JOjU4okzstNsUY1/img_640x640.jpg',
  desc: '반갑습니다'
});
bare.template
  .getOutputasBare(0)
  .getCardasBasic()
  .addBlockBtn({
    label: '버튼',
    messageText: '메세지',
    blockId: "id",
  });
console.log(JSON.stringify(bare.json()));

const carousel = new Resp();
carousel.template.addCarouselOutput('basicCard');
const out = carousel.template.getOutputasCarousel(0);
out.addCarouselCell({
  title:  'carousel', 
  desc: 'Heloo', 
  thumbnail: 'http://k.kakaocdn.net/dn/bSxJ8y/btqF02kThBu/4ZjrER4JOjU4okzstNsUY1/img_640x640.jpg'
});
out.addCarouselCell({
  title: 'carousel', 
  desc: 'Heloo', 
  thumbnail: 'http://k.kakaocdn.net/dn/bSxJ8y/btqF02kThBu/4ZjrER4JOjU4okzstNsUY1/img_640x640.jpg'
}); // if it is not CarouselCell, error occurs

console.log(JSON.stringify(carousel.json()));
