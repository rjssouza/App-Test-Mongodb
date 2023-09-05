function greet(word) {      
    return word;
}

function greetWithPunctuation(word) {
    return greet(word);
}

// Function exported to App Services
exports = greetWithPunctuation;

// export locally for use in unit test
if (typeof module !== "undefined") {
    module.exports = greetWithPunctuation;
}