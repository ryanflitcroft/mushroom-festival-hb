import { renderMushroom } from '../render-utils.js';

const test = QUnit.test;

test('renderMushroom function returns a div element with the class of mushroom', (expect) => {

    const expected = '<div class="mushroom"></div>';

    const actual = renderMushroom();

    expect.equal(actual.outerHTML, expected, 'this test proves that renderMushroom will return <div class="mushroom"></div>');
});