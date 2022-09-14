const Engineer = require('../lib/Engineer')

describe('Engineer', ()=>{
  it('should return github', ()=>{
    const obj = new Engineer('Ron', 20, "fakemail@gmail.com","github")
    const test = 'github'
    expect(obj.github).toEqual(test)
  })
  it('should return role', ()=>{
    const obj = new Engineer('Ron', 20, "fakemail@gmail.com","github")
    const test = 'Engineer'
    expect(obj.role).toEqual(test)
  })
}) 