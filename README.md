### SET

My rendition of the SET card game, developed with React and SASS.

https://en.wikipedia.org/wiki/Set_(card_game)

**More about the game** 

1. The deck includes 81 cards, each having 4 distinct parameters (color, shading, shape, and number of elements). 

2. Each card appears on the board only once. At the beginning of the game, there are 12 cards on the board.

3. The goal is to find *sets* of three cards that simultaneously have:
- the same colour or all different colours
- the same shape or all different shapes
- the same shading or all different shadings
- the same number of elements or all different numbers of elements.

4. Be as fast as you can (in the original game, you need to find sets faster than your opponent).

5. If there are no sets on the board, you can click on the "check for sets" button to display three additional cards. 

6. When you pair the extra cards to make a set, they will not be replaced with new cards - the goal is to always have a total of 12 cards on the board.

7. If you click on the button and it turns out that you missed a set that was already on the board, 3 additional seconds will be added to your final score.

**Plans for further development**

1. Saving results to firebase and displaying them in the Results tab.
2. A more interactive, animated version of Rules.
3. Tutorial mode with tooltips explaining how to play.
4. AI mode where the user plays against the computer.