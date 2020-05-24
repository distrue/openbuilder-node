import {SkillResponse, Output, Card, Cmpnts} from '../';

describe('Test response formatter', () => {
  it('test will be performed after change function to constructor', (done) => {
    const carousel = new Output.Carousel('basicCard');
    carousel.addItem(new Card.BasicCard('Hello', "Hello guys", "imageUrl"));

    const basicCard = new Card.BasicCard('hello', 'tou', 'thmb');
    basicCard.addBtn(Cmpnts.Button('share', {label: '공유하기'}));
    
    const item = new SkillResponse();
    item.template.addOutput(carousel);
    item.template.addOutput(basicCard);
    console.log(JSON.stringify(item.json()));
    
    done();
  })
});
