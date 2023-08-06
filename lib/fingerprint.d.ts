declare const baseFingerprint: {
    DNT: string;
    L: string;
    D: number;
    PR: number;
    S: number[];
    AS: number[];
    TO: number;
    SS: boolean;
    LS: boolean;
    IDB: boolean;
    B: boolean;
    ODB: boolean;
    CPUC: string;
    PK: string;
    CFP: string;
    FR: boolean;
    FOS: boolean;
    FB: boolean;
    JSF: string[];
    P: string[];
    T: (number | boolean)[];
    H: number;
    SWF: boolean;
};
declare function getFingerprint(): {
    DNT: string;
    L: string;
    D: number;
    PR: number;
    S: number[];
    AS: number[];
    TO: number;
    SS: boolean;
    LS: boolean;
    IDB: boolean;
    B: boolean;
    ODB: boolean;
    CPUC: string;
    PK: string;
    CFP: string;
    FR: boolean;
    FOS: boolean;
    FB: boolean;
    JSF: string[];
    P: string[];
    T: (number | boolean)[];
    H: number;
    SWF: boolean;
};
declare function prepareF(fingerprint: any): string;
declare function prepareFe(fingerprint: any): any[];
declare function getEnhancedFingerprint(fp: typeof baseFingerprint, ua: string, opts: any): {
    key: string;
    value: any;
}[];
declare const _default: {
    getFingerprint: typeof getFingerprint;
    prepareF: typeof prepareF;
    prepareFe: typeof prepareFe;
    getEnhancedFingerprint: typeof getEnhancedFingerprint;
};
export default _default;
