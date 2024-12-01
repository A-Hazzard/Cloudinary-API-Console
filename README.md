# <img src="https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue.png" width="32" height="32" style="vertical-align: middle"> Cloudinary API Console Template

A lightweight, ready-to-use template for integrating Cloudinary's media management capabilities into your Node.js applications. This template provides a simple starting point for working with Cloudinary's API.

## Features

- **Quick Setup**: Minimal configuration required to get started
- **Environment Variables**: Secure credential management
- **Basic Operations**: Example of resource listing functionality
- **Error Handling**: Built-in error reporting
- **Type Support**: Demonstrates working with different resource types
- **Secure Configuration**: HTTPS enabled by default

## Prerequisites

- Node.js installed on your system
- Cloudinary account (free tier available)
- Basic understanding of media management concepts

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cloudinary-api-console.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Cloudinary credentials:
```env
cloudinary_cloud_name=your_cloud_name
cloudinary_api_key=your_api_key
cloudinary_api_secret=your_api_secret
```

## Usage

1. Configure your Cloudinary credentials in the `.env` file

2. Run the example script:
```bash
node index.js
```

3. Customize the code for your needs:
```javascript
// Example: List resources in a specific folder
cloudinary.v2.api.resources({
    type: 'upload',
    prefix: 'your-folder-name'
}, (error, result) => { 
    console.log(result, error)
});
```

## API Examples

### Basic Configuration
```javascript
cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret,
    secure: true
});
```

### List Resources
```javascript
cloudinary.v2.api.resources(options, callback);
```

### Upload Media
```javascript
cloudinary.v2.uploader.upload("path/to/file", options);
```

### Generate URLs
```javascript
cloudinary.url("sample", {transformation: options});
```

## Environment Variables

Required environment variables:
- `cloudinary_cloud_name`: Your Cloudinary cloud name
- `cloudinary_api_key`: Your API Key
- `cloudinary_api_secret`: Your API Secret

## Project Structure

```
cloudinary-api-console/
├── .env                # Environment variables
├── index.js           # Main application file
├── package.json       # Project dependencies
└── README.md         # Documentation
```

## Common Operations

1. **List Resources**
   - View all uploaded media
   - Filter by type and prefix

2. **Upload Media**
   - Support for various file types
   - Custom upload options

3. **Transform Media**
   - Resize images
   - Convert formats
   - Apply effects

4. **Generate URLs**
   - Create delivery URLs
   - Apply transformations

## Best Practices

1. Always use environment variables for credentials
2. Enable HTTPS for secure transfers
3. Handle errors appropriately
4. Use proper resource types
5. Implement rate limiting for production

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Resources

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Node.js SDK Reference](https://cloudinary.com/documentation/node_integration)
- [Cloudinary Console](https://console.cloudinary.com/)

## Support

For support, please refer to:
- [Cloudinary Support](https://support.cloudinary.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/cloudinary)
- [GitHub Issues](https://github.com/yourusername/cloudinary-api-console/issues)