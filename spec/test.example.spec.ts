import { expect } from 'chai'

describe('Example test suit', () => {
  before(() => {
    console.log('Running before hook')
    // Uncomment next line to simulate error in before hook
    // throw new Error('Oops! unexpected error was thrown')
  })
  beforeEach(() => {
    console.log('Running beforeEach hook')
  })

  it('should test functionality1', () => {
    console.log('Running test 1')
    expect(true).to.equal(true)
  })
  it('should test functionality2', () => {
    console.log('Running test 2')
    expect(true).to.equal(true)
  })
  it.skip('should test functionality3', () => {
    console.log('Running test 3')
    expect(true).to.equal(true)
  })
  it.skip('should test functionality4', () => {
    console.log('Running test 4')
    expect(true).to.equal(true)
  })
  it('should test functionality5', () => {
    console.log('Running test 5')
    expect(true).to.equal(true)
  })

  afterEach(() => {
    console.log('Running afterEach hook')
  })

  after(() => {
    console.log('Running afterEach hook')
  })
})
