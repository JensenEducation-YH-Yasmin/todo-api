const Datastore = require('nedb-promise')

const notes = new Datastore({filename:'./data/notes.db', autoload: true})

module.exports = {
    async all(){
        return await notes.find({})
    },
    async get(_id){
        return await notes.findOne({_id})
    },
    async create(body){
        const {content} = body
        return await notes.insert({content, done:false})
    },
    async update(_id, body){
        const note = await notes.findOne({_id})
        if(!note) return {error: "Note not found"}
        
        const content = body.content || note.content
        const done = body.done || note.done

        return await notes.update({_id}, {$set:{content,done}})
    },
    async remove(_id){
        const note = await notes.findOne({_id})
        if(!note) return {error: "Note not found"}
        
        return await notes.remove({_id})
    },
}