
let main = document.querySelector(".main");

let question = localStorage.getItem("question");

main.innerHTML = `
<h2>You asked:</h2>
<p>${question}</p>

<h2>AI Answer:</h2>
<p id="answer">Loading...</p>
`;




main.innerHTML = "<h2>Loading...</h2>";

async function askAI() {
    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?="4e76b04670msh115e09f2c19b736p1cf4",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: question
                            }
                        ]
                    }
                ]
            })
        }
    );

    const data = await response.json();
   console.log(data);
    let answer =
        data.candidates[0].content.parts[0].text;

    main.innerHTML = `
        <h2>Your Question:</h2>
        <p>${question}</p>

        <h2>Sharif AI:</h2>
        <p>${answer}</p>
    `;
}

askAI();