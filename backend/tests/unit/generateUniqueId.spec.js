const generateUniqueId = require('../../src/utils/genarateUniqueId');


describe('Generate Unique ID', () => {
    it('should generate an unique Id', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});