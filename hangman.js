var words = ["hangman", "javascript", "house", "dog", "cat", "monkey", "table", "chair", "coffee", "island", "mirror", "ottoman", "fountain", "feature", "water", "red", "green", "blue", "hypertext", "markup", "language"];

var word = words[Math.floor(Math.random() * words.length)];

var AnswerArray = [];
  for (var i=0, i < word.length, i++){
    AnswerArray[i] = "_";
  }

  var remainingLetters = word.length;

  alert(AnswerArray.join(" "));
