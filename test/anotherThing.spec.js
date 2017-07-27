import { expect } from 'chai';

import * as anotherThing from '../src/anotherThing';

describe('anotherThing', () => {
    it('should add two things together', () => {
        const thing1 = 10;
        const thing2 = 20;

        expect(anotherThing.addTwoThings(thing1, thing2)).to.equal(30);
    });
});