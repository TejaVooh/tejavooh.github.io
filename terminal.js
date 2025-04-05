const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: "Available commands: help, about, skills, blog, clear",
  about: "I'm Teja – I build scalable platforms and love integrating AI into dev workflows.",
  skills: "Platform Engineering, Automation, AI Integration, Security, DevOps, Docs as Code",
  blog: "Check out my writing on Medium: https://medium.com/@TejaVooh",
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
    window.scrollTo(0, document.body.scrollHeight);
  }
});

function typewriterEffect(element, text, speed = 75) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", () => {
  const typewriterEl = document.getElementById("typewriter-message");
  if (typewriterEl) {
    typewriterEffect(typewriterEl, "commands: about, skills, blog");
  }
});