// IMPORT MODULES under test here:

import { getSub, getDiv, getSum, getMult } from '../utils.js';

// import { example } from '../example.js';


const test = QUnit.test;

test('should return 8 when provided 10 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSub(10, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should return -8 when provided 2 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSub(2, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 12 when provided 10 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(10, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return -8 when provided -10 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(-10, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should return 20 when provided 10 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMult(10, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should return 20 when provided -10 and -2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMult(-10, -2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should return 5 when provided 10 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiv(10, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should return 5 when provided -10 and -2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiv(-10, -2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
