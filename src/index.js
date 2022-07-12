const messages = [
    "oscar",
    "marlon",
    "felipe",
    "camilo",
    "laura",
    "fernando",
    "julio",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };