let btn = document.getElementById("btn");
let text = document.getElementById("text");
const orb = document.querySelector(".voice-orb");
let openingText = "I am Aiva, your virtual assistant.";
let opening_text = document.getElementById("opening-text");
let description = document.getElementById("description");
let startBtn = document.getElementById("btn-start");

function speak(text) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  speech.lang = "en-GB";

  const setVoice = () => {
    let voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) =>
        (voice.lang === "en-GB" && voice.name.includes("Female")) ||
        voice.name.includes("Google UK English Female")
    );
    if (femaleVoice) speech.voice = femaleVoice;

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener("voiceschanged", setVoice);
    } else {
      setVoice();
    }
  };
  // Add a class to the orb to animate it
  speech.onstart = () => orb.classList.add("speaking");
  speech.onend = () => orb.classList.remove("speaking");
  speech.onerror = () => orb.classList.remove("speaking");

  window.speechSynthesis.speak(speech);
}

function greet() {
  let currentHour = new Date().getHours();

  if (currentHour < 12) {
    speak("Good morning." + openingText);
  } else if (currentHour < 18) {
    speak("Good afternoon." + openingText);
  } else {
    speak("Good evening." + openingText);
  }
}

startBtn.addEventListener("click", () => {
  greet();
  startBtn.style.display = "none";
  btn.style.display = "flex";
  opening_text.style.display = "flex";
  description.style.display = "flex";
});

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onresult = (event) => {
  let transcript = event.results[0][0].transcript;
  text.innerText = transcript;
  // console.log(transcript);
  takecommand(transcript.toLowerCase());
  orb.style.display = "none";
};

recognition.onerror = (event) => {
  speak("I'm sorry, I didn't understand that. Can you please repeat?");
  console.error("Speech recognition error:", event.error);
  orb.style.display = "none";
  btn.style.display = "flex";
};

const commands = {
  hello: () => speak("Hello! How can I help you today?"),
  hi: () => speak("Hello! How can I help you today?"),
  "who are you": () =>
    speak("I am Aiva - your virtual assistant created by Sakina."),
  "open youtube": () => {
    speak("Opening YouTube for you.");
    window.open("https://www.youtube.com/", "_blank");
  },
  time: () => {
    let currentTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
    });
    speak("The current time is " + currentTime);
  },
  date: () => speak("The current date is " + new Date().toLocaleDateString()),
  "what is your name": () =>
    speak("My name is Aiva, your virtual assistant created by Sakina."),
  "what can you do": () =>
    speak(
      "I can help you with various tasks like opening websites, telling the time, and answering questions. Just ask!"
    ),
  "tell me a joke": () =>
    speak("Why did the computer go to the doctor? Because it had a virus!"),
  "how are you": () =>
    speak(
      "I am just a program, but thank you for asking! How can I assist you today?"
    ),
  "open google": () => {
    speak("Opening Google for you.");
    window.open("https://www.google.com/", "_blank");
  },
  "open gmail": () => {
    speak("Opening Gmail for you.");
    window.open("https://mail.google.com/", "_blank");
  },
  "open facebook": () => {
    speak("Opening Facebook for you.");
    window.open("https://www.facebook.com/", "_blank");
  },
  "open instagram": () => {
    speak("Opening Instagram for you.");
    window.open("https://www.instagram.com/", "_blank");
  },
  "open twitter": () => {
    speak("Opening Twitter for you.");
    window.open("https://www.twitter.com/", "_blank");
  },
  "open linkedin": () => {
    speak("Opening LinkedIn for you.");
    window.open("https://www.linkedin.com/", "_blank");
  },
  "open whatsapp": () => {
    speak("Opening WhatsApp for you.");
    window.open("whatsapp://", "_blank");
  },
  "open spotify": () => {
    speak("Opening Spotify for you.");
    window.open("https://www.spotify.com/", "_blank");
  },
  "open netflix": () => {
    speak("Opening Netflix for you.");
    window.open("https://www.netflix.com/", "_blank");
  },
  "open github": () => {
    speak("Opening GitHub for you.");
    window.open("https://github.com/", "_blank");
  },
  "open calculator": () => {
    speak("Opening Calculator for you.");
    window.open("calculator://", "_blank");
  },
  "open settings": () => {
    speak("Opening Settings for you.");
    window.open("settings://", "_blank");
  },
  "open camera": () => {
    speak("Opening Camera for you.");
    window.open("camera://", "_blank");
  },
  "thank you": () =>
    speak("You're welcome! If you need anything else, just ask."),
  goodbye: () => {
    speak("Goodbye! Have a great day.");
  },
};

function takecommand(command) {
  btn.style.display = "flex";
  orb.style.display = "none";

  for (let key in commands) {
    if (command.includes(key)) {
      commands[key]();
      return;
    }
  }

  // Default response if no command matches
  speak("Searching for " + command.replace("aiva", "") + " on Google.");
  window.open(
    "https://www.google.com/search?q=" +
      encodeURIComponent(command.replace("aiva", "")),
    "_blank"
  );
}

btn.addEventListener("click", () => {
  recognition.start();
  orb.style.display = "grid";
  btn.style.display = "none";
  description.style.display = "none";
});
