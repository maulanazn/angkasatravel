export function FormatToHours(value: Date, locale: string) {
    return new Date(value).toLocaleTimeString(locale);
}
