import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

    // Store the currently displayed greeting, starting with the first message.
    const [greeting, setGreeting] = useState(messages[0]);

    // Choose a random greeting that is different from the current greeting.
    const randomMessage = () => {
    // Create a new array containing only greetings that are not currently displayed.
    const availableMessages = messages.filter((message) => message !== greeting);

    // If there are no alternatives, just keep the current greeting.
    if (availableMessages.length === 0) {
        return greeting;
    }

    // Pick a random greeting from the remaining options.
    return availableMessages[Math.floor(Math.random() * availableMessages.length)];
};

    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
            {/* Choose a new random greeting when the button is clicked. */}
            <button onClick={() => setGreeting(randomMessage())}>
                New Greeting
            </button>
        </div>
    );
}