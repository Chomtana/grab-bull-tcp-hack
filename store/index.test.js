const index = require("./index")
// @ponicode
describe("index.state", () => {
    test("0", () => {
        let callFunction = () => {
            index.state()
        }
    
        expect(callFunction).not.toThrow()
    })
})
