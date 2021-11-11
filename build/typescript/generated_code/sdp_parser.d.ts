declare function peg$SyntaxError(message: any, expected: any, found: any, location: any): void;
declare class peg$SyntaxError {
    constructor(message: any, expected: any, found: any, location: any);
    message: any;
    expected: any;
    found: any;
    location: any;
    name: string;
}
declare namespace peg$SyntaxError {
    function buildMessage(expected: any, found: any): string;
}
declare function peg$parse(input: any, options: any): any[] | {
    kind: any;
    value: any;
    uses_short_nl: boolean;
    loc: {
        start: {
            offset: any;
            line: number;
            column: number;
        };
        end: {
            offset: any;
            line: number;
            column: number;
        };
    };
};
export { peg$SyntaxError as SyntaxError, peg$parse as parse };
