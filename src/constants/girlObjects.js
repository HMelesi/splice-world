const girlObjects = [
    {
        instruction: 'remove sporty',
        girlsArray: ['sporty', 'scary', 'ginger', 'baby', 'posh'],
        answer: {
            index: 0,
            number: 1
        }
    },
    {
        instruction: 'remove ginger',
        girlsArray: ['sporty', 'scary', 'baby', 'ginger', 'posh'],
        answer: {
            index: 3,
            number: 1
        }
    },
    {
        instruction: 'remove scary and baby',
        girlsArray: ['posh', 'sporty', 'scary', 'baby', 'ginger'],
        answer: {
            index: 2,
            number: 2
        }
    },
    {
        instruction: 'remove ginger, baby and posh',
        girlsArray: ['scary', 'ginger', 'baby', 'posh', 'sporty'],
        answer: {
            index: 1,
            number: 3
        }
    },
    {
        instruction: 'remove everyone except ginger',
        girlsArray: ['posh', 'sporty', 'baby', 'scary', 'ginger'],
        answer: {
            index: 0,
            number: 4
        }
    },
]

export default girlObjects;