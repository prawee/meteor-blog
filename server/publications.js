/* all
Meteor.publish('all-posts',function(){
    return Posts.find();
});
*/

/*limit
Meteor.publish('limited-posts',function(){
    return Posts.find({},{
        limit:2,
        sort:{timeCreated:-1}
    });
});
*/

/* spectificfields
Meteor.publish('specificfields-posts',function(){
    return Posts.find({},{
        fields:{
            title:1
        }
    });
});
*/

Meteor.publish('lazyload-posts',function(limit){
    return Posts.find({},{
        limit:limit,
        fields:{
            text:0
        },
        sort:{timeCreated:-1}
    });
});
