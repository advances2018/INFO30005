var mongoose = require('mongoose');
var contentSchema = mongoose.Schema({


    content_id: Number,
    content_name: String,
    content_upload_date: Date,
    content_creator_name: String,
    content_education_level: ["Primary","Secondary","College","University","Post grad"],
    content_rating: Number,
    content_link: String,
    content_face_image_url: String,
    content_description: String,

    //tags

    tags: [{type: String}],

    //comments

    comments: [{
        details: [{
            c_link: String,
            c_name: String,
            c_text: String,
            c_rating: Number
        }]
    }]

});

mongoose.model('info30005',contentSchema);



