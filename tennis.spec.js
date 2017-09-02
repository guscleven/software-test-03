function TennisGame(){

  CountA = 0;
  CountB = 0;
  this.reset = () => {

  }
  this.echo = () => {
    return 'Love - Love'
  }
  this.Agetpoint = () => {
    CountA++
  }
  this.Bgetpoint = () => {
    CountB++
  }
  this.showScore = () => {
    if(CountA = 1){
      return 'Fifteen - Love'
    }
  }
}
test('Echo "Love - Love" when game start' , () => {

  //Arrange
  let app = new TennisGame()

  //Act
  app.reset()
  let result = app.echo()

  //Assert
  expect(result).toBe('Love - Love')

})

test('Echo "Fifteen - Love" when Player A get a point' , () => {

  //Arrange
  let app = new TennisGame()
  app.reset()
  app.Agetpoint()

  //Act
  let result = app.showScore()

  //Assert
  expect(result).toBe('Fifteen - Love')
})
