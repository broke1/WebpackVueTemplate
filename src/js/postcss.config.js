module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'), 
        require('cssnano')({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true
                    }
                }
            ]
        })
        
    ]
}

// npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev
