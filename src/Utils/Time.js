export const convertTime = (utcTimestamp) => {
    const dateUtc = new Date(utcTimestamp);
    const utcMilliseconds = dateUtc.getTime();
    const gmtPlus7Offset = 7 * 60 * 60 * 1000;
    const gmtPlus7Milliseconds = utcMilliseconds + gmtPlus7Offset;
    const dateGmtPlus7 = new Date(gmtPlus7Milliseconds);
    return dateGmtPlus7.toISOString();
}