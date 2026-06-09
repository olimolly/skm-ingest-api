function parseCsvEnv(value?: string) {
    return new Set(
        (value ?? "")
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
    );
}

export function isAllowedReforgerServerId(serverId: string) {
    const allowedServerIds = parseCsvEnv(process.env.ALLOWED_REFORGER_SERVER_IDS);
    if (allowedServerIds.size === 0) return true;

    return allowedServerIds.has(serverId);
}

export function isAllowedReforgerIp(ip: string) {
    const allowedIps = parseCsvEnv(process.env.ALLOWED_REFORGER_IPS);
    if (allowedIps.size === 0) return true;

    return allowedIps.has(ip);
}