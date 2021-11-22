export default function dataAPI(req, res) {
  res.status(400).json({ status:400, message: 'This route only accepts GET requests, and endpoint requires a query/parameter' })
}
