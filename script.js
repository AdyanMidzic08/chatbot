let output = document.getElementById('Chatbot-Output');

let counter = 0;

const greetings = [
  "Hello!",
  "Hi there!",
  "Hey!",
  "Howdy!",
  "Greetings!",
  "Good day!",
  "Yo!",
  "What's up?",
  "Nice to see you!",
  "Salutations!"
];

const colorResponses = [
  "Nice color!",
  "I don't like it.",
  "That color is awesome!",
  "Hmm, not my favorite.",
  "Cool choice!",
  "Interesting!"
];

const jobResponses = [
  "Wow, that sounds interesting!",
  "Nice choice!",
  "Hmm, not sure about that.",
  "Cool, I like it!",
  "Really? That’s unique!",
  "I see, good for you!"
];

const goodbyeResponses = [
  "Goodbye!",
  "See you soon!",
  "Take care!",
  "Bye-bye!",
  "Catch you later!",
  "It was nice chatting with you!",
  "Have a great day!",
  "See you next time!",
  "Bye!",
  "Take it easy!"
];

const emailResponses = [
  "Nice email address!",
  "Cool domain!",
  "That’s a funny email 😄",
  "Looks professional!",
  "Interesting email!",
  "I like that one!",
  "That’s a cool choice!",
  "Very unique email!",
  "Simple and clean — I like it!",
  "Classic! 👍"
];

function showLoadingAnimation(callback) {
  // Alles löschen
  output.innerHTML = '';

  // Animation + Text anzeigen
  output.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      height: 300px;
    ">
      <img src="./img/Spin-Animation.gif" alt="Loading..." style="width: 80px; height: 80px;">
      <p style="color: #fff; font-size: 1.2rem;">Loading...</p>
    </div>
  `;

  // Nach 1 Sekunde: Chatbot-Funktion aufrufen
  setTimeout(callback, 1000);
}




let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
let randomColorResponse = colorResponses[Math.floor(Math.random() * colorResponses.length)]
let randomJobResponse = jobResponses[Math.floor(Math.random() * jobResponses.length)]
let randomGoodbyeResponse = goodbyeResponses[Math.floor(Math.random() * goodbyeResponses.length)]
let randomEmailResponse = emailResponses[Math.floor(Math.random() * emailResponses.length)]

let nameToShow = "";
function nextStep() {
  showLoadingAnimation(Chatbot);
}

function reloadPage() {
  location.reload();
}

function submitName() {
  let gretting = document.getElementById('gretting');
  nameToShow = document.getElementById('input').value
  gretting.innerHTML = randomGreeting + ' ' + nameToShow;
  showLoadingAnimation(Chatbot);
}
let colorVariable = "";
function submitColor() {
  colorVariable = document.getElementById('input').value
  output.innerHTML = '';
  output.innerHTML += '<h1 id="Chat-Headline">ChatBot</h1> <br> '
  output.innerHTML = '<h2>' + colorVariable + ' ' + randomColorResponse + '</h2>'
  output.innerHTML += '<div id="submit" onclick="nextStep()">Next</div>';
}
let job = "";
function submitJob() {
  job = document.getElementById('input').value
  output.innerHTML = '';
  output.innerHTML += '<h1 id="Chat-Headline">ChatBot</h1> <br> '
  output.innerHTML = '<h2>' + job + ' ' + randomJobResponse + '</h2>'
  output.innerHTML += '<div id="submit" onclick="nextStep()">Next</div>';
}
let email = "";
function submitEmail() {
  email = document.getElementById('input').value
  output.innerHTML = '';
  output.innerHTML += '<h1 id="Chat-Headline">ChatBot</h1> <br> '
  output.innerHTML = '<h2>' + email + ' ' + randomEmailResponse + '</h2>'
  output.innerHTML += '<div id="submit" onclick="nextStep()">Next</div>';
}

function Portfolio() {
  output.innerHTML = '';
  output.innerHTML += '<h1 id="Chat-Headline">ChatBot</h1> <br> '
  output.innerHTML = '<h2 id="gretting">' + nameToShow + ' ' + "Here is your Portfolio" + '</h2>'
  output.innerHTML += '<div id="Portfolio"> <p style="text-align: center;">Portfolio</p>' + '<br>' +
    '<p> Name: ' + nameToShow + '</p>' +
    '<p> Favourite Color: ' + colorVariable + '</p>' +
    '<p> Job: ' + job + '</p>' +
    '<p> Email: ' + email + '</p></div>' +
    '<div onclick="reloadPage()" id="submit">New Chat</div>';
  let portfolioDesign = document.getElementById('Portfolio');
  portfolioDesign.style.borderLeft = "5px solid " + colorVariable;
}

function Chatbot() {
  counter++;

  switch (counter) {

    case 1:
      output.innerHTML =
        '<h1 id="Chat-Headline">ChatBot</h1> <br> '
        + '<h2 id="gretting">' + randomGreeting + ' what is you name? ' + nameToShow + '</h2>'
        + '<br>' +
        ' <div id="Grid"> <input placeholder="Name..." id="input" type="text"> <div onclick="submitName()" id="submit">Submit</div> </div>'
      break;
    case 2:
      output.innerHTML =
        '<h1 id="Chat-Headline">ChatBot</h1> <br> '
        + '<h2 id="gretting">' + randomGreeting + ' ' + nameToShow + '! ' + "What is your favourite Color??" + '</h2>'
        + '<br>' +
        ' <div id="Grid"> <input placeholder="Name..." id="input" type="color"> <div onclick="submitColor()" id="submit">Submit</div> </div>'
      break;
    case 3:
      output.innerHTML =
        '<h1 id="Chat-Headline">ChatBot</h1> <br> '
        + '<h2 id="gretting">' + 'Please tell me about your Job???' + '</h2>'
        + '<br>' +
        ' <div id="Grid"> <input placeholder="job..." id="input" type="text"> <div onclick="submitJob()" id="submit">Submit</div> </div>'
      break;
    case 4:
      output.innerHTML =
        '<h1 id="Chat-Headline">ChatBot</h1> <br> '
        + '<h2 id="gretting">' + 'Can I get ur Email-Adress' + '</h2>'
        + '<br>' +
        ' <div id="Grid"> <input placeholder="Email..." id="input" type="email"> <div onclick="submitEmail()" id="submit">Submit</div> </div>'
      break;
    case 5:
      output.innerHTML =
        '<h1 id="Chat-Headline">ChatBot</h1> <br> '
        + '<h2 id="gretting">' + nameToShow + ' ' + randomGoodbyeResponse + '</h2>'
        + '<br>' +
        '<h2>Go check out your Portfolio</h2>' + '<br>' +
        ' <div onclick="Portfolio()" id="submit">next</div>';
      break;
  }
}
showLoadingAnimation(Chatbot);


