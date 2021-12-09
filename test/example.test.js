import { renderMushroom } from '../render-utils.js';
import { findFriendByName } from '../data-utils.js';

const test = QUnit.test;

test('renderMushroom function returns a div element with the class of mushroom', (expect) => {

    const expected = '<div class="mushroom"></div>';

    const actual = renderMushroom();

    expect.equal(actual.outerHTML, expected, 'this test proves that renderMushroom will return <div class="mushroom"></div>');
});

test('this function should take in 2 arguments, a string and an array of objects. If the name is equal to the name property of an object in the array, it should return that object', (expect) => {
    const myFriends = [
        {
            name: 'Nico'
        },
        {
            name: 'Ryan'
        },
        {
            name: 'Millie'
        }
    ];

    const expected = { name: 'Millie' };

    const actual = findFriendByName('Millie', myFriends);

    const expected1 = 'object';

    const actual1 = findFriendByName('Ryan', myFriends);

    expect.deepEqual(actual, expected, 'This test proves that findFriendByName will return an object with a property name: "Millie"');

    expect.equal(typeof actual1, expected1, 'this test proves that findFriendByName will return an object if name matches a name property of an object in the array');
});