it('nothing now', function (){ });

//const soma = (a, b) => {
  //  return a + b
//}

//const soma = (a, b) => a + b

//const soma = () => 10 + 10 

//console.log(soma(5, 5));

it('function test', function(){
    console.log('Function', this)
})

it('arrow test', () => {
    console.log('Arrow', this)
})