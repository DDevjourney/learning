This is a guessing game. You write a maximum number, and you have to guess it until you find the right number or you quit. Each time you enter a valid value, your attempts will increase by 1.

1. maximum: This variable is used to add a maximum number for the game. If the added value is not a number, the player will be informed to add a valid number.

2. targetNum: This variable randomly calculates a value between 1 and the maximum number entered by the player (i.e., the maximum variable).

3. guess: This variable prompts the player to make their first guess or enter "q" to quit the game. By adding "parseInt" before the "guess" variable, we convert that value into a number.

  -If the "guess" variable is not equal to "targetNum", is not a number, and is "q", the loop breaks, and "OK, YOU QUIT" will appear on the screen.
  -If the "guess" variable is not equal to "targetNum", is not a number, and is not "q", "Invalid guess. Please enter a number or 'q' to quit" will appear on the screen.

  -If the "guess" variable is not equal to "targetNum" and is a number greater than the "targetNum" variable, "Too high! Enter a new guess:" will appear on the screen.
  -If the "guess" variable is not equal to "targetNum" and is a number less than the "targetNum" variable, "Too low! Enter a new guess:" will appear on the screen.
  -If the "guess" variable is equal to "targetNum", "CONGRATS YOU WIN!" will appear on the screen, along with You got it! It took you ${attempts} guesses, showing the total number of attempts.
attempts: This variable starts at one and serves as a counter for the number of attempts it will take the player to guess the number.


