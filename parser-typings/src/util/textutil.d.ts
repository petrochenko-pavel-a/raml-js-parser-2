/// <reference path="../../typings/main.d.ts" />
export declare function isMultiLine(s: string): boolean;
export declare function isMultiLineValue(s: string): boolean;
export declare function makeMutiLine(s: string, lev: number): string;
export declare function fromMutiLine(s: string): string;
export declare function trimStart(s: string): string;
export declare function indent(lev: number, str?: string): string;
export declare function print(lev: number, str?: string): void;
export declare function replaceNewlines(s: string, rep?: string): string;
export declare function trimEnd(s: string): string;
export declare function splitOnLines(text: string): string[];
export declare function startsWith(s: string, suffix: string): boolean;
export declare function endsWith(s: string, suffix: string): boolean;
export declare class TextRange {
    private contents;
    private start;
    private end;
    constructor(contents: string, start: number, end: number);
    text(): string;
    startpos(): number;
    endpos(): number;
    len(): number;
    unitText(): string;
    withStart(start: number): TextRange;
    withEnd(end: number): TextRange;
    sub(start: number, end: number): string;
    trimStart(): TextRange;
    trimEnd(): TextRange;
    extendToStartOfLine(): TextRange;
    extendAnyUntilNewLines(): TextRange;
    extendSpacesUntilNewLines(): TextRange;
    extendSpaces(): TextRange;
    extendSpacesBack(): TextRange;
    extendCharIfAny(ch: string): TextRange;
    extendCharIfAnyBack(ch: string): TextRange;
    extendToNewlines(): TextRange;
    extendUntilNewlinesBack(): TextRange;
    reduceNewlinesEnd(): TextRange;
    reduceSpaces(): TextRange;
    replace(text: string): string;
    remove(): string;
}
