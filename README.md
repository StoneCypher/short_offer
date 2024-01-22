# short_offer

[Live client](https://stonecypher.github.io/short_offer/)

[Offer detector](https://stonecypher.github.io/peer_detector/)

Write a shortened offer claim for WebRTC.  Compress a WebRTC offer so much that you can just put it in a URL, and skip the backend infrastructure entirely.

Offers are returned almost byte-identical.  Small concessions are made for compression:

1. The framing JSON can have its whitespace dropped
2. IPv4 and IPv6 addresses will have leading zeroes dropped
3. All decimal integers will have leading zeroes dropped
4. IPv6 addresses will be represented in lower case, and double-colon sequences will be expanded
5. SHA fingerprints will be represented in upper case

Other than these, values (including unknown future values and illegal values) will be represented perfectly.

<img src="/src/maintained_artifacts/stats_by_version_relative.png" width="500" />

<img src="/src/maintained_artifacts/stats_by_version_absolute.png" width="500" />



<br/><br/>

# What?

SDP offer and answer exchanges are powerful, but they're also verbose.

This library parses SDP to and from a JSON representation and a novel string
representation, and byte-accurately back to the original SDP claim.

Whereas the novel encoding is byte-safe for any Javascript representable string,
it is heavily tuned for the efficient representation of [RFC 3264 offer and
answer exchanges](https://datatracker.ietf.org/doc/html/rfc3264).

