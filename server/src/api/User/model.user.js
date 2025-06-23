import mongoose, { Mongoose } from "mongoose"

const UserSchemaModel = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    pfp: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    resetPasswordToken: {
    type: String
    },
    resetPasswordExpiry: {
    type: Date
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    joinedCommunities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]


},
{timestamps: true}
);

const User = mongoose.model("User", UserSchemaModel);

export default User;