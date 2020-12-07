module.exports = ({ res, code = 500, errors = [] } = {}) => {
  if (res) res.status(code)
  return {
    time: new Date(),
    errors
  }
}
