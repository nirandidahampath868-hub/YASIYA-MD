const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~lMBFEAJb#VCMZY3-Wv6Cw8XlYCMGw4DM_9SeW-lCzNF4Hfqfz-DE'
};
