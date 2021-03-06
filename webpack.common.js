module.exports = {
    entry: ['./index.tsx'],
    module: {
        rules: [
            {
                // Include ts, tsx, js and jsx files
                test: /\.(ts|js)x$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
};
