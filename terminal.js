document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const input = document.getElementById("command");
    const promptLine = document.querySelector(".prompt-line");
  
    const commandsList = "commands: about, skills, blog";
    let i = 0;
  
    function typeWriter() {
      if (i < commandsList.length) {
        output.innerHTML += commandsList.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // adjust speed here
      }
    }
  
    typeWriter();
  
    // Focus on input when anywhere on screen is clicked
    document.addEventListener("click", () => input.focus());
  
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const command = input.value.trim().toLowerCase();
        input.value = "";
        let response = "";
  
        switch (command) {
          case "about":
            response = "I'm Teja — I build secure, AI-integrated platforms at scale.";
            break;
          case "skills":
            response = "Platform Engineering, Automation, DevX, AI, Security, Infra.";
            break;
          case "blog":
            response = "Visit medium.com/@TejaVooh for my thoughts.";
            break;
          default:
            response = "Unknown command.";
        }
  
        const result = document.createElement("div");
        result.classList.add("result");
        result.textContent = response;
        output.appendChild(result);
  
        // Scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
      }
    });
  });
  