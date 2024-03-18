//Page Schema
const PageSchema = {
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    sorting: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: function () {
            return Date.now();
        }
    }
};

const Page = module.exports = PageSchema;