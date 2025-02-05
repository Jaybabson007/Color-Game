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

      
    })    