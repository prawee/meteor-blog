Meteor.startup(function(){
    console.log('Server started');

    if(Posts.find().count()===0){
        console.log('Adding dummy posts');
        var dummyPosts=[
            {
                title: 'My First entry',
                slug:'my-first-entry',
                decscription:'Lorem ipsum dolor sit amet.',
                text:'Lorem ipsum dolor sit amet...',
                timeCreated:moment().subtract(7,'days').unix(),
                author:'John Doe'
            },
            {
                title:'My Second entry',
                slug:'my-second-entry',
                decscription:'Borem ipsum dolar site.',
                text:'Lorem ipsum dolor site amet...',
                timeCreated:moment().subtract(5,'days').unix(),
                author:'John Doe'
            },
            {
                title:'My Third entry',
                slug:'my-third-entry',
                decscription:'Borem ipsum dolar site.',
                text:'Lorem ipsum dolor site amet...',
                timeCreated:moment().subtract(2,'days').unix(),
                author:'John Doe'
            },
            {
                title:'My Fourth entry',
                slug:'my-fourth-entry',
                decscription:'Borem ipsum dolar site.',
                text:'Lorem ipsum dolor site amet...',
                timeCreated:moment().subtract(2,'days').unix(),
                author:'John Doe'
            },
            {
                title:'My Fifth entry',
                slug:'my-fifth-entry',
                decscription:'Borem ipsum dolar site.',
                text:'Lorem ipsum dolor site amet...',
                timeCreated:moment().subtract(1,'days').unix(),
                author:'John Doe'
            }
        ];
        _.each(dummyPosts,function(post){
            Posts.insert(post);
        });
    }
});
