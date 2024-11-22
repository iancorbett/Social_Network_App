const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },
        
            createdAt: {
                type: Date,
                default: Date.now,
                get: function(time) {
                    return dayjs(time).format('MM/DD/YYYY')
                }
            },
            username: {
                type: String,
                required: true
            },
          
            reactionId: {
                type: Schema.Types.ObjectId,
                default: function() {
                    return new Types.ObjectId()
                }
            }
          
        
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }

    }
)



module.exports = reactionSchema;