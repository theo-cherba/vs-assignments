function forception(people, alphabet) {
    var output = []
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i < people.length; i++) {
        output.push(people[i] + ":");
        split = alphabet.split("")
        for (var j = 0; j < split.length; j++) {
            console.log("here")
            output.push(split[j].toUpperCase())
            
        }
    }
    return output
}

console.log(forception())