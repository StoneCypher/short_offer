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
declare type AGroupBundleZero = {
    kind: 'a_group_bundle_0';
    value: string;
    uses_short_nl: boolean;
};
declare type CClaimIp4 = {
    kind: 'c_claim_ip4';
    value: string;
    uses_short_nl: boolean;
};
declare type StandardMApplication = {
    kind: 'standard_m_application';
    value: string;
    uses_short_nl: boolean;
};
declare type AIceOptionsTrickle = {
    kind: 'a_ice_options_trickle';
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
declare type BAs30 = {
    kind: 'b_as_30';
    value: string;
    uses_short_nl: boolean;
};
declare type StandardOrigin = {
    kind: 'standard_origin';
    value: string;
    uses_short_nl: boolean;
    items: [s: number, d: number, i: number];
};
declare type StandardMozOrigin = {
    kind: 'standard_moz_origin';
    value: string;
    uses_short_nl: boolean;
    moz_ver: [number, number, number];
    sess: number;
};
declare type StandardLocalCandidate = {
    kind: 'standard_local_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
declare type StandardGuidLocalCandidate = {
    kind: 'standard_guid_local_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i: number, p: number, i4: number];
};
declare type StandardGuidLocalCandidateFfUS = {
    kind: 'standard_guid_local_candidate_ffus';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i: number, p: number, i4: number];
};
declare type StandardRemoteCandidate = {
    kind: 'standard_remote_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
declare type StandardRemoteCandidateFfUS = {
    kind: 'standard_remote_candidate_ffus';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number];
};
declare type StandardAGenTcpCandidate = {
    kind: 'standard_agen_tcp_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
declare type StandardAGenTcp6Candidate = {
    kind: 'standard_agen_tcp6_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
declare type StandardAGenUdp4Candidate = {
    kind: 'standard_agen_udp4_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
declare type StandardAGenUdp6HostCandidate = {
    kind: 'standard_agen_udp6_host_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
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
declare type ParsedLine = UnknownLine | VersionZeroLine | VersionLine | AMsidSemanticNS | AMsidSemanticWS | AExtmapAllowMixed | AStandardSctpPort | ACustomSctpPort | AStandardMaxMessageSize | ACustomMaxMessageSize | ASetupActPass | ASetupActive | AMidZero | AGroupBundleZero | CClaimIp4 | StandardMApplication | AIceOptionsTrickle | SDash | TZeroZero | BAs30 | StandardOrigin | StandardMozOrigin | StandardLocalCandidate | StandardGuidLocalCandidate | StandardGuidLocalCandidateFfUS | StandardRemoteCandidate | StandardRemoteCandidateFfUS | StandardAGenTcpCandidate | StandardAGenTcp6Candidate | StandardAGenUdp4Candidate | StandardAGenUdp6HostCandidate | UnknownTerminate;
declare type ParsedSdp = {
    kind: 'offer' | 'answer' | 'unknown' | 'unknown_terminate' | 'version_line' | 'version_zero_line' | 'a_msid_semantic_ns' | 'a_msid_semantic_ws' | 'a_extmap_allow_mixed' | 'a_standard_sctp_port' | 'a_custom_sctp_port' | 'a_standard_max_message_size' | 'a_custom_max_message_size' | 'a_setup_actpass' | 'a_setup_active' | 'a_mid_zero' | 'a_group_bundle_0' | 'c_claim_ip4' | 'standard_m_application' | 'a_ice_options_trickle' | 's_dash' | 't_zero_zero' | 'b_as_30' | 'standard_origin' | 'standard_moz_origin' | 'standard_local_candidate' | 'standard_guid_local_candidate' | 'standard_guid_local_candidate_ffus' | 'standard_remote_candidate' | 'standard_remote_candidate_ffus' | 'standard_agen_tcp_candidate' | 'standard_agen_tcp6_candidate' | 'standard_agen_udp4_candidate' | 'standard_agen_udp6_host_candidate' | 'a_ice_pwd' | 'a_ice_pwd_l' | 'a_ice_ufrag_4' | 'a_ice_ufrag_8';
    value: ParsedLine[];
    loc: PegLocation;
};
export { UnknownLine, VersionZeroLine, VersionLine, StandardOrigin, StandardMozOrigin, StandardLocalCandidate, StandardGuidLocalCandidate, StandardGuidLocalCandidateFfUS, StandardRemoteCandidate, StandardRemoteCandidateFfUS, StandardAGenTcpCandidate, StandardAGenTcp6Candidate, StandardAGenUdp4Candidate, StandardAGenUdp6HostCandidate, ParsedLine, PegCoord, PegLocation, ParsedSdp };
