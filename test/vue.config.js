module.exports={
    pages:{
        index:{
            entry:'src/main.js'
        }
    },
    lintOnSave:false,
    // devServer:{
    //     proxy:'http://localhost:5000'
    // }
    devServer: {
        proxy: {
            '/students': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/students':''}
            },
            '/cars': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/cars':''}
            }
        }
    }

}