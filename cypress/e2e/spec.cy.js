describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
