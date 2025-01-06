type IPv4asDecimalAsString = string;
type VersionZeroLine = {
    kind: 'version_zero_line';
    value: string;
    uses_short_nl: boolean;
};
type VersionLine = {
    kind: 'version_line';
    value: string;
    uses_short_nl: boolean;
};
type AMsidSemanticNS = {
    kind: 'a_msid_semantic_ns';
    value: string;
    uses_short_nl: boolean;
};
type AMsidSemanticWS = {
    kind: 'a_msid_semantic_ws';
    value: string;
    uses_short_nl: boolean;
};
type AExtmapAllowMixed = {
    kind: 'a_extmap_allow_mixed';
    value: string;
    uses_short_nl: boolean;
};
type AStandardSctpPort = {
    kind: 'a_standard_sctp_port';
    value: string;
    uses_short_nl: boolean;
};
type ACustomSctpPort = {
    kind: 'a_custom_sctp_port';
    value: string;
    uses_short_nl: boolean;
};
type AStandardMaxMessageSize = {
    kind: 'a_standard_max_message_size';
    value: string;
    uses_short_nl: boolean;
};
type ACustomMaxMessageSize = {
    kind: 'a_custom_max_message_size';
    value: string;
    uses_short_nl: boolean;
};
type ASetupActPass = {
    kind: 'a_setup_actpass';
    value: string;
    uses_short_nl: boolean;
};
type ASetupActive = {
    kind: 'a_setup_active';
    value: string;
    uses_short_nl: boolean;
};
type AMidZero = {
    kind: 'a_mid_zero';
    value: string;
    uses_short_nl: boolean;
};
type AGroupBundleZero = {
    kind: 'a_group_bundle_0';
    value: string;
    uses_short_nl: boolean;
};
type CClaimIp4 = {
    kind: 'c_claim_ip4';
    value: string;
    uses_short_nl: boolean;
};
type StandardMApplication = {
    kind: 'standard_m_application';
    value: string;
    uses_short_nl: boolean;
};
type AIceOptionsTrickle = {
    kind: 'a_ice_options_trickle';
    value: string;
    uses_short_nl: boolean;
};
type SDash = {
    kind: 's_dash';
    value: string;
    uses_short_nl: boolean;
};
type TZeroZero = {
    kind: 't_zero_zero';
    value: string;
    uses_short_nl: boolean;
};
type BAs30 = {
    kind: 'b_as_30';
    value: string;
    uses_short_nl: boolean;
};
type StandardOrigin = {
    kind: 'standard_origin';
    value: string;
    uses_short_nl: boolean;
    items: [s: number, d: number, i: number];
};
type StandardMozOrigin = {
    kind: 'standard_moz_origin';
    value: string;
    uses_short_nl: boolean;
    moz_ver: [number, number, number];
    sess: number;
};
type StandardLocalCandidate = {
    kind: 'standard_local_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
type StandardGuidLocalCandidate = {
    kind: 'standard_guid_local_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i: number, p: number, i4: number];
};
type StandardGuidLocalCandidateFfUS = {
    kind: 'standard_guid_local_candidate_ffus';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i: number, p: number, i4: number];
};
type StandardRemoteCandidate = {
    kind: 'standard_remote_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
type StandardRemoteCandidateFfUS = {
    kind: 'standard_remote_candidate_ffus';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number];
};
type StandardAGenTcpCandidate = {
    kind: 'standard_agen_tcp_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
type StandardAGenTcp6Candidate = {
    kind: 'standard_agen_tcp6_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
type StandardAGenUdp4Candidate = {
    kind: 'standard_agen_udp4_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
type StandardAGenUdp6HostCandidate = {
    kind: 'standard_agen_udp6_host_candidate';
    value: string;
    uses_short_nl: boolean;
    items: [d1: number, d2: number, d3: number, i1: number, d4: number, i2: number, d5: number, d6: number];
};
type UnknownLine = {
    kind: 'unknown_line';
    value: string;
    uses_short_nl: boolean;
};
type UnknownTerminate = {
    kind: 'unknown_terminate';
    value: string;
    uses_short_nl: boolean;
};
type PegCoord = {
    offset: number;
    line: number;
    column: number;
};
type PegLocation = {
    start: PegCoord;
    end: PegCoord;
};
type ParsedLine = UnknownLine | VersionZeroLine | VersionLine | AMsidSemanticNS | AMsidSemanticWS | AExtmapAllowMixed | AStandardSctpPort | ACustomSctpPort | AStandardMaxMessageSize | ACustomMaxMessageSize | ASetupActPass | ASetupActive | AMidZero | AGroupBundleZero | CClaimIp4 | StandardMApplication | AIceOptionsTrickle | SDash | TZeroZero | BAs30 | StandardOrigin | StandardMozOrigin | StandardLocalCandidate | StandardGuidLocalCandidate | StandardGuidLocalCandidateFfUS | StandardRemoteCandidate | StandardRemoteCandidateFfUS | StandardAGenTcpCandidate | StandardAGenTcp6Candidate | StandardAGenUdp4Candidate | StandardAGenUdp6HostCandidate | UnknownTerminate;
type ParsedSdp = {
    kind: 'offer' | 'answer' | 'unknown' | 'unknown_terminate' | 'version_line' | 'version_zero_line' | 'a_msid_semantic_ns' | 'a_msid_semantic_ws' | 'a_extmap_allow_mixed' | 'a_standard_sctp_port' | 'a_custom_sctp_port' | 'a_standard_max_message_size' | 'a_custom_max_message_size' | 'a_setup_actpass' | 'a_setup_active' | 'a_mid_zero' | 'a_group_bundle_0' | 'c_claim_ip4' | 'standard_m_application' | 'a_ice_options_trickle' | 's_dash' | 't_zero_zero' | 'b_as_30' | 'standard_origin' | 'standard_moz_origin' | 'standard_local_candidate' | 'standard_guid_local_candidate' | 'standard_guid_local_candidate_ffus' | 'standard_remote_candidate' | 'standard_remote_candidate_ffus' | 'standard_agen_tcp_candidate' | 'standard_agen_tcp6_candidate' | 'standard_agen_udp4_candidate' | 'standard_agen_udp6_host_candidate' | 'a_ice_pwd' | 'a_ice_pwd_l' | 'a_ice_ufrag_4' | 'a_ice_ufrag_8';
    value: ParsedLine[];
    loc: PegLocation;
    addresses?: {
        v4: IPv4asDecimalAsString[];
    };
};
export { UnknownLine, VersionZeroLine, VersionLine, StandardOrigin, StandardMozOrigin, StandardLocalCandidate, StandardGuidLocalCandidate, StandardGuidLocalCandidateFfUS, StandardRemoteCandidate, StandardRemoteCandidateFfUS, StandardAGenTcpCandidate, StandardAGenTcp6Candidate, StandardAGenUdp4Candidate, StandardAGenUdp6HostCandidate, ParsedLine, PegCoord, PegLocation, ParsedSdp };
