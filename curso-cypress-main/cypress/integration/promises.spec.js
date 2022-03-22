it('No tests yet', () => {})

const getSomething = () => 10;

const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`Something is ${something}`);
    console.log('end');
}

system();