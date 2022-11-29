const { mapFileCommentRegex } = require("convert-source-map");
const { resolveWatchPlugin } = require("jest-resolve");

function createResponseMap(){
    let responseMap = new Map();

    responseMap.set('scissorspaper', 'Scissors cuts paper.');
    responseMap.set('paperrock', 'Paper covers rock.');
    responseMap.set('rocklizard','Rock crushes lizard.');
    responseMap.set('lizardspock', 'Lizard poisons Spock.');
    responseMap.set('spockscissors', 'Spock smashes scissors');
    responseMap.set('scissorslizard', 'Scissors decapitates lizard.');
    responseMap.set('lizardpaper', 'Lizard eats paper.');
    responseMap.set('paperspock', 'Paper disporoves spock');
    responseMap.set('spockrock', 'Spock vaporizes rock.');
    responseMap.set('rockscissors', 'Rock crushes scissors.');
   
    return responseMap;
}



var map = createResponseMap();

var response = map.get('spockrock');
console.log(response);

