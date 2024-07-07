export const getKeyDex = (length = 5) => {
    const list = [];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    while (list.length < length) {
        list.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return list.join();
};
