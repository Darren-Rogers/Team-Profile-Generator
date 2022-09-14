const Manager = require('../lib/Manager')

describe('Manager', ()=>{
  it('should return school', ()=>{
    const obj = new Manager('Ron', 20, "fakemail@gmail.com",204)
    const test = 204
    expect(obj.officeNum).toEqual(test)
  })
  it('should return role', ()=>{
    const obj = new Manager('Ron', 20, "fakemail@gmail.com",204)
    const test = 'Manager'
    expect(obj.role).toEqual(test)
  })
}) 