declare type VersionZeroLine = {
    kind: 'version_zero_line';
    value: string;
    uses_short_nl: boolean;
};
declare type VersionLine = {
    kind: 'version_line';
    value: string;
    uses_short_nl: boolean;
};
declare type AMsidSemanticNS = {
    kind: 'a_msid_semantic_ns';
    value: string;
    uses_short_nl: boolean;
};
declare type AMsidSemanticWS = {
    kind: 'a_msid_semantic_ws';
    value: string;
    uses_short_nl: boolean;
};
declare type AExtmapAllowMixed = {
    kind: 'a_extmap_allow_mixed';
    value: string;
    uses_short_nl: boolean;
};
declare type AStandardSctpPort = {
    kind: 'a_standard_sctp_port';
    value: string;
    uses_short_nl: boolean;
};
declare type ACustomSctpPort = {
    kind: 'a_custom_sctp_port';
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
declare type ParsedLine = UnknownLine | VersionZeroLine | VersionLine | AMsidSemanticNS | AMsidSemanticWS | AExtmapAllowMixed | AStandardSctpPort | ACustomSctpPort | UnknownTerminate;
declare type ParsedSdp = {
    kind: 'offer' | 'answer' | 'unknown' | 'unknown_terminate' | 'version_line' | 'version_zero_line' | 'a_msid_semantic_ns' | 'a_msid_semantic_ws' | 'a_extmap_allow_mixed' | 'a_standard_sctp_port' | 'a_custom_sctp_port';
    value: ParsedLine[];
    loc: PegLocation;
};
export { UnknownLine, VersionZeroLine, VersionLine, ParsedLine, PegCoord, PegLocation, ParsedSdp };
