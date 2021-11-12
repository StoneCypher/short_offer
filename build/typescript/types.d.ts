declare type ValZeroLine = {
    kind: 'val_zero_line';
    value: string;
    uses_short_nl: boolean;
};
declare type ValLine = {
    kind: 'val_line';
    value: string;
    uses_short_nl: boolean;
};
declare type UnknownLine = {
    kind: 'unknown_line';
    value: string;
    uses_short_nl: boolean;
};
declare type UnknownTerminate = {
    kind: 'unknown_terminate';
    value: string;
    uses_short_nl: boolean;
};
declare type PegCoord = {
    offset: number;
    line: number;
    column: number;
};
declare type PegLocation = {
    start: PegCoord;
    end: PegCoord;
};
declare type ParsedLine = UnknownLine | ValZeroLine | ValLine | UnknownTerminate;
declare type ParsedSdp = {
    kind: 'offer' | 'answer' | 'unknown' | 'unknown_terminate';
    value: ParsedLine[];
    loc: PegLocation;
};
declare const astIds: {
    readonly aid_error: 1;
    readonly aid_unknownLine: 2;
    readonly aid_offer: 2;
    readonly aid_answer: 3;
    readonly aid_vline: 4;
};
export { UnknownLine, ValZeroLine, ValLine, ParsedLine, PegCoord, PegLocation, ParsedSdp, astIds };
