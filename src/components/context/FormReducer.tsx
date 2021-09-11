type IformTypes = {
    val: string;
    type:
        | "USERNAME_CHANGE"
        | "USERNAME_BLUR"
        | "EMAIL_CHANGE"
        | "EMAIL_BLUR"
        | "PASSWORD_CHANGE"
        | "PASSWORD_BLUR"
        | "PASSWORD_CHECK_CHANGE"
        | "PASSWORD_INVALID_CHANGE"
        | "PASSWORD_VALID_CHANGE";
};

type IformState = {
    value: string;
    isValid: boolean | string;
};

export const FormReducer = (state: IformState, action: IformTypes) => {
    switch (action.type) {
        case "USERNAME_CHANGE":
            return {
                value: action.val,
                isValid: action.val.trim().length > 5,
                errorMessage: "",
            };
        case "USERNAME_BLUR":
            return {
                value: state.value,
                isValid: state.value.trim().length > 5,
                errorMessage: "",
            };

        case "EMAIL_CHANGE":
            return {
                value: action.val,
                isValid: action.val.trim().includes(".com"),
                errorMessage: "",
            };

        case "EMAIL_BLUR":
            return {
                value: state.value,
                isValid: state.value.trim().includes(".com"),
                errorMessage: "",
            };

        case "PASSWORD_CHANGE":
            return {
                value: action.val,
                isValid: action.val.trim().length > 5,
                errorMessage: "",
            };

        case "PASSWORD_BLUR":
            return {
                value: state.value,
                isValid: state.value.trim().length > 5,
                errorMessage: "",
            };

        case "PASSWORD_CHECK_CHANGE":
            return {
                value: action.val,
                isValid: "",
                errorMessage: "",
            };
        case "PASSWORD_INVALID_CHANGE":
            return {
                value: action.val,
                isValid: false,
                errorMessage: "Password does not match",
            };

        case "PASSWORD_VALID_CHANGE":
            return {
                value: action.val,
                isValid: true,
                errorMessage: "",
            };
        default: {
            return { value: "", isValid: "", errorMessage: "" };
        }
    }
};
