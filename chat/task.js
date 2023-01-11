'use strict'

const chatWidgetEl = document.querySelector('.chat-widget')
const inputEl = document.querySelector('.chat-widget__input')
const messages = document.querySelector('.chat-widget__messages')

let autoReply = [
  'Sorry, I can speak only English',
  'What is the matter?',
  'How can I help you?',
  'What is the language you talking?',
  'Try to send your request next time...',
]

chatWidgetEl.addEventListener('click', () => {
  chatWidgetEl.classList.add('chat-widget_active')
})
const setTime = () => {
  let time = new Date()
  let date = time.getHours() + ':' + time.getMinutes()
  return date
}
// console.log(setTime())
const toSendAutoReply = () => {
  let index = Math.floor(Math.random() * autoReply.length)
  messages.innerHTML += `
  <div class="message message__text">
    <div class="message__time">${setTime()}</div>
    <div class="message__text">
      ${autoReply[index]}
    </div>
  </div>
`
}
chatWidgetEl.addEventListener('keyup', (e) => {
  if (e.key !== 'Enter') {
    return
  }
  const text = inputEl.value
  inputEl.value = ''

  messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${setTime()}</div>
      <div class="message__text">
       ${text}
      </div>
    </div>
  `
  toSendAutoReply()
})
