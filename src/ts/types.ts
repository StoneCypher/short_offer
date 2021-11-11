
type VLine            = { kind: 'vline',             value: string, uses_short_nl: boolean };
type UnknownLine      = { kind: 'unknown_line',      value: string, uses_short_nl: boolean };
type UnknownTerminate = { kind: 'unknown_terminate', value: string, uses_short_nl: boolean };

type PegCoord         = { offset: number; line: number; column: number; };
type PegLocation      = { start: PegCoord; end: PegCoord };

type ParsedLine       = UnknownLine | VLine | UnknownTerminate;

type ParsedSdp = {
  kind  : 'offer' | 'answer' | 'unknown' | 'unknown_terminate',
  value : ParsedLine[],
  loc   : PegLocation
};





const astIds = {

  aid_error       : 1,
  aid_unknownLine : 2,
  aid_offer       : 2,
  aid_answer      : 3,
  aid_vline       : 4

} as const;





export {
  UnknownLine, VLine, ParsedLine,
  PegCoord, PegLocation,
  ParsedSdp,
  astIds
};
