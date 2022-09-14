const Intern = require('../lib/Intern')

describe('Intern', ()=>{
  it('should return school', ()=>{
    const obj = new Intern('Ron', 20, "fakemail@gmail.com","UNCC")
    const test = 'UNCC'
    expect(obj.school).toEqual(test)
  })
  it('should return role', ()=>{
    const obj = new Intern('Ron', 20, "fakemail@gmail.com","github")
    const test = 'Intern'
    expect(obj.role).toEqual(test)
  })
}) 