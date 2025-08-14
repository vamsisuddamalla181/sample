import mongoose from "mongoose"

export const mongo = async () => {
    try {
        const url = process.env.mongo_url
        if (!url) {
            throw new Error("can not find the url")
        }
        const mongo = mongoose.connect(url)
            .then(() => {
                console.log("server is connected to the database")
            })
            .catch((error) => {
                console.log("server is not connected")
            })
    }
    catch(error){
        console.log("server error"+error)
    }
}
