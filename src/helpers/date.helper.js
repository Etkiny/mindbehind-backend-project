const moment = require('moment-timezone');

exports.now = (isAutoFormat) =>
    moment()
        .tz(timezone)
        .format(isAutoFormat ? dateFormat : null);
