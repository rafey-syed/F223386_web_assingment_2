$(document).ready(function () {
    const chatBox = $("#chat-box");
    const userInput = $("#user-input");
    const sendBtn = $("#send-btn");
  
    let faqData = {
      faqs: [],
      greetings: {},
      suggestions: []
    };
  
    function loadFAQData() {
      return $.getJSON("chat.json")
        .done(function (data) {
          faqData = data;
        })
        .fail(function () {
          console.error("Failed to load FAQ data");
          faqData = {
            faqs: [{ question: "help", answer: "Can't access FAQ data." }],
            greetings: { default: "Hello!" },
            suggestions: ["Contact support"]
          };
        });
    }
  
    function initChat() {
      const hour = new Date().getHours();
      let greeting = faqData.greetings.default || "Hello!";
  
      if (hour < 12 && faqData.greetings.morning) greeting = faqData.greetings.morning;
      else if (hour < 18 && faqData.greetings.afternoon) greeting = faqData.greetings.afternoon;
      else if (faqData.greetings.evening) greeting = faqData.greetings.evening;
  
      addBotMessage(`${greeting} I'm SmartBot. How can I help you today?`);
  
      setTimeout(() => {
        if (faqData.suggestions.length > 0) {
          const suggestionsList = faqData.suggestions.map(s => `- ${s}`).join("<br>");
          addBotMessage("You can ask me about:<br>" + suggestionsList);
        }
      }, 1500);
    }
  
    function addUserMessage(message) {
      chatBox.append(`<div class='message user-message'>${message}</div>`);
      scrollToBottom();
    }
  
    function addBotMessage(message) {
      chatBox.append(`<div class='message bot-message'>${message}</div>`);
      scrollToBottom();
    }
  
    function scrollToBottom() {
      chatBox.scrollTop(chatBox[0].scrollHeight);
    }
  
    function processUserInput() {
      const message = userInput.val().trim();
      if (!message) return;
  
      addUserMessage(message);
      userInput.val("");
  
      const typingIndicator = $("<div class='message bot-message typing-indicator'>Bot is typing...</div>");
      chatBox.append(typingIndicator);
      scrollToBottom();
  
      setTimeout(() => {
        typingIndicator.remove();
        generateBotResponse(message);
      }, 1000 + Math.random() * 1000);
    }
  
    function generateBotResponse(userMessage) {
      const lowerMsg = userMessage.toLowerCase();
      let response = "I'm still learning. Try asking about store hours or contact details.";
      for (let faq of faqData.faqs) {
        if (lowerMsg.includes(faq.question.toLowerCase())) {
          response = faq.answer;
          break;
        }
      }
  
      const intros = [
        "Here's what I found:",
        "I can help with that:",
        "Sure thing:",
        "This might help:",
        "Here you go:"
      ];
      const intro = intros[Math.floor(Math.random() * intros.length)];
      addBotMessage(`${intro}<br>${response}`);
    }
  
    sendBtn.click(processUserInput);
    userInput.keypress(function (e) {
      if (e.which === 13) processUserInput();
    });
  
    loadFAQData().always(initChat);
  });
  