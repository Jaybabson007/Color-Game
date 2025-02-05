# Color-Game

A fun and interactive color guessing game built with vanilla JavaScript, HTML, and CSS. Test your color recognition skills by matching the displayed color with the correct option.

## Features

- 🎨 Random color generation from a curated palette
- 🎯 Six color options to choose from
- 📊 Score tracking
- ✨ Animated feedback for correct and wrong answers
- 📱 Responsive design for all devices
- 🔄 New game functionality

## Game Rules

1. A random color is displayed in the main color box
2. Six different color options are shown below
3. Click on the color option that matches the main color box
4. Score points for correct guesses
5. Try to achieve the highest score possible!

## Technical Implementation

### HTML Structure

The game uses semantic HTML with data-testid attributes for testing:

- `data-testid="colorBox"` - Main color display
- `data-testid="colorOption"` - Color choice buttons
- `data-testid="gameInstructions"` - Game instructions
- `data-testid="gameStatus"` - Feedback messages
- `data-testid="score"` - Score display
- `data-testid="newGameButton"` - New game button

### CSS Features

- Flexbox and Grid layouts for responsive design
- CSS animations for feedback
- Hover effects for interactive elements
- Mobile-first responsive design
- Smooth transitions and transforms

### JavaScript Functionality

- Random color generation
- Fisher-Yates shuffle algorithm for color options
- Event handling for user interactions
- Score management
- Game state management
- Animated feedback system

## Browser Support

The game works in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Minimal DOM manipulation
- Efficient event handling
- Optimized animations
- No external dependencies

## Future Enhancements

- Different difficulty levels
- Custom color palettes
- High score tracking
- Time-based challenges
- Color mixing mode

## Author
- ### Joel Yahaya

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.