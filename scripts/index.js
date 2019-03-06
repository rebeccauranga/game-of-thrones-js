
// function namesThatStartWithA (listOfCharacters) {
    //     let count = 0;
    //     if (characters.indexOf(name, 1));
    //         count ++;
    //         console.log(count);
    // }
    
    ///////////////////////////////////////////////////////
    
// Hot Pie
    
function whoIsHotPie(characters) {
    console.log(`There are ${characters.length} characters in the array.`);
    const arrayOfHotPies = characters.filter(function(person) {
        return person.name === "Hot Pie";
    });
    // console.log(arrayOfHotPies);
    if (arrayOfHotPies.length === 1) {
        const hotPie = arrayOfHotPies[0];
        // console.log(hotPie.playedBy);
        return hotPie.playedBy[0]
    } else {
        return "no hot pie";
    }
}

function findActorFor(characters, characterName) {
    const arrayOfHotPies = characters.filter(function(person) {
        return person.name === characterName;
    });
    // console.log(arrayOfHotPies);
    if (arrayOfHotPies.length === 1) {
        const hotPie = arrayOfHotPies[0];
        // console.log(hotPie.playedBy);
        return hotPie.playedBy[0]
    } else {
        return "no hot pie";
    }
}
