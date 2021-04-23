function pageMiddleware(req, res, next)
{
    if(req.url === '/admin')
    {
        res.send('<h1>Oops! Sorry Dear:)</h1>')
    }
    next();
}

module.exports = pageMiddleware;