export const fieldValidator = fieldName =>{
    const fieldRegex = /^[a-zA-Z]+$/;
    return fieldRegex.test(fieldName)
}
export const typeValidation = type =>{
    const fieldRegex = /^[a-zA-Z]+$/;
    return fieldRegex.test(type)
}
export const numberValidator = number =>{
    const fieldRegex = /^\d+$/;
    return fieldRegex.test(number)
}
export const posxValidator = posX =>{
    const fieldRegex = /^[a-zA-Z]+$/;
    return fieldRegex.test(posX)
}
export const posyValidator = posY =>{
    const fieldRegex = /^[a-zA-Z]+$/;
    return fieldRegex.test(posY)
}
export const sizexValidator = sizeX =>{
    const fieldRegex = /^\d+$/;
    return fieldRegex.test(sizeX)
}
export const sizeyValidator = sizeY =>{
    const fieldRegex = /^\d+$/;
    return fieldRegex.test(sizeY)
}
