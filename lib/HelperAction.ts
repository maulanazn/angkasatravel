export function FormatToHours(value: any) {
    const fromTime = new Date(value);
    return fromTime.toLocaleTimeString();
}

export function FormatToDate(value: any) {
    const fromTime = new Date(value);
    return fromTime.toDateString();
}