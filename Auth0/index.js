const { auth, requiresAuth } = require('express-openid-connect');
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const supabase = createClient(
	'https://wkkvrbxyvkqbogjcwsxr.supabase.co',
	process.env.SUPABASE_KEY
);

app.use(
	auth({
		authRequired: false,
		auth0Logout: true,
		issuerBaseURL: process.env.ISSUER_BASE_URL,
		baseURL: process.env.BASE_URL,
		clientID: process.env.CLIENT_ID,
		secret: process.env.SECRET,
	})
);

app.get('/', async (req, res) => {
	if (req.oidc.isAuthenticated()) {
		const { data, error } = await supabase
			.from('users')
			.insert([{ user_id: req.oidc.user.sub }]);

		res.redirect('/profile');
	} else {
		res.send('Login to access app');
	}
});

app.get('/profile', requiresAuth(), (req, res) => {
	res.send(JSON.stringify(req.oidc.user));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
