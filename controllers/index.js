const getPerson = (req, res, next) => {
    res.json('Michael Laughlin')
}

const getAnotherPerson = (req, res, next) => {
    res.json('Super Awesome Person')
}

module.exports = { getPerson, getAnotherPerson }