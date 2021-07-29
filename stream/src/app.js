const app = require('express')();
const fs = require('fs');
const hls = require('hls-server');
const cors = require('cors');

app.use(
    cors({
        origin: "http://localhost:3000",
    }),
);

app.get('/', (req, res) => {
    return res.status(200).sendFile(`${__dirname}/client.html`);
});

const server = app.listen(3001, () => {
    console.log('Server listen on 3001');
});

new hls(server, {
    provider: {
        exists: (req, cb) => {
            const ext = req.url.split('.').pop();

            if (ext !== 'm3u8' && ext !== 'ts') {
                return cb(null, true);
            }

            fs.access(__dirname + req.url, fs.constants.F_OK, function (err) {
                if (err) {
                    console.log('File not exist', err);
                    return cb(null, false);
                }
                cb(null, true);
            });
        },
        getManifestStream: (req, cb) => {
            console.log(__dirname + req.url);
            const stream = fs.createReadStream(__dirname + req.url);
            cb(null, stream);
        },
        getSegmentStream: (req, cb) => {
            console.log(__dirname + req.url);
            const stream = fs.createReadStream(__dirname + req.url);
            cb(null, stream);
        }
    }
});