export function FormatToHours(value: any, locale: any = null) {
    const fromTime = new Date(value);
    return fromTime.toLocaleTimeString(locale);
}
