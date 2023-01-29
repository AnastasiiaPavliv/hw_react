import Joi from "joi";

const carValid=Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки від 1 до 20 букв'
    }),
    price:Joi.number().min(1).max(1000000).required().messages({
        'number.min':'Мінімум 1',
        'number.max':'Максимум 1000000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'Мінімум 1990',
        'number.max':`Максимум ${new Date().getFullYear()}`
    })

})
export {carValid}