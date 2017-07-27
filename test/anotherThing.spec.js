import { expect } from 'chai';
import { stub } from 'sinon';

import * as anotherThing from '../src/anotherThing';
import * as utils from '../src/utils';

describe('anotherThing', () => {
    it('should add two things together', () => {
        const thing1 = 10;
        const thing2 = 20;

        //This line does absolute nothing
        stub(utils, 'add').returns(2);

        expect(anotherThing.addTwoThings(thing1, thing2)).to.equal(30);
    });
});