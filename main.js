const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
//console.log(chatContainer)
let userText = null;

const createElement = (html, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html
  return chatDiv;
};

const handleOutGoingChat = () => {
  userText = chatInput.value.trim(); // chatInput değerini alır
  //console.log(userText)
  if (!userText) return; //chatInput içi boş ise çalışmasın.
  const html = ` <div class="chat-content">
    <div class="chat-details">
        <img src="images/user-image.jpg" alt="user-images"/>
        <p>
        ${userText}  
        </p>
    </div>
</div>`;
  const outgoingChatDiv = createElement(html, "outgoing");
  outgoingChatDiv.querySelector("p").textContent = userText;
  //document.querySelector(".default-text")?.remove();
  chatContainer.appendChild(outgoingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
};

sendButton.addEventListener("click", handleOutGoingChat);
