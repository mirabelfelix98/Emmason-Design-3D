/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Avoid double injection
    if (document.getElementById('n8n-chat-script')) return;

    const s = document.createElement('script');
    s.type = 'module';
    s.id = 'n8n-chat-script';
    s.textContent = `
  import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
  createChat({
    webhookUrl: 'https://hannamontana.app.n8n.cloud/webhook/c6932f14-a597-4904-aae1-9539002672c3/chat',
    loadPreviousSession: true,
    initialMessages: ['Hi! 👋 I am Ema from Emmason Designs. What are you looking to build?']
  });
`;
    document.body.appendChild(s);

    return () => {
      if (s.parentNode) {
        s.parentNode.removeChild(s);
      }
      const existingWidget = document.querySelector('.n8n-chat, #n8n-chat, .chat-widget');
      if (existingWidget && existingWidget.parentNode) {
        existingWidget.parentNode.removeChild(existingWidget);
      }
    };
  }, []);

  return null;
}
