import chai from 'chai';
import sinon from 'sinon';

import * as anotherThing from '../src/anotherThing';
import * as utils from '../src/utils';
import * as math from '../src/utils/Math';

describe('Should add two numbers and mock a method', () => {
    let number1;
    let number2;
    let resultAdd;
    let resultMock;
    beforeEach(function() {
      number1 = 10;
      number2 = 20;
      resultAdd = 30;
      resultMock = 1;
    });
    afterEach(function() {
      sinon.restore();
    });
    it('Mock utils.js', () => {
        chai.expect(utils.add(number1, number2)).to.equal(resultAdd);
        sinon.stub(utils, 'add').returns(resultMock);
        chai.expect(utils.add(number1, number2)).to.equal(resultMock);
    });
    it('Mock anotherThing.js', () => {
        chai.expect(anotherThing.addTwoThings(number1, number2)).to.equal(resultAdd);
        sinon.stub(anotherThing, 'addTwoThings').returns(resultMock);
        chai.expect(anotherThing.addTwoThings(number1, number2)).to.equal(resultMock);
    });
    it('Mock Math.js', () => {
        chai.expect(math.add(number1, number2)).to.equal(resultAdd);
        sinon.stub(math, 'add').returns(resultMock);
        chai.expect(math.add(number1, number2)).to.equal(resultMock);
    });
});
