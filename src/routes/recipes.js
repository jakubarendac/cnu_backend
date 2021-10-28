import express from "express"
import {param, validationResult} from "express-validator"

import services from "../services"

const router = express.Router()

router.get('/', services.recipes.getAllRecipes)

router.get('/:title', param('title').isLength({min: 2, max: 50}), async (req, res)=> { 
    try{
        const result = validationResult(req)
        if(result.isEmpty()){
            const filteredRecipes = await req.context.models.recipe.findAll({
                where: {title: req.params.title},
                include: [{model: req.context.models.ingredient}] 
            })
            //throw new Error('some bad stuff happend')
            res.send(filteredRecipes)
        } else {
            req.log.info(`validation error value: ${req.params.title}`)
            res.status(400)
            res.send('validation Error')
        }
    } catch(error) { 
        req.log.error(error)
        res.sendStatus(500)
    }
})

export default router