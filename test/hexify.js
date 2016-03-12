var hexify = require('./../hexify');
var trumpet = require('trumpet');
var chai = require('chai');
var s = require('stream');

var streamFromString = function(string){
    var stream = new s.Readable();
    stream.push(string);    // stream apparently does not accept objects
    stream.push(null);
    return stream;
};


var expect = chai.expect;
describe('hexify', function() {
    it("Should process 'hex' tags",function(done){
        var src = '<div class="hex" data-hex-x="0" data-hex-y="0" data-hex-scale="1" data-hex-size="100"/>';
        var tr = trumpet();
        tr.selectAll('.hex', function (step) {
            var x = step.getAttribute('data-x');
            var y = step.getAttribute('data-y');
            var scale = step.getAttribute('data-scale');
            expect(x).to.not.be.undefined;
            expect(y).to.not.be.undefined;
            expect(scale).to.not.be.undefined;
            done();
        });
        streamFromString(src).pipe(hexify()).pipe(tr);
    });

    it("Should calculate x correctly",function(done){
        var src = '<div class="hex" data-hex-x="1" data-hex-y="0" data-hex-scale="1" data-hex-size="100"/>';
        var tr = trumpet();
        tr.selectAll('.hex', function (step) {
            var x = step.getAttribute('data-x');
            expect(x).to.be.equals('150');
            done();
        });
        streamFromString(src).pipe(hexify()).pipe(tr);
    });
    it("Should calculate y correctly",function(done){
        var src = '<div class="hex" data-hex-x="0" data-hex-y="1" data-hex-scale="1" data-hex-size="100"/>';
        var tr = trumpet();
        tr.selectAll('.hex', function (step) {
            var y = step.getAttribute('data-y');
            expect(y).to.be.equals('173');
            done();
        });
        streamFromString(src).pipe(hexify()).pipe(tr);
    });
    it("Should calculate alternaye y for changing x",function(done){
        var src = '<div class="hex" data-hex-x="1" data-hex-y="1" data-hex-scale="1" data-hex-size="100"/>';
        var tr = trumpet();
        tr.selectAll('.hex', function (step) {
            var y = step.getAttribute('data-y');
            expect(y).to.be.equals('86');
            done();
        });
        streamFromString(src).pipe(hexify()).pipe(tr);
    });
    it("Should calculate scale correctly",function(done){
        var src = '<div class="hex" data-hex-x="0" data-hex-y="0" data-hex-scale="2" data-hex-size="100"/>';
        var tr = trumpet();
        tr.selectAll('.hex', function (step) {
            var scale = step.getAttribute('data-scale');
            expect(scale).to.be.equals('3');
            done();
        });
        streamFromString(src).pipe(hexify()).pipe(tr);
    });

    it("Should default to scale 1",function(done){
        var src = '<div class="hex" data-hex-x="0" data-hex-y="0" data-hex-size="100"/>';
        var tr = trumpet();
        tr.selectAll('.hex', function (step) {
            var scale = step.getAttribute('data-scale');
            expect(scale).to.be.equals('1');
            done();
        });
        streamFromString(src).pipe(hexify()).pipe(tr);
    });
});
