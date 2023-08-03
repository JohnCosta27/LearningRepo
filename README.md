# Learning Repo
### A repository dedicated to me, learning all sorts of technologies. And maybe implementing them in the future in other projects.

#### Stuff learnt/learning
* Auth0/Supabase
	* Auth0 Authentication
	* Supabase PostgreSQL database
	* This little project involved Auth0 authentication using an express package _express-openid-connect_ which allows for user authentication in a Node.js/Express.js back-end. Supabase provides a nice PostgreSQL which _can_ scale, plus I know SQL but I never approached it at a high level.

* Webpack
	* Webpack is a bundler, it takes .js files and converts them into one big .js file with all the dependencies from the smaller files, it does this by creating a dependency graph. This big .js file contains everything, including CSS.
	* I'm learning it, specially how to configure it and how it works because I have used React a few times, but I always used the "create-react-app" script, and I want to properly understand what I am doing when I use that script.
	* Webpack uses loaders, which is a way to pre-process a file, so that it can be bundled into the bundle (The big .js file).

* React from scratch
	* A few things are needed here:
	* Babel: A JS transpiler that takes my code, and transpiles it into older JavaScript, which means that it can run on any browser and machine, something that would be excrutiating to do.
	* Webpack: Takes all of the files, and compiles them into one big "bundle". See project above.
	* Webpack loaders: These take a certain type of file and pre-processes them, so they can be included in the bundle.
	* Loaders used:
		* @babel/preset-env - Does the transpiling to older versions of JS
		* @babel/preset-react - Loads react files, which contain JSX
		* style-loader & css-loader - These take the CSS and allow it to be bundled.
	* Plugins:
		* HtmlWebpackPlugin - Creates an HTML file from a template which contains the link to the bundle. This plugin has a rather simple job.

This "React from scratch" mini project, has taught me a lot about the workings of Webpack and Babel. I will keep this repo as a personal "create-react-app" script. So that I can control exactly what modules I have.
