/// <reference types = "cypress"/>

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a).to.be.equal(1);
})

it('truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.false;
    expect(c).to.be.undefined;
})

it('Object assert', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).to.be.deep.equal({a:1, b:2});
    expect(obj).eql({a:1, b:2});
    expect(obj).include({a:1});
    expect(obj).to.have.property('b');
    expect({}).to.be.empty;
})

it('Arrays', () =>{
    const arr = [1, 2 ,3];

    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([2,3])
    expect(arr).to.not.be.empty;
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('Number');
    expect(str).to.be.a('String');
    expect({}).to.be.a('object');
    expect([]).to.be.a('array')


})

it('String', () =>{

    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('teste')
    expect(str).to.match(/de/)
    expect(str).to.match(/^String/)
    expect(str).to.match(/teste$/)

})

it.only('Numbers', () => {

    const number = 7
    const floatNumber = 5.2123

    expect(number).to.be.equal(7)
    expect(number).to.be.above(4)
    expect(number).to.be.below(10)

    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)



})
