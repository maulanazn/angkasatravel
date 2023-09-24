export function FormatToHours(value: any, locale: string) {
    return new Date(value).toLocaleTimeString(locale);
}
