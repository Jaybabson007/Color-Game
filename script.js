document.addEventListener("DOMContentLoaded", () => {
    // Game state
    let score = 0
    let correctColor = ""
  
    // DOM elements
    const colorBox = document.querySelector('[data-testid="colorBox"]')
    const colorOptions = document.querySelectorAll('[data-testid="colorOption"]')
    const gameStatus = document.querySelector('[data-testid="gameStatus"]')
    const scoreElement = document.querySelector('[data-testid="score"]')
    const newGameButton = document.querySelector('[data-testid="newGameButton"]')

    