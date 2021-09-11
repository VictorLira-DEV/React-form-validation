export type IformTypes = {
    val: string;
    type:
        | "USERNAME_CHANGE"
        | "USERNAME_BLUR"
        | "EMAIL_CHANGE"
        | "EMAIL_BLUR"
        | "PASSWORD_CHANGE"
        | "PASSWORD_BLUR"
        | "PASSWORD_CHECK_CHANGE"
        | "PASSWORD_CHECK_BLUR"
        | "PASSWORD_INVALID";
};

export type IformState = {
    value: string;
    isValid: boolean | string;
    errorMessage: string
};
