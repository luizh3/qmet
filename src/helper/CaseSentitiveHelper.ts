export default class CaseSentitiveHelper {

    static toPascalCase(text: string): string {
        return text
            .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
            .replace(/^(.)/, (_, c) => c.toUpperCase());
    }

}