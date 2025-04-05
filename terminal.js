const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: "Available commands: help, about, skills, clear",
  about: "I'm Teja – I build scalable platforms and love integrating AI into dev workflows.",
  skills: "Platform Engineering, Automation, AI Integration, Security, DevOps, Docs as Code",
  blog: "Visit blog.tejanshu.com (coming soon!)",
  clear: () => output.innerHTML = ""
};

function typewriterEffect(element, text, speed = 50, callback) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    if (command) {
      const newLine = document.createElement("div");
      newLine.textContent = `~$ ${command}`;
      output.appendChild(newLine);

      if (commands[command]) {
        if (typeof commands[command] === "function") {
          commands[command]();
        } else {
          const response = document.createElement("div");
          output.appendChild(response);
          typewriterEffect(response, commands[command]);
        }
      } else {
        const error = document.createElement("div");
        output.appendChild(error);
        typewriterEffect(error, `Command not found: ${command}`);
      }
    }

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});

// Static typewriter message at the top
document.addEventListener("DOMContentLoaded", () => {
  const typewriterEl = document.getElementById("typewriter-message");
  if (typewriterEl) {
    typewriterEffect(typewriterEl, "commands: about, skills, blog");
  }
});
