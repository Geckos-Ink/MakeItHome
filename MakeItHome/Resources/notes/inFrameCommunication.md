Communication between the JavaScript of a main webpage and its iframe can be achieved using the `window.postMessage` method. This method allows for safe cross-origin communication between windows (a parent window and an iframe, or between two iframes).

Here's how you can set up communication between a parent page and an iframe:

### 1. Posting a Message from Parent to Iframe:

In the parent window's JavaScript, you can post a message to the iframe like this:

```javascript
// Get a reference to the iframe element
var iframe = document.getElementById('myIframe');

// Post a message to the iframe
iframe.contentWindow.postMessage('Hello from parent!', 'https://example.com');
```

In this example, replace `'https://example.com'` with the origin of the iframe (the domain where the iframe's content is hosted). This is a security feature to ensure you're only sending messages to the intended recipient.

### 2. Receiving the Message in the Iframe:

In the JavaScript within the iframe, set up an event listener to receive the message:

```javascript
window.addEventListener('message', function(event) {
    // Check the origin of the message for security purposes
    if (event.origin !== "https://parentdomain.com") {
        return; // Ignore messages from unknown sources
    }

    console.log('Message received in iframe:', event.data);

    // You can now react to the message
});
```

In this code, replace `"https://parentdomain.com"` with the origin of the parent window.

### 3. Posting a Message from Iframe to Parent:

From within the iframe, you can similarly send a message back to the parent window:

```javascript
parent.postMessage('Hello from iframe!', 'https://parentdomain.com');
```

### 4. Receiving the Message in the Parent:

Back in the parent window, set up an event listener to receive messages from the iframe:

```javascript
window.addEventListener('message', function(event) {
    // Check the origin of the message for security purposes
    if (event.origin !== "https://example.com") {
        return; // Ignore messages from unknown sources
    }

    console.log('Message received in parent:', event.data);

    // React to the message
});
```

### Security Considerations:

- Always validate the `origin` property in the message event to ensure that the message is coming from a trusted source.
- Be cautious with the data received from messages. Validate and sanitize as needed.
- Use `window.postMessage` carefully to avoid exposing sensitive information to untrusted domains.

This setup allows for a robust two-way communication between the main page and its iframe, making it possible to send and receive data securely and efficiently.
