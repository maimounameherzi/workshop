const roleSchema = require ('../models/roleModel')
const userSchema = require ('../models/model')
const bcrypt = require ('bcrypt')

const init = async () => {
    try { 
        const roleExist = await roleSchema.find ()
        if (roleExist.length == 0) {
            await roleSchema.insertMany ([
                {roleName: "admin"},
                {roleName: "gestionnaire"},
                {roleName: "user"}
            
            ])
            console.log ("admin, user, gestionnaire ")
        }
        const isAdmin = await roleSchema.findOne ({roleName: "admin"})
        if (!isAdmin)
         {const roleExist = await roleSchema.find ()
            if (roleExist.length == 0) {
                [
                    {roleName: "admin"},
                    {roleName: "gestionnaire"},
                    {roleName: "user"}
                
                ].map (async(el) => {
                    const exist = await roleSchema.findOne(el)
                    if (!exist) {
                        await roleSchema.insertOne (el)
                        console.log (`${el.roleName} created`)
                    }
                }) 
                console.log ("admin, user, gestionnaire ")
            }

        }
        const admin = await userSchema.findOne ({role:isAdmin._id})
        if (!admin) {
            const bb= new userSchema ({
                firstName : 'admin', 
                lastName : 'admin', 
                email : "admin@gmail.com", 
                password :bcrypt.hashSync(process.env.passwordHash,10), 
                role : isAdmin._id, 
                createdAt : new Date(), 
                updatedAt : new Date(), 

            })
            await bb.save()
            console.log("admin is created")

        }
    } catch (error) {

        console.error(error)
        
    }
}
module.exports = init