const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: "Available commands: help, about, skills, blog, cv, clear",
  about: "I'm Teja – I build scalable platforms and love integrating AI into dev workflows.",
  skills: "Platform Engineering, Automation, AI Integration, Security, DevOps, Docs as Code",
  blog: "Check out my writing on Medium: https://medium.com/@TejaVooh",
  cv: () => {
    const msg = document.createElement("div");
    msg.textContent = "Opening resume in new tab...";
    output.appendChild(msg);
    window.open("resume.pdf", "_blank");
  },
  clear: () => output.innerHTML = "",
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    if (command) {
      const newLine = document.createElement("div");
      newLine.textContent = `~ $ ${command}`;
      output.appendChild(newLine);

      if (commands[command]) {
        const result = typeof commands[command] === "function"
          ? commands[command]()
          : commands[command];
        if (result) {
          const response = document.createElement("div");
          response.textContent = result;
          output.appendChild(response);
        }
      } else {
        const error = document.createElement("div");
        error.textContent = `Command not found: ${command}`;
        output.appendChild(error);
      }
    }
    input.value = "";
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
});

function typewriterEffect(element, fullText, speed = 50, lineDelay = 800) {
  const sentences = fullText.split('. ').map(s => s.trim()).filter(Boolean);
  let currentLine = 0;

  function typeLine() {
    if (currentLine >= sentences.length) return;

    const sentence = sentences[currentLine] + (currentLine < sentences.length - 1 ? '.' : '');
    const lineEl = document.createElement('div');
    element.appendChild(lineEl);

    let i = 0;
    function typeChar() {
      if (i < sentence.length) {
        lineEl.textContent += sentence.charAt(i);
        i++;
        setTimeout(typeChar, speed);
      } else {
        currentLine++;
        setTimeout(typeLine, lineDelay);
      }
    }

    typeChar();
  }

  typeLine();
}

document.addEventListener("DOMContentLoaded", () => {
  const cmdEl = document.getElementById("typewriter-message");
  const storyEl = document.getElementById("typewriter-story");

  if (cmdEl) {
    typewriterEffect(cmdEl, "commands: about, skills, clear");
  }

  if (storyEl) {
    typewriterEffect(
      storyEl,
      "My second marriage with GitHub. Hence TejaVooh. First one failed miserably. Apparently... I didn't commit enough.",
      35
    );
  }

  // Disable right-click
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Disable F12 / Ctrl+Shift+I / Cmd+Opt+I
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") || // Windows/Linux
      (e.metaKey && e.altKey && e.key.toLowerCase() === "i") // Mac
    ) {
      e.preventDefault();
    }
  });
});
