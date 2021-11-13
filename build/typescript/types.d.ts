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
declare type AStandardMaxMessageSize = {
    kind: 'a_standard_max_message_size';
    value: string;
    uses_short_nl: boolean;
};
declare type ACustomMaxMessageSize = {
    kind: 'a_custom_max_message_size';
    value: string;
    uses_short_nl: boolean;
};
declare type ASetupActPass = {
    kind: 'a_setup_actpass';
    value: string;
    uses_short_nl: boolean;
};
declare type ASetupActive = {
    kind: 'a_setup_active';
    value: string;
    uses_short_nl: boolean;
};
declare type AMidZero = {
    kind: 'a_mid_zero';
    value: string;
    uses_short_nl: boolean;
};
declare type SDash = {
    kind: 's_dash';
    value: string;
    uses_short_nl: boolean;
};
declare type TZeroZero = {
    kind: 't_zero_zero';
    value: string;
    uses_short_nl: boolean;
};
declare type StandardMozOrigin = {
    kind: 'standard_moz_origin';
    value: string;
    uses_short_nl: boolean;
    moz_ver: [number, number, number];
    sess: number;
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
declare type ParsedLine = UnknownLine | VersionZeroLine | VersionLine | AMsidSemanticNS | AMsidSemanticWS | AExtmapAllowMixed | AStandardSctpPort | ACustomSctpPort | AStandardMaxMessageSize | ACustomMaxMessageSize | ASetupActPass | ASetupActive | AMidZero | SDash | TZeroZero | StandardMozOrigin | UnknownTerminate;
declare type ParsedSdp = {
    kind: 'offer' | 'answer' | 'unknown' | 'unknown_terminate' | 'version_line' | 'version_zero_line' | 'a_msid_semantic_ns' | 'a_msid_semantic_ws' | 'a_extmap_allow_mixed' | 'a_standard_sctp_port' | 'a_custom_sctp_port' | 'a_standard_max_message_size' | 'a_setup_actpass' | 'a_setup_active' | 'a_mid_zero' | 's_dash' | 't_zero_zero' | 'standard_moz_origin' | 'a_custom_max_message_size';
    value: ParsedLine[];
    loc: PegLocation;
};
export { UnknownLine, VersionZeroLine, VersionLine, StandardMozOrigin, ParsedLine, PegCoord, PegLocation, ParsedSdp };
