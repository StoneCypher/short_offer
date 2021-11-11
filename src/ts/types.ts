
type UnknownLine = { value: string };
type VLine       = { value: string };

type PegCoord    = { offset: number; line: number; column: number; };
type PegLocation = { start: PegCoord; end: PegCoord };

type ParsedLine = UnknownLine | VLine;

type ParsedSdp = {
  kind  : 'offer' | 'answer',
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
