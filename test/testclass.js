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



function testMap(){
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