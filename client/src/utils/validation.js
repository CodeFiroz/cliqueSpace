const validation = {
    name: (name) => {
        const regex = /^[A-Za-z\s'-]{2,}$/;
        return regex.test(name.trim());
    },
    email: (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email.trim());
    },

    password: (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
        return regex.test(password);
    }
}

export default validation;