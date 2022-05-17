export const setLocalStroage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const readFromLocalStorage = key => JSON.parse(localStorage.getItem(key));

export const initLocalStorage = (key, value) => {
    if (!readFromLocalStorage(key)) {
        setLocalStroage(key, value);
    }
};
