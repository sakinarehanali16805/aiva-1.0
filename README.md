Aiva 1.0 🎙️

Aiva is a simple AI-powered voice assistant built with HTML, CSS, and JavaScript. It uses the Web Speech API for speech recognition and text-to-speech, along with a Siri-style voice orb animation for visual feedback.



🚀 Features


- Voice input using the Web Speech API (SpeechRecognition)

- Natural speech responses with SpeechSynthesis

- Time-based greeting (Good morning / Good afternoon / Good evening)

- Siri-like animated voice orb when speaking/listening

- Supports a wide range of commands (greetings, utilities, websites, fun)

- Default fallback to Google Search if the command is not recognized



🛠️ Tech Stack


- HTML5 – structure

- CSS3 – styling and orb animations

- JavaScript (ES6) – logic, speech recognition, and speech synthesis APIs



📂 Project Structure


Aiva-1.0/

│── index.html  -------->            # Main HTML file

│── style.css  ------->              # Styling and orb animations

│── script.js  ------->              # Voice recognition and assistant logic

│── assets/   ------->               # Images (logo, microphone, background, etc.)



▶️ Getting Started

1. Clone the repository
git clone https://github.com/your-username/Aiva-1.0.git
cd Aiva-1.0

2. Open in browser
Simply open index.html in your preferred browser (recommended: Chrome/Edge, as the Web Speech API is best supported there).



🎤 Usage
1. On page load, you’ll see a Start Assistant button.

    - This is required because browsers block speech/audio until the user interacts with the page.

    - When clicked, Aiva will greet you based on the time of day.

2. After that, the microphone button will appear.

3. Click the mic button to speak commands.

4. Aiva will listen, process your speech, and respond with voice + animations.



📜 Supported Commands

Command: Action

hello / hi:	Greets the user

who are you:	Introduces Aiva as a virtual assistant

what is your name:	Responds with Aiva’s name

how are you:	Friendly response

what can you do:	Lists Aiva’s capabilities

time:	Reads out the current time

date:	Reads out today’s date

open youtube:	Opens YouTube in a new tab

open google:	Opens Google search

open gmail:	Opens Gmail

open facebook:	Opens Facebook

open instagram:	Opens Instagram

open twitter:	Opens Twitter

open linkedin:	Opens LinkedIn

open whatsapp:	Opens WhatsApp (depends on browser support)

open spotify:	Opens Spotify

open netflix:	Opens Netflix

open github:	Opens GitHub

open calculator:	Attempts to open system calculator (may not work on all browsers)

open settings:	Attempts to open system settings (may not work on all browsers)

open camera:	Attempts to open system camera (may not work on all browsers)

tell me a joke:	Tells a joke

thank you:	Responds politely

goodbye:	Says goodbye and closes conversation

(Any unrecognized cmd):	Opens a Google search with the spoken phrase (default fallback behavior)



🎬 Demo
Here’s a visual walkthrough of Aiva 1.0 in action:

1. Start Assistant

On page load, click the Start Assistant button to initialize Aiva. This step is required due to browser restrictions on speech synthesis.

<img width="1359" height="648" alt="start_page" src="https://github.com/user-attachments/assets/7ae6acbf-a614-456b-b9c5-26b6180118d0" />




2. Assistant Description

After clicking Start, the description and instructions appear. You can now interact with Aiva using the microphone button.

<img width="1361" height="650" alt="main_page" src="https://github.com/user-attachments/assets/500bb549-cb55-400f-9ec0-32d2365bb925" />




3. Voice Orb Animation

When Aiva is listening, the Siri-like orb animates to give visual feedback.

<img width="1357" height="647" alt="animation_page" src="https://github.com/user-attachments/assets/1c3905bb-62d9-46d0-8094-2732493b914f" />




4. Command in Action – Opening YouTube

Example of Aiva executing a command. In this case, the user asked Aiva to open YouTube, and the action is performed.

![demo](https://github.com/user-attachments/assets/1b104bc1-c66f-4875-b89e-14a7dd582eee)



⚠️ Notes

- Runs fully client-side (no backend required).

- Commands like calculator, settings, and camera may not work in all browsers or OS.

- The Web Speech API is best supported on Chrome-based browsers.
