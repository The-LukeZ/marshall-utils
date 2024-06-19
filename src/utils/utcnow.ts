import moment from "moment";

/**
 * Returns the current Datetime in UTC.
 * @returns {Date}
 */

export function utcnow(): Date {
    const utcTime = moment.utc();
    return new Date(
        Date.UTC(
            utcTime.year(),
            utcTime.month() + 1,
            utcTime.date(),
            utcTime.hour(),
            utcTime.minute(),
            utcTime.second()
        )
    );
}