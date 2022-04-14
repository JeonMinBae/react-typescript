export default function getSuccessFailureType(type: string): [string, string, string] {
    const SUCCESS = `${type}_SUCCESS` as const;
    const FAILURE = `${type}_FAILURE` as const;

    return [type, SUCCESS, FAILURE];
};