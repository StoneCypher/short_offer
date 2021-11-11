declare type UnknownLine = {
    value: string;
};
declare type VLine = {
    value: string;
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
declare type ParsedLine = UnknownLine | VLine;
declare type ParsedSdp = {
    kind: 'offer' | 'answer';
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
export { UnknownLine, VLine, ParsedLine, PegCoord, PegLocation, ParsedSdp, astIds };
