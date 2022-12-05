module.exports = {
    entry:"./src/react/index.jsx",

    output:{
        publicPath: '/',
        path:__dirname + "/src/public",
        filename:"render.js"
    },
    devServer: {
        historyApiFallback: true
    },
    watch:false,
    mode:"production",
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:"babel-loader",
                exclude:/node_modules/,

                resolve:{
                    extensions:[".js",".jsx"]
                }
            },
            {
                test:/\.(css|sass|scss)$/,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: { name: 'assets/[hash].[ext]' },
                  }
                ]
            }
        ]
    }
}
