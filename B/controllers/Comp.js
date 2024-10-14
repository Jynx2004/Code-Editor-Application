const request = require('request');

exports.Comp = async (req, res) => {
    try {
        let b = "";

        console.log(req.body);

        const execution_data = {
            clientId: '5ff11d47d4d6c9877f73d93ae1cca8c4',
            clientSecret: 'c5a31b9ab452027b46f173aa8e8b8c799af2a88bcf2acea1f01fd793f514234a',
            script: req.body,
            language: 'python3',
            versionIndex: '0'
        };

        request.post({
            url: 'https://api.jdoodle.com/v1/execute',
            json: execution_data
        }, function (error, response, body) {
            if (error) {
                console.error('Error:', error);
                return res.status(500).json({
                    status: 500,
                    message: 'Error executing script',
                    error: error.message
                });
            } else {
                console.log('Execution response:', body);
                b = body.output;

                // Send the response after we have the output
                return res.status(200).json({
                    status: 200,
                    data: b,
                });
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
            status: 400,
        });
    }
};
