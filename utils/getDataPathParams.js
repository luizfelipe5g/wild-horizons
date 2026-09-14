export const getDataPathParams = (data, typeLocation, nameContent) => {
    return data.filter((destination) => {
         return destination[typeLocation].toLowerCase() === nameContent.toLowerCase()
    });
}