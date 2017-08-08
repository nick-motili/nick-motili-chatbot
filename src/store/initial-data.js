import * as shortid from 'shortid';

import * as ChatActions from '../store/actions/chat-actions';

export default function populateInitialMessage(store) {
  let initialMessage = 'Hi! I am a Motili Job Chat Bot.';
  initialMessage += ' You can ask me about the job, our methodology, our schedule,';
  initialMessage += " how you'll spend your day, our equipment, or the job qualifications!";
  initialMessage += " If you get stuck just ask for help and I'll point you in the right direction.";

  store.dispatch(
    ChatActions.AddMessage(shortid.generate(), true, initialMessage),
  );
}
