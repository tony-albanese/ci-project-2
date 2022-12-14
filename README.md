![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

README
## TOC
- [Rock Paper Scissors Lizard Spock!](#rock-paper-scissors-lizard-spock-)
  * [Introduction](#introduction)
    + [User Stories](#user-stories)
  * [UX Design](#ux-design)
    + [Color and Font - Links to the show.](#color-and-font---links-to-the-show)
    + [Landing Page](#landing-page)
    + [Footer](#footer)
    + [Use of graphics](#use-of-graphics)
    + [Game Screen](#game-screen)
      - [Game Information Area](#game-information-area)
      - [Choice Images](#choice-images)
      - [Button Row](#button-row)
    + [Modal Overlays](#modal-overlays)
    + [Challenge Game](#challenge-game)
    + [Side menu](#side-menu)
    + [404 Error](#404-warning)
  * [Technology Used](#technology-used)
  * [Testing](#testing)
    + [Development Testing](#development-testing)
      - [Deploying a Local Server](#deploying-a-local-server)
      - [Development Testing Visual Components](#development-testing-visual-components)
      - [Development Testing Javascript](#development-testing-javascript)
    + [Unit Testing Javascript](#unit-testing-javascript)
    + [High Level Testing](#high-level-testing)
    + [Validator Testing](#validator-testing)
    + [Lighthouse Testing](#lighthouse-testing)
  * [Version Control Strategy](#version-control-strategy)
    + [VCS in Visual Studio Code](#vcs-in-visual-studio-code)
  * [Deployment](#deployment)
    + [Project Creation](#project-creation)
    + [Using Github Pages](#using-github-pages)
  * [Features left to implement](#features-left-to-implement)
  * [Credits](#credits)

# Rock Paper Scissors Lizard Spock!
## Introduction
Rock, Paper, Scissors, Lizard, Spock is a variation on the classic game Rock, Paper, Scissors. In the classic version, each of two players selects one of the three options to "show" their opponent by making a symbol with their fist. A fist for rock, an open hand with fingers together for paper, and two extended fingers (index and middle) for scissors. The winner is determined by the following rules : Scissors cuts paper, paper covers rock, and rock crushes scissors. The problem is that with only three choices, there are a limited number of outcomes and thus many games end up with a tie.

The solution, invented by Sam Kass and Karen Bryla ([The Big Bang Theory Fansite](https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/#:~:text=It%20was%20last%20mentioned%20in,has%2C%20rock%20crushes%20scissors.%22)), was to increase the number of options each player has available to the, thus the introduction of the lizard and Spock (the Science officer from the Star Trek franchise). The rules now are:

+ Scissors cuts Paper
+ Paper covers Rock
+ Rock crushes Lizard
+ Lizard poisons Spock
+ Spock smashes Scissors
+ Scissors decapitates Lizard
+ Lizard eats Paper
+ Paper disproves Spock
+ Spock vaporizes Rock
+ Rock crushes Scissors

With more options, there is a reduced liklihood of ending with a tie.

In normal gameplay, victory is mostly determined by chance unless the players are somewhow aware of a hidden strategy employed by the opponent. However, for players that know each other, patterns can emerge in gameplay.

The purpose of this project is to create an online game that allows the user to play Rock, Paper, Scissors, Lizard, Spock against the computer using chance and/or skill to win. The game can be found here: [Rock, Paper, Scissors, Lizard, Spock!](https://tony-albanese.github.io/ci-project-2/).

### User Stories

As a user I want to:
+ Play the game on a large screen, tablet, or mobile screen.
+ See all of the game elements should fit on one screen. No scrolling should be required to play the game.
+ Have some control the difficulty of the game
+ Use skill to increase my chances of winning the game
+ Have an intutitive and clear layout
+ Know where I stand as the game progresses
+ Have the option to play again or quit
+ Understand the meanings of the images intuitively
+ Understand why I have won or lost a round
+ See the connection to the Big Bang Theory
+ Access the rules of game easily

## UX Design

### Color and Font - Links to the show.
This game was made popular on the popular American TV Series "The Big Bang Theory" when Sheldon introduces the rules to the game. Many players of this game will likely feel some connection to the show and this is reflected in the color scheme and font choices.

The exact font used on the show is a trademark. The Anton font, availbale from Google Fonts, is one that is similar to that used on the show. The color scheme of the show was generated by coolers.io from an image of Sheldon's "Bazinga" shirt. Thus the blue and reddish colors used are based on the show's colors. Both color and iconography are combined in the title where the word "spock" is all capital and in the brick red color. This is in imitation of the shows logo which as similar typefacing. The borders and the buttons use the blue and red from the color palette which are similar to the show's. The background color was chosen to be related to but softer than the main colors so that the contrast is sharp enough.
![Color Palette](assets/screenshots/palette.png)
> See the connection to the Big Bang Theory

### Landing Page
The landing page is intended to inform the user of the purpose of the site as well as to inform them of the rules of the game.  The landing page consists of the following features:

A hero image with the title of the game along with a call to action to play the game. The image is that of a galaxy in order to evoke a connection to the TV show. The use of the actors' images or any item directly from the show might violate copyright, therefore the image was chosen to obliquely remind people of the Big Bang Theory. The show opens with a picture of the Milky Way and therefore I used an image similar to it. The font, Anton, is also similar to that used on the show.

After a few lines of text, the user can click a button to be directly taken to the game screen. The button color is based on a palette of colors from the show.
![hero image](assets/screenshots/hero.png)

Below the hero section are two groups of text that explain the rules of the game as well as how the challenge version of the game works. These blocks are placed below the hero section so the user has the option to look at the rules should they be unfamiliar with the game. If they are familiar, they can just click the button in the hero section and be taken directly to the game screen.

To provide some imagery to enhance the rather large block of text, an image showing the five images of rock, paper, scissors, lizard, spock is shown that encapsulates the rules of the game.
![rules](assets/screenshots/gameplay.png)
> Have an intutitive and clear layout  
> Understand the meanings of the images intuitively  
> Access the rules of game easily


The footer section contains the links required to properly cite the sources for the images use. The content of the links is provided by the content creators and is how they wish their work to be credited.
![footer](assets/screenshots/footer.png)

### Use of graphics
The question marks are used to cover the choices of the computer and user. They are colored using the variation of blue and red from the tv show.

The images for the choices were chosen for their soft colors and clarity of meaning. Most users would agree as to their meaning. The only one that might be unclear is the symbol for Spock which is the hand with palm out and fingers parted in two groups of two. This is the vulcan greeting. Although an icon of pop culture, not everyone might grasp the connection to Spock and not everyone might undesrstand who or what Spock is. An image of Mr Spock might run into copyright issues. Therefore the emoji for the vulcan greeting was used. These images are licensed for free use.
![tile images](assets/screenshots/tile-images.png)
> Understand the meanings of the images intuitively


### Game Screen
This is the screen where the game action takes place. This area is divided into three sections with images and components laid out in a horizontal grid.
> Have an intutitive and clear layout

#### Game Information Area
The top section contains a row of elements that are to display the player's choice, then the score board which presents the information on the current score and the current round, and then the area that displays the computer's choice. The coloring is different to create distinction and the color of the score is keyed to the color of player and computer. This was done to save screen real estate. 
![info area](assets/screenshots/info-area.png)
> Know where I stand as the game progresses

#### Choice Images
The second section contains a panel of five images (called "tiles") that represent the choices a player can make. These are placed in a flex display so that they are displayed in a single row on larger screens but wrap on smaller screens.
![choice images](assets/screenshots/tile-images.png)
![choice images wrapped](assets/screenshots/tiles-wrapped.png)
> Play the game on a large screen, tablet, or mobile screen.  

> See all of the game elements should fit on one screen. No scrolling should be required to play the game.

#### Button Row
The last section contains the play button to initiate gameplay.
![play button](assets/screenshots/play-button.png)
### Modal Overlays
The user must know not only what the current score is and what round they are on, but also must be provided with feedback as to what the outcome a particular round is, who the winner of the game is, and as to when to make a choice. One could use the alert() JavaScript method to display some information to the user. However, this is not ideal as the alert has generic styling that breaks the theming of the game. One could also employ dialogues from frameworks such as Bootstrap or Materialize. This also is not a good choice as these dialogue boxes are for applications. In commercial video games, dialogue boxes have a "gameified" look. I wanted to do that here.

The solution is to use a modal overlay. These are elements that cover the screen and prevent the user from interacting with the elements below. They are perfect for displaying information on top of the screen and then either be programmed to disappear automatically after a period of time or when the user dismisses them.

Overlays are simple HTML elements. Their initial display is set to none to make them initially invisible and then they can be programmatically made to appear and disappear as needed. These overalays are styled with CSS like any other HTML element.

I chose overlays to cover the entire screento prevent interaction. In additon, I styled it to have the same font and color scheme as the rest of the game. Overlays are used to announce the winner of a round, the winner of a game, and in the simple game, to prompt the user to make a choice by indivdiually flashing the words "Rock, Paper, Scissors, Lizard, Spock!". At the end of the game, in addition to being notified as to who won, the user is presented with two buttons offering the option to play again or to quit the game.
![end game overlay](assets/screenshots/winner-dialog.png)
> Have the option to play again or quit

Modal overlays are also used at the end of a particular round. It is not enough to know simply who one. The user must also know why they won or lost. Thus, a message is displayed next to the notification of a win or loss stating the game rule. For example, if the user selected rock and the computer Spock, then the overlay showing the following would appear: "You lose. Spock vaporizes rock." Or, if the user won, they would be told why. For example f the user chose paper and the computer chose rock, the message: "You won. Paper covers rock." would appear in the overlay.
![message overlay](assets/screenshots/message.png)
> Know where I stand as the game progresses  
> Understand why I have won or lost a round

### Challenge Game
In the analog game, two real players who are playing without strategy are relying on chance to win. The simple version of the computer game is entirely based on chance for a win. The computer picks a tile and the player selects a tile. The player does not see the computer's choice until they themselves have made a choice. Since the computer is not emplying any strategy in a choice, i.e. it is picking at random, then the user's chance of winning is determined randomly. However, the number of outcomes is sufficiently small to ensure the user will win sometimes, but not all time. And conversly, they will lose sometimes, but not all the time. This is key to ensuring a pleasant game experience. However, the game play can be repetative and a bit boring after a while. 

Therefore, I have implemented a challenge version of the game that allows the user to use some skill to increase their chance of winning. In the challenge version of the game, the user is presented with the computer's choice first. They then have a limited amount of time to make their own choice. So that means they must know the rules, perceive the computer's choice, and make the winning selection in time. If they fail to choose in the given time, they automatically lose. To prevent the user from getting too comfortable with the static layout of the image tiles, these are rearranged at the start of the round so the user has to quickly search for the winning tile in a new layout each round.

> Use skill to increase my chances of winning the game

### Side menu
Users expect any settings to be accessed from a menu. The side menu can be accessed by clicking on the settings icon in the upper left corner of the screen. Upon clicking this icon, a side menu is shown. Here, the user can choose the number of rounds in a game by manipulating the slider. The user can close the menu by clicking on the check button or navigate back to the home screen by clicking on the home button.
![side menu default](assets/screenshots/side-menu-default.png)
> Have some control the difficulty of the game

If the user checks on challenge mode check, a slider appears in which the user can choose the difficulty of the challenge game. On easy, the timing between the rounds is increased and on hard the time is decreased so the user has to make the choice faster.

![side menu challenge](assets/screenshots/side-menu-challenge.png)

> Use skill to increase my chances of winning the game  
> Have an intutitive and clear layout

### 404 Warning 
Should the user enter an invalid URL on the site, the following warning page is displayed along with a link to the home screen.
![404 error page](assets/screenshots/404-screenshot.png)

## Technology Used ##
* HTML
    * The site uses HTML5 to structure the page elements. Custom elements were employed to increase the readability of the HTML and to make the semantics clearer.
    * To implement the html tag, a class was created which extended the HTMLDivElement (since I wanted my custom elements to behave as divs)
    * Then the element tag was registered to this class in javascript.
    * I wrote the custom classes in TypeScript and transpiled them to JavaScript

    Here is an example of the custom tags:
    ```
    <game-play-panel class="flex-container game-play-panel-area">
            
        <player-card class="grid-container player-area">
            <h2 id="player-card-header" class="player-color player-area">You</h2>
            <img id="player-choice-card" src="assets/images/question-player.png" alt="A question mark" class="tile">
        </player-card>

        <score-board class="grid-container score-area">
            <h2>Score</h2>
            <p id="player-score" class="player-color">0</p>
            <p id="computer-score" class="computer-color">0</p>
            <p id="round">Round <span id="round-value">--</span></p>
        </score-board>

        <computer-card class="grid-container computer-area">
            <h2 id="computer-card-header" class="computer-color">Shelbot</h2>
            <img id="computer-choice-card" src="assets/images/question-computer.png" alt="A question mark." class="tile">
        </computer-card>

    </game-play-panel>
    ```
Here is how they are registered in TypeScript

```
class PlayerCard extends HTMLDivElement {
    constructor(){
        super();
    }
}

class ScoreBoard extends HTMLDivElement {
    constructor(){
        super();
    }
}

class ComputerCard extends HTMLDivElement {
    constructor(){
        super();
    }
}

customElements.define("player-card", PlayerCard, { extends: "div" });
customElements.define("score-board", ScoreBoard, { extends: "div" });
customElements.define("computer-card", ComputerCard, { extends: "div" });
```

* CSS
    * The site uses pure CSS3 to style the HTML elements. No libraries were used.
* JavaScript
    * The interactivity was written in vanilla JavaScript.
* [GIMP](https://www.gimp.org/)
    * GNU Image Manipulator Program. This powerful image editor was used to crop, scale, and adjust opacity of images.
* [Google Fonts](https://fonts.google.com/knowledge)
    * Three fonts, Heebo, Quicksand, and Nunito Sans were used in the site. They are available from Google Fonts.
* [Fontawesome](https://fontawesome.com/)
    * The icons on the landing page in the exam cards were from Fontawesome. I used the freely available font kit.
* [Coolers.co](https://coolors.co/)
    * I used their palette generator to generate the colors from the hero image using their free tool.
* [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
    * Using Firefox Developer Edition from Mozilla helped me diagnose layout and CSS problems as well as test differnt screen sizes. 


## Testing
### Development Testing
Throughout the development of the project, testing was performed. As elements were added or a CSS style was applied, the behavior was checked in the Firefox Developer Edition web browser as well as through the developer tools on Google Chrome. A local webserver was launched in python and then tested on these two browser.

#### Deploying a Local Server
To deploy the website locally for debug and design purposes, I opened a terminal and launched a python server by entering:

```
python3 -m http.server
```
A message with the URL of the webserver running on the local machine was then displayed. I copied the link and pasted it into my browser to see the webpages.

#### Development Testing Visual Components
For both the landing page and the game page, responsiveness was tested using the breakpoints in the Chrome browser's developer tools. For example, when I implemented the row of image tiles to serve as the user choices for selecting rock, paper, sciessors, etc, I openened the dev tools in Chrome by clicking on the three dots in the upper right corner, then selecting More Tools, and then selecting developer tools. From there, I would view the page at different breakbponts by clicking on the bars above the page. If I noticed text that was overlapping, or anything offscreen, then I would make a media query in CSS and adjust the layout to fix the issue.

#### Development Testing Javascript
Throughout the development of the project, the JavaScript methods were manually tested by either playing a section of the game and checking behavior or by using the console.log() method to check the state of variables throughout the course of the game in order to isolate bugs in code. Since this was a constant process, the examples are too numerous to list. However, I will give a few examples of how the JavaScript was tested for some key components of the game.

__Shuffling the Tiles__
The shuffling of the tiles was a key feature of the challenge game. In order to do that, all of the children in the <game-tile-element> had to be fetched, copied into an array, and shuffled. The children were fetched using the method:

```
function shuffleTiles() {

    let tilePanelArray = document.getElementsByTagName("game-tile-panel");
    let tilePanel = tilePanelArray[0];

    console.log(tilePanel); //Verify I have all of the children of the tile panel.
    let newTileArray = [];

    let tiles = tilePanel.children;
    console.log(tiles); //Verify I have all of the children of the tile panel.
    for (let i = 0; i < tiles.length; i++) {
        newTileArray.push(tiles[i]);

    }
    console.log(newTileArray); //Verify the elements are copied into the new array.
    newTileArray = shuffle(newTileArray);
    console.log(newTileArray); // Verify the elements are shuffled.

    tilePanel.innerHTML = "";

    for (let tile of newTileArray) {
        tilePanel.appendChild(tile);
    }
}
```

The console.log() statements are used to show the states of the variables holding the collection or arrays of elements as the method is executed. For example, I expect to see five elements in newTileArray after the first for loop. Then, after calling the shuffle array method, I should see that they are shuffled by printing them to the console. The final result was checked manually by seeing if the tiles were reshuffled after each round in the challenge game.

__Rounds__
The variables to keep track of the current round was also tracked using console.log().

```
async function launchEasyGameSequence() {
console.log(currentRound);
    if (currentRound < maxRounds) {
        boardReady = true;
        currentRound++;
        console.log(currentRound);
        document.getElementById("round-value").innerText = currentRound;
        resetImages();
        showStartRoundDialogue();

    } else {

        let winner = determineGameWinner();
        alertWinner(winner);
        boardReady = false;
    }
}
```
In this example, currentRound value was checked before the if statement to ensure that the correct value was being compared and then after the increment operation to ensure it would be incremented. I expected to see the values incremented in both log statements which is what occurred.

### Unit Testing Javascript
Ideally, unit testing would be performed on each method using a library such as jest. Unit testing is beyond the scope of this project and the implementation is not architected in such a way as to lend itself to unit testing. For a simple game such as this, the architecture of having many independant methods works fine.

However, a better architecture would be to have these methods grouped into classes and then use dependency injection and mocking to make the methods more testable. As currently written, the methods reference the DOM and thus unit testing them becomes extremely difficult.

An approximation of unit testing was done for the hashmap. The function was copied into a class on a separate script as a static method. The method was then called with each possible combination of input and the output logged to the console to be manually checked.

```
/**
 * This class contains a copy of the method used to return a hashmap off all the possible responses based on the 
 * the possible combinations of keys. 
 */
class TestMethods {

    static createResponseMap() {
        let responseMap = new Map();

        responseMap.set('scissorspaper', 'Scissors cuts paper.');
        responseMap.set('paperscissors', 'Scissors cuts paper.');

        responseMap.set('paperrock', 'Paper covers rock.');
        responseMap.set('rockpaper', 'Paper covers rock.');

        responseMap.set('rocklizard', 'Rock crushes lizard.');
        responseMap.set('lizardrock', 'Rock crushes lizard.');

        responseMap.set('lizardspock', 'Lizard poisons Spock.');
        responseMap.set('spocklizard', 'Lizard poisons Spock.');

        responseMap.set('spockscissors', 'Spock smashes scissors');
        responseMap.set('scissorsspock', 'Spock smashes scissors');

        responseMap.set('scissorslizard', 'Scissors decapitates lizard.');
        responseMap.set('lizardscissors', 'Scissors decapitates lizard.');

        responseMap.set('lizardpaper', 'Lizard eats paper.');
        responseMap.set('paperlizard', 'Lizard eats paper.');

        responseMap.set('paperspock', 'Paper disporoves spock');
        responseMap.set('spockpaper', 'Paper disporoves spock');

        responseMap.set('spockrock', 'Spock vaporizes rock.');
        responseMap.set('rockspock', 'Spock vaporizes rock.');

        responseMap.set('rockscissors', 'Rock crushes scissors.');
        responseMap.set('scissorsrock', 'Rock crushes scissors.');

        return responseMap;
    }
}

module.exports = TestMethods;

/**
 * This method ensures that the map returns the correct string for every key by printing the string
 * to the console.
 */
function testMap() {
    let map = TestMethods.createResponseMap();
    console.log(map.get("scissorspaper"));
    console.log(map.get("paperscissors"));
    console.log(map.get("paperrock"));
    console.log(map.get("rockpaper"));
    console.log(map.get("rocklizard"));
    console.log(map.get("lizardrock"));
    console.log(map.get("lizardspock"));
    console.log(map.get("spocklizard"));
    console.log(map.get("spockscissors"));
    console.log(map.get("scissorsspock"));
    console.log(map.get("scissorslizard"));
    console.log(map.get("lizardscissors"));
    console.log(map.get("lizardpaper"));
    console.log(map.get("paperlizard"));
    console.log(map.get("paperspock"));
    console.log(map.get("spockpaper"));
    console.log(map.get("spockrock"));
    console.log(map.get("rockspock"));
    console.log(map.get("rockscissors"));
    console.log(map.get("scissorsrock"));
}

testMap();

```
Here is the output:
```
[Running] node "/home/tony/CodeInstitute/ci-project-2/test/testclass.js"
Scissors cuts paper.
Scissors cuts paper.
Paper covers rock.
Paper covers rock.
Rock crushes lizard.
Rock crushes lizard.
Lizard poisons Spock.
Lizard poisons Spock.
Spock smashes scissors
Spock smashes scissors
Scissors decapitates lizard.
Scissors decapitates lizard.
Lizard eats paper.
Lizard eats paper.
Paper disporoves spock
Paper disporoves spock
Spock vaporizes rock.
Spock vaporizes rock.
Rock crushes scissors.
Rock crushes scissors.

```

### High Level Testing
High level testing was performed. The accuracy of navigation was tested for proper functionality. Website layout responsiveness was tested on the Chrome, Firefox, Opera, and Safari web browsers running on laptops. In addtion to testing layout responsiveness, the gameplay was tested. The testing performed can be found in the following document whose size prevents clear reading here.

[High level testing table.](assets/screenshots/test-cases.pdf)

### Validator Testing
All Pages were run through the [W3C HTML Validator](https://validator.w3.org/) and showed no errors.  
CSS Stylesheet was run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator) and showed no errors.  

### Lighthouse Testing
A lighthouse report was generated for both the landing page and the game page and for both desktop and mobile. Here are the lighthouse reports:

+ Game Page Desktop 

![lighthouse report game desktop](assets/screenshots/game-lighthouse-desktop.png)
+ Game Page Mobile 

![lighthouse report game mobile](assets/screenshots/game-lighthouse-mobile.png)
+ Landing Page Desktop 

![lighthouse report landing page desktop](assets/screenshots/landing-page-lighthouse-desktop.png)
+ Landing Page Desktop 

![lighthouse report landing page mobile](assets/screenshots/landing-page-lighthouse-mobile.png)


## Version Control Strategy
Git was employed in this project and the project code hosted on [GitHub](https://github.com/). I used branches in order to keep the main branch as "pure" as possible. The strategy was to have each branch dedicated to one feature or fix.  Once I was satisfied at a particular stage of a branch, I would navigate to GitHub, click on my repository, select the branch, and create a pull request. GitHub would then check if there are no conflicts and indicate if the branch could be merged into main. (One can choose which branch to merge into.) Once the pull request is created, I navigated down, wrote a comment, and clicked on the green Merge button and the commits would be merged into the main branch.

I tried to keep commits as atomic as possible - focusing only one one element or feature at a time. This was not always the case, but most of the commits are realtively small changes.

### VCS in Visual Studio Code
To make a commit, I clicked on the branch icon in the sidebar of the ide. There, one could see all the files that had changed since the last commit. To stage commits, I clicked on the plus icon next to the file that I wanted to stage. If I thought changes in different files should be commited together, I added multiple files. Occasionaly, after adding a bug or a breaking change, I would discard my changes by clicking in the left curly arrow icon. I then added a commit message in the textfield at the top of the sidebar which was as descriptive and brief as possible. I then clickd on the Commit button. To push, I clicked on the three dot icon and selected push.


## Deployment

### Project Creation
* The project was started by navigating to the [template] and clicking 'Use this template'. Under Repository name I input ci-project-2. I then navigated to the new [repository for project 2](https://github.com/tony-albanese/ci-project-2). 

### Using Github Pages
1. Navigate to the GitHub [Repository: Project 2](https://github.com/tony-albanese/ci-project-2)
1. Click the 'Settings' Tab.
1. Scroll Down to the Git Hub Pages on the left panel.
1. Select Deploy from a Branch
1. Select 'main' as the source.
1. Click the Save button.
1. Click on the link to go to the live deployed page.

## Features left to implement
+ A visual timer would help the user to see how much time they have left.
+ Having keyboard entry for the choices would also be a good feature for users that are not comfortable using a mouse (or trackpad)

The biggest feature to implement would actually be done under the hood. Each part of the game could be broken into classes and their data and methods encapsulated. This would allow for the implementation of a publish/subscribe pattern. For example, the scoreboard could be a class as would the game data state. The scoreboard could observe the score and upon change, update the UI. The game state object would emit the new score to its observers whenever the score was updated. Such an architecture is easier to test, debug, and allows for the separation of concerns among app components.

## Credits
- The images on the game page were taken were take from flaticon.com and are used with permission.
- The background images on the landing page were taken from [wikimedia commons](https://commons.wikimedia.org/wiki/Main_Page) and are cited on the page. 
- I used a switch block and case statements to determine the winner of each round. The switch was based on a unique string made from the user and computer tile choices. The inspiration for this method came from the YouTuber Ania Kubow on her Channel "Code with Ania Kubow" in which she shows how to code a rock paper scissors game. [3 ways to code Rock Paper Scissors in JavaScript (Beginner to Intermediate to Advanced!)](https://www.youtube.com/watch?v=RwFeg0cEZvQ)
- Most programming languages have a built in methods for shuffling the contents of an array. JavaScript does not. The method I used to shuffle the contents of the tile card array was taken from [stackoverflow](https://stackoverflow.com/) and can be found here: [Randomize a JavaScript array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
- The initial styling for the overlay came from [W3Schools How To Create a Modal Box](https://www.w3schools.com/howto/howto_css_modals.asp). I took the CSS they used and just tweaked a few settings for my own design.
- Initial styling for the slider came [W3Schools How TO - Range Sliders](https://www.w3schools.com/howto/howto_js_rangeslider.asp).
- The code for the sleep() method was taken from this [blog](https://blog.devgenius.io/how-to-make-javascript-sleep-or-wait-d95d33c99909)