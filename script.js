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
  
    // Color palette (predefined set of colors)
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEEAD",
      "#D4A5A5",
      "#9B59B6",
      "#3498DB",
      "#E74C3C",
      "#2ECC71",
      "#F1C40F",
      "#1ABC9C",
      "#D35400",
      "#C0392B",
      "#8E44AD",
      "#2980B9",
      "#27AE60",
      "#F39C12",
    ]
  
    // Generate a random color from the palette
    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)]
    }
  
    // Generate random colors for options, including the correct one
    function generateColorOptions(correctColor) {
      const options = [correctColor]
      while (options.length < 6) {
        const newColor = getRandomColor()
        if (!options.includes(newColor)) {
          options.push(newColor)
        }
      }
      return shuffleArray(options)
    }
  
    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    }
  
    // Update game status with animation
    function updateGameStatus(message, isCorrect) {
      gameStatus.textContent = message
      gameStatus.className = "game-status"
      void gameStatus.offsetWidth // Trigger reflow for animation
      gameStatus.classList.add(isCorrect ? "correct" : "wrong")
    }
  
    // Handle color option click
    function handleColorClick(clickedColor) {
      if (clickedColor === correctColor) {
        score++
        scoreElement.textContent = score
        updateGameStatus("Correct! Well done! 🎉", true)
        setTimeout(startNewGame, 1500)
      } else {
        updateGameStatus("Wrong! Try again! 🤔", false)
      }
    }
  
    // Start a new game
    function startNewGame() {
      // Reset game status
      gameStatus.textContent = ""
      gameStatus.className = "game-status"
  
      // Generate new correct color
      correctColor = getRandomColor()
      colorBox.style.backgroundColor = correctColor
  
      // Generate and assign color options
      const options = generateColorOptions(correctColor)
      colorOptions.forEach((option, index) => {
        option.style.backgroundColor = options[index]
  
        // Remove old event listeners
        option.replaceWith(option.cloneNode(true))
  
        // Add new event listener
        document.querySelectorAll('[data-testid="colorOption"]')[index].addEventListener("click", () => {
          handleColorClick(options[index])
        })
      })
    }
  
    // Reset game
    function resetGame() {
      score = 0
      scoreElement.textContent = score
      startNewGame()
    }
  
    // Event listeners
    newGameButton.addEventListener("click", resetGame)
  
    // Initialize the game
    startNewGame()
  })
  
  