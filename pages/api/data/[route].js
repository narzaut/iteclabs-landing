const fs = require('fs');
const jsonFiles = fs.readdirSync('lang/spanish/');

export default function dataAPI(req, res) {
    //Valida que http method sea GET
    if (req.method != 'GET') return res.status(400).json({ status:400, message: 'GET is the only available endpoint for this route' })
    //Valida que el query exista
    if (!jsonFiles.includes(`${req.query.route}.json`)) return res.status(404).json({ status:404, message: 'Bad query/param' })
    //Response
    res.status(200).json(require(`../../../lang/spanish/${req.query.route}`))
}
