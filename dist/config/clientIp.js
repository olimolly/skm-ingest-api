import { isIP } from "node:net";
const RENDER_CLIENT_IP_HEADER = "cf-connecting-ip";
export function getClientIp(request) {
    const header = request.headers[RENDER_CLIENT_IP_HEADER];
    const candidate = Array.isArray(header) ? header[0] : header;
    // Render's Cloudflare edge overwrites CF-Connecting-IP. X-Forwarded-For is
    // deliberately ignored because a client can control its leftmost value.
    if (candidate) {
        const normalizedCandidate = candidate.trim();
        if (isIP(normalizedCandidate))
            return normalizedCandidate;
    }
    return request.raw.socket.remoteAddress ?? request.ip;
}
//# sourceMappingURL=clientIp.js.map