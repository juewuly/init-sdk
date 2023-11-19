import sdk from '../src'

describe('test sdk', () => {
  it('hello', () => {
    const result = sdk('test')
    expect(result).toEqual('hello test')
  })
})