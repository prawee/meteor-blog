Template.home.created=function(){
	console.log('Created the home template');
    //this.$('p').html('We just replaced that text!');
}

Template.home.rendered=function(){
	console.log('Rendered the home template');
}

Template.home.destroyed=function(){
	console.log('Destroyed the home template');
}

Template.home.helpers({
	exampleHelper:function(){
		return 'นี่คือข้อความจาก helper ด้วยการแสดงผลคำสั่ง <strong>HTML</strong>(exampleHelper).';
	},
	podHelper:function(){
		return new Spacebars.SafeString('<hr/>อันนี้ก็เป็นอีกตัวอย่างหนึ่งที่ใช้ helper ร่วมกับ Spacebars.SafeString (podHelper)');
	},

    dataContextHelper:function(){
        return {
            someText:'ทดสอบการใช้งาน helper จาก template หลัก.',
            someNested:{
                text:'อันนี้มาจากไฟล์ => "someNested.text"'
            }
        }
    },
    postsList:function(){
        /*return [
            {
                title:'My Second entry',
                decscription: 'รายละเอียดบทความที่สอง',
                author:'prawee wongsa',
                timeCreated: moment().subtract(3,'days').unix(),
            },
            {
                title:'My First entry',
                decscription: 'รายละเอียดบทความที่หนึ่ง',
                author:'thanakorn wongsa',
                timeCreated: moment().subtract(7,'days').unix()
            }
        ];*/
        return Posts.find({},{sort:{timeCreated:-1}});
    }
});

Template.home.events({
    'click button.lazyload':function(e,template){
        var currentLimit=Session.get('lazyloadLimit');
        Session.set('lazyloadLimit',currentLimit+2);
    }
});
