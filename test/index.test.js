//Import js file
const index = require('../script/index')

//Set up overall test suite for index.js functions

    //Need to mock functions?

describe ('index.js', () => {

    //Template for sub test suites
    describe('...', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = '<element id="...">...</element>';
            global.id = document.querySelector('#id');
        })

        test('test for ...', () => {
            //Edit as required
            index.function();
            expect(id.querySelectorAll('child-element')).toBe('desired result!');
        })
    })

})