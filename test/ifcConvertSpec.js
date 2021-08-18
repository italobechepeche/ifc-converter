const ifcConvert = require('../index.js'),
    assert = require('chai').assert,
    expect = require('chai').expect,
    path = require('path'),
    fs = require('fs');

const relative = (relPath) => {
    return path.resolve(__dirname, relPath);
}

describe('ifc converter', function() {
    it('should call ifcConvert and convert', function(done) {
        let source = relative('test.ifc');
        let dest = relative('test.glb');

        ifcConvert(source, dest)
            .then(function () {
                assert(fs.existsSync(dest));
                done();
            })
            .catch(done)
    });

    it('should return error for inexistent file', function(done) {
        ifcConvert('inexistent.ifc', 'inexistent.obj')
            .catch((error) => {
                expect(error).instanceof(Error);
                expect(error.message).equal('Cannot find file.')
                done();
            });
    });

    it('should get error message from ifc convert binary', function(done) {
        let source = relative('wrong.ifc');

        ifcConvert(source, 'wrong.glb')
            .catch((error) => {
                expect(error.message).contains('No support for file schema');
                done();
            });
    });
});

after(() => {
    fs.unlink(relative("test.glb"), () => {});
})