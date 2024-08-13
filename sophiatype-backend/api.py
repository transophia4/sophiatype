from fastapi import FastAPI
from random import randrange
kid_quotes = [
    "oh the thinks you can think",
    "you have brains in your head",
    "i am sam sam i am",
    "one fish two fish red fish blue fish",
    "you can find magic wherever you look",
    "i will not eat them in a box",
    "a cat in a hat",
    "i do not like green eggs and ham",
    "i do not like them sam i am",
    "i am what i am",
    "today you are you that is truer than true",
    "you have brains in your head",
    "a book is a gift you can open again and again",
    "you are you that is truer than true",
    "you can get there if you try",
    "i like nonsense it wakes up the brain cells",
    "be yourself and know that you are loved",
    "the world belongs to those who read",
    "a book is a dream that you hold in your hand",
    "the more that you read the more things you will know",
    "you can find magic wherever you look",
    "i will always love you",
    "reading gives us someplace to go when we have to stay where we are",
    "the more that you read the more things you will know",
    "you are you that is truer than true",
    "a cat in a hat",
    "you can get there if you try",
    "a book is a gift you can open again and again",
    "i am what i am",
    "the world belongs to those who read",
    "the more that you read the more things you will know",
    "a book is a dream that you hold in your hand",
    "be yourself and know that you are loved",
    "you can find magic wherever you look",
    "i will always love you",
    "the world belongs to those who read",
    "you have brains in your head",
    "a book is a gift you can open again and again",
    "you can get there if you try",
    "i like nonsense it wakes up the brain cells",
    "today you are you that is truer than true",
    "the only thing you can do is sit back and let the words come to you",
    "the more that you read the more things you will know",
    "you can find magic wherever you look",
    "i am what i am",
    "a book is a gift you can open again and again",
    "you are you that is truer than true",
    "the world belongs to those who read",
    "you have brains in your head",
    "you can get there if you try",
    "the more that you read the more things you will know",
    "i like nonsense it wakes up the brain cells",
    "a book is a dream that you hold in your hand",
    "be yourself and know that you are loved",
    "you can find magic wherever you look",
    "the world belongs to those who read",
    "you are you that is truer than true",
    "today you are you that is truer than true",
    "i will always love you",
    "a cat in a hat",
    "the more that you read the more things you will know",
    "i am glad that you are my best friend"
]
app = FastAPI()

@app.get("/get-kid-quote")
async def kid_quote():
    index = randrange(len(kid_quotes))
    return {"Message": kid_quotes[index]}

@app.put("/change-kid-quote")
async def kid_quote_change():
    index = randrange(len(kid_quotes))
    return {"Message": kid_quotes[index]}

@app.delete("/remove")
async def remove_text():
    return {"Message": ""}