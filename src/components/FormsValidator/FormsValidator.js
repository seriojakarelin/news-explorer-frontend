import { userDataValidation } from '../../utils/userDataValidation';


class FormsValidator {
    

    validateEmailInput(emailInputValue) {
        const result = {};
        Object.keys(userDataValidation.userEmail)
            .forEach((errorKey) => {
                const errorResult = userDataValidation.userEmail[errorKey](emailInputValue);
                result[errorKey] = errorResult;
            });
        return result;
    }

    validatePasswordInput(passwordInputValue) {
        const result = {};
        Object.keys(userDataValidation.userPassword)
            .forEach((errorKey) => {
                const errorResult = userDataValidation.userPassword[errorKey](passwordInputValue);
                result[errorKey] = errorResult;
            });
        return result;
    }

    validateNameInput(nameInputValue) {
        const result = {};
        Object.keys(userDataValidation.userName)
            .forEach((errorKey) => {
                const errorResult = userDataValidation.userName[errorKey](nameInputValue);
                result[errorKey] = errorResult;
            });
        return result;
    }
}

export const formsValidator = new FormsValidator();