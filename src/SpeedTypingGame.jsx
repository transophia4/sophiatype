import React, { useState, useEffect} from 'react';
import './SpeedTypingGame.css'
import TypingArea from './TypingArea.jsx';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const SpeedTypingGame = () => {
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "The best way to predict the future is to invent it.",
        "The only way to do great work is to love what you do.",
        "Life is what happens when you're busy making other plans.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "You only live once, but if you do it right, once is enough.",
        "Be yourself; everyone else is already taken.",
        "To be or not to be, that is the question.",
        "It does not do to dwell on dreams and forget to live.",
        "You miss 100% of the shots you don't take.",
        "The purpose of our lives is to be happy.",
        "Get your facts first, then you can distort them as you please.",
        "The only thing we have to fear is fear itself.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        "Believe you can and you're halfway there.",
        "Act as if what you do makes a difference. It does.",
        "Life is either a daring adventure or nothing at all.",
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "The journey of a thousand miles begins with one step.",
        "You must be the change you wish to see in the world.",
        "The only way to achieve the impossible is to believe it is possible.",
        "Life is short, and it's up to you to make it sweet.",
        "Happiness is not something ready made. It comes from your own actions.",
        "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "The best revenge is massive success.",
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "Life isn't about finding yourself. Life is about creating yourself.",
        "Everything you’ve ever wanted is on the other side of fear.",
        "The most wasted of days is one without laughter.",
        "Dream as if you'll live forever. Live as if you'll die today.",
        "Life is what we make it, always has been, always will be.",
        "The only impossible journey is the one you never begin.",
        "Live in the sunshine, swim the sea, drink the wild air."
    ];

    const kids_quotes = [
        "oh the thinks you can think",
        "you have brains in your head",
        "i am sam sam i am",
        "one fish two fish red fish blue fish",
        "you can find magic wherever you look",
        "a cat in a hat",
        "i do not like green eggs and ham",
        "i do not like them sam i am",
        "i am what i am",
        "you are you that is truer than true",
        "you can get there if you try",
        "i will always love you",
        "a cat in a hat",
        "i am glad that you are my best friend",
        "i like to race cars",
        "olympia is amazing",
        "charles is the best",
        "sophia is super cool",
        "i will listen to mom",
        "dad makes the best food",
        "i will listen to dad",
        "i love to swim",
        "i love the beach",
        "i like star wars",
        "bunnies are cute",
        "today is a good day",
        "i never go to bed",
        "dessert is my dinner",
        "i love school",
        "charles has brown eyes",
        "olympia wants to meet elsa",
        "olaf is funny",
        "dog eats dinner too",
        "reading is easy",
        "i like writing my sentences"
    ]

    // chosen = {"charles": kids_quotes, "olympia": kids_quotes}
    const [typingText, setTypingText] = useState('');
    const [inpFieldValue, setInpFieldValue] = useState('');
    const maxTime = 30;
    const [timeLeft, setTimeLeft] = useState(maxTime);
    const [charIndex, setCharIndex] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [WPM, setWPM] = useState(0);
    const [setting, setSetting] = useState('');
    
    const loadParagraph = () => {
        const ranIndex = Math.floor(Math.random() * kids_quotes.length);
        const inputField = document.getElementsByClassName('input-field')[0];
        document.addEventListener("keydown", () => inputField.focus());
        const content = Array.from(kids_quotes[ranIndex]).map((letter, index) => (
            <span key = {
                index
            }
            style = {
                {
                    color: (letter !== ' ') ? 'white' : 'transparent'
                }
            }
            className = {
                `char ${index === 0 ? 'active' : ''}`
            } > {
                (letter !== ' ') ? letter : '_'
            }
            </span>
        ));
        setTypingText(content);
        setInpFieldValue('');
        setCharIndex(0);
        setMistakes(0);
        setIsTyping(false);
    };
    const handleKeyDown = (event) => {
        const characters = document.querySelectorAll('.char');
        if (event.key === 'Backspace' && charIndex > 0 &&
            charIndex < characters.length && timeLeft > 0) {
                if (characters[charIndex - 1].classList.contains('correct')) {
                    characters[charIndex - 1].classList.remove('correct');
                }
                if (characters[charIndex - 1].classList.contains('wrong')) {
                    characters[charIndex - 1].classList.remove('wrong');
                    setMistakes(mistakes - 1);
                }
                characters[charIndex].classList.remove('active');
                characters[charIndex - 1].classList.add('active');
                setCharIndex(charIndex - 1);
                let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
                setWPM(wpm);
            }
    }

    const initTyping = (event) => {
        const characters = document.querySelectorAll('.char');
        let typedChar = event.target.value;
        if (charIndex < characters.length && timeLeft > 0) {
            let currentChar = characters[charIndex].innerText;
            if (currentChar === '_') currentChar = ' ';
            if (!isTyping) {
                setIsTyping(true);
            }
            if (typedChar === currentChar) {
                setCharIndex(charIndex + 1);
                if (charIndex >= characters.length - 1) {
                    characters[charIndex - 1].classList.remove('active');
                    characters[charIndex].classList.remove('active');
                    characters[charIndex].classList.add('correct');
                    getResponse();
                    setIsOpen(true);
                    setIsTyping(false);
                } else {
                    characters[charIndex + 1].classList.add('active');
                    characters[charIndex].classList.remove('active');
                    characters[charIndex].classList.add('correct');
                }
            } else {
                setCharIndex(charIndex + 1);
                setMistakes(mistakes + 1);
                if (charIndex >= characters.length - 1) {
                    characters[charIndex - 1].classList.remove('active');
                    characters[charIndex].classList.remove('active');
                    characters[charIndex].classList.add('wrong');
                    getResponse();
                    setIsOpen(true);
                    setIsTyping(false);
                } else {
                    characters[charIndex].classList.remove('active');
                    characters[charIndex + 1].classList.add('active');
                    characters[charIndex].classList.add('wrong');
                }
            }

            if (charIndex === characters.length) {
                getResponse();
                setIsOpen(true);
                setIsTyping(false);
            }
            let wpm = Math.round(((charIndex - mistakes) / 5) / ( maxTime - timeLeft) * 60);
            setWPM(wpm);
        } else {
            setIsTyping(false);

        }
    };

    const resetGame = () => {
        setIsTyping(false);
        setTimeLeft(maxTime);
        setCharIndex(0);
        setMistakes(0);
        setTypingText('');
        setWPM(0);
        const characters = document.querySelectorAll('.char');
        characters.forEach(span => {
            span.classList.remove('correct');
            span.classList.remove('wrong');
            span.classList.remove('active');
            span.classList.remove('last');
        });
        characters[0].classList.add('active');
        loadParagraph();
    };
        useEffect(() => {
            loadParagraph();
        }, []);
        
        useEffect(() => {
            let interval;
            if (isTyping && timeLeft > 0) {
                interval = setInterval(() => {
                    setTimeLeft(timeLeft - 1);
                    let wpm = Math.round(((charIndex - mistakes) / 5) / ( maxTime - timeLeft) * 60);
                    setWPM(wpm);
                }, 1000);
            } else if (timeLeft === 0) {
                clearInterval(interval);
                setIsTyping(false);
            }
            return() => {
                clearInterval(interval);
            };
        }, [isTyping, timeLeft]);

        let [isOpen, setIsOpen] = useState(false)
        let [response, setResponse] = useState('')
        
        const getResponse = () => {    
            if (WPM > 30) {
                setResponse('You are super fast!');
            } else if (WPM < 30 && WPM > 10) {
                setResponse('Great job!');
            } else {
                setResponse('You need some more practice!');
            }
        }

        return ( 
        <div className='container'>
            <input type='text' className='input-field' value = {inpFieldValue} onChange={initTyping} onKeyDown={handleKeyDown}/>
            {}
            <TypingArea typingText = {typingText} inpFieldValue = {inpFieldValue} timeLeft = {timeLeft} mistakes = {mistakes} WPM = {WPM} 
                initTyping = {initTyping} handleKeyDown = {handleKeyDown} resetGame = {resetGame} />
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div>
                <DialogPanel>
                    <DialogTitle className="font-bold">{response}</DialogTitle>
                    <Description>Words per minute: {WPM}</Description>
                    <div className="flex gap-4">
                    <button onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                </DialogPanel>
                </div>
            </Dialog>

        </div>
        );
    };
    export default SpeedTypingGame;