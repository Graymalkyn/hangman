var words = ["hangman", "javascript", "house", "monkey", "table", "chair", "coffee", "island", "mirror", "ottoman", "fountain", "feature", "water", "beginning", "green", "tailor", "hypertext", "markup", "language", "captain"];

var word = words[Math.floor(Math.random() * words.length)];

var AnswerArray = [];
  for (var i = 0; i < word.length; i++){
    AnswerArray[i] = "_";
  }

  var remainingLetters = word.length;

  while (remainingLetters > 0) {

    alert(AnswerArray.join(" "));

    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Please enter only one letter");
    }else {
      for (var j = 0; j < word.length; j++){
        if (word[j] === guess) {
          AnswerArray[j] = guess;
          remainingLetters--;
        }
      }
    }


  }


  alert(AnswerArray.join(" "));
  alert("Good Job! The answer was " + word);
