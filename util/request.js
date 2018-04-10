module.exports = {
	badRequest: (res, status = 400, msg = 'Bad Input Params') => res.status(status).json({ success: false, message: msg }),
	goodRequest: (res, status = 200, msg = 'Great Success!') => res.status(status).json({ success: true, message: msg })
}