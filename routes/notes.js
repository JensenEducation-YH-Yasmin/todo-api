const {Router} = require('express')

const Note = require('../models/Note')
const router = new Router()


router.get('/', async (req,res) => {
    const notes = await Note.all()
    res.json(notes)
})

router.get('/:id', async (req,res) => {
    const note = await Note.get(req.params.id)
    if(note){
        res.json(note)
    }else{
        res.status(404).send({error: "Note not found"})
    }
})
router.post('/', async (req,res) => {
    const result = await Note.create(req.body)
    if(!result.error){
        res.status(200).json(result)
    }else{
        res.status(400).json(result.error)
    }
})

/**
 * 
 */
router.patch('/:id', async (req,res) => {
    const result = await Note.update(req.params.id, req.body)
    if(!result.error){
        res.status(200).json({message: `Note ${req.params.id} updated!`})
    }else{
        res.status(404).json(result.error)
    }
    
})
router.delete('/:id', async (req,res) => {
    const result = await Note.remove(req.params.id)
    if(!result.error){
        res.status(200).json({message: `Note ${req.params.id} removed!`})
    }else{
        res.status(400).json(result.error)
    }
})

module.exports = router