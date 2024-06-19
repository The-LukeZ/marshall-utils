const moment = require("moment");

/**
 * Returns the current Datetime in UTC.
 * @returns {Date}
 */

function utcnow() {
    const utcTime = moment.utc();
    return new Date(
        Date.UTC(
            utcTime.year(),
            utcTime.month() + 1,
            utcTime.day(),
            utcTime.hour(),
            utcTime.minute(),
            utcTime.second()
        )
    );
}

module.exports = {utcnow};