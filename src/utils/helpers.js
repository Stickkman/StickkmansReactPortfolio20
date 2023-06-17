// helper functions for form validations

// might modify regex for validEmail later
export function validateEmail(email) {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        return validEmail.test(String(email).toLowerCase());
};

