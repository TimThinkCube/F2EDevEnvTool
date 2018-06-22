const path = require('path');

module.exports = {
    entry: {
        app: "./app/assets/scripts/app.js",
        vendor: "./app/assets/scripts/vendor.js"
      },
    output: {
        path: path.resolve(__dirname, "./app/buildup/scripts"),
        filename: "[name].js" // define output file name
    },
    module:{
        rules:[
            {
                loader :'babel-loader',
                query:{
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/ 
            }
        ]
    }
}


