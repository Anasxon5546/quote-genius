{
    {

        const geniuses = {
            nikola_tesla: [
                "The present is theirs, the future, for which I really worked, is mine. \xa0\xa0\xa0",
                "The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence. ",
                "If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration. ",
                "The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane. ",
                "I don't care that they stole my idea... I care that they don't have any of their own. ",
                "The desire that guides me in all I do is the desire to harness the forces of nature to the service of mankind. ",
                "Let the future tell the truth and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine. ",
                "The day when we shall know exactly what electricity is will chronicle an event probably greater, more important than any other recorded in the history of the human race. "
            ],
            albert_einstein: [
                "Imagination is more important than knowledge.",
                "The only source of knowledge is experience.",
                "The true sign of intelligence is not knowledge but imagination.",
                "The difference between stupidity and genius is that genius has its limits.",
                "I have no special talent. I am only passionately curious.",
                "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
                "A person who never made a mistake never tried anything new.",
                "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."]
        }

        function randomQuote() {
            const randomProp = obj => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
            let random = randomProp(geniuses);
            if (random === 'nikola_tesla') {
                if (document.querySelector('img').src !== 'assets/images/nikola-tesla.jpg') {
                    document.querySelector('img').src = 'assets/images/nikola-tesla.jpg';
                    document.querySelector('.name').textContent = 'Nikola Tesla';
                    document.querySelector('.job').textContent = 'FUTURIST';
                    document.querySelector('.job').style.color = 'red';
                }
                let quote = geniuses.nikola_tesla[(Math.floor(Math.random() * geniuses.nikola_tesla.length))];
                document.querySelector('.quote').textContent = quote + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 -Nikola Tesla';
            }
            else if (random === 'albert_einstein') {
                if (document.querySelector('img').src !== 'assets/images/albert-einstein.jpg') {
                    document.querySelector('img').src = 'assets/images/albert-einstein.jpg';
                    document.querySelector('.name').textContent = 'Albert Einstein';
                    document.querySelector('.job').textContent = 'THEORETICAL PHYSICIST';
                    document.querySelector('.job').style.color = 'cyan';
                }
                let quote = geniuses.albert_einstein[(Math.floor(Math.random() * geniuses.albert_einstein.length))];
                document.querySelector('.quote').textContent = quote + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 -Albert Einstein';
            }
        }

    }
}