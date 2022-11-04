const { Schema, model } = require("mongoose")

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "A blog must have a title"],
        minLength: 5,
    },
    description: {
        type: String,
        required: [true, "A description of the blog must be published"],
        minLength: 25
    }, 
    tags: [String],
    author: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: [true, "a blog must have an author"]
    },
    timeStamp: {
        type: Date,
        default: Date.now()
    },
    state: {
        type: Enumerator,
        value: ["draft", "publish"]
    },
    read_count: Number,
    reading_time: Number,
    body: {
        type: String,
        minLength: 15,
        maxLenght: 800,
        required: [true, "Body message for the blog must be provided in more than 20 words"]
    }
})

const Blog = model("blog", blogSchema)

module.exports = Blog