
type VersionZeroLine  = { kind: 'version_zero_line',  value: string, uses_short_nl: boolean };
type VersionLine      = { kind: 'version_line',       value: string, uses_short_nl: boolean };

type AMsidSemanticNS  = { kind: 'a_msid_semantic_ns', value: string, uses_short_nl: boolean };
type AMsidSemanticWS  = { kind: 'a_msid_semantic_ws', value: string, uses_short_nl: boolean };

type UnknownLine      = { kind: 'unknown_line',       value: string, uses_short_nl: boolean };
type UnknownTerminate = { kind: 'unknown_terminate',  value: string, uses_short_nl: boolean };

type PegCoord         = { offset: number; line: number; column: number; };
type PegLocation      = { start: PegCoord; end: PegCoord };

type ParsedLine
  = UnknownLine
  | VersionZeroLine | VersionLine
  | AMsidSemanticNS | AMsidSemanticWS
  | UnknownTerminate;

type ParsedSdp = {
  kind  : 'offer' | 'answer' | 'unknown' | 'unknown_terminate' | 'version_line'
        | 'version_zero_line' | 'a_msid_semantic_ns' | 'a_msid_semantic_ws',
  value : ParsedLine[],
  loc   : PegLocation
};





export {
  UnknownLine,
  VersionZeroLine, VersionLine,
  ParsedLine,
  PegCoord, PegLocation,
  ParsedSdp
};
