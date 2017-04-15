import expect from 'expect';

describe('First test', () => {
    it('should pass', () => {
        expect({ name: 'joe' }).toEqual({ name: 'joe' });
    });
});