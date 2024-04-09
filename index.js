const cloudinary = require('cloudinary');
require('dotenv').config()

console.log('Configuring')
//Account Configuration
cloudinary.config({
	cloud_name: process.env.cloudinary_cloud_name,
	api_key: process.env.cloudinary_api_key,
	api_secret: process.env.cloudinary_api_secret,
	secure: true
});

console.log('Specifying Type')
//Type
cloudinary.v2.api.resources({
	type: 'upload',
	prefix: 'reports'
}, (error, result) => { 
	console.log(result, error)
});

console.log('Completed')