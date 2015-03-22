Template.home.created=function(){
	console.log('Created the home template');
    this.$('p').html('We just replaced that text!');
}

Template.home.rendered=function(){
	console.log('Rendered the home template');
}

Template.home.destroyed=function(){
	console.log('Destroyed the home template');
}

Template.home.helpers({
	exampleHelper:function(){
		return 'นี่คือข้อความจาก helper ด้วยการแสดงผลคำสั่ง <strong>HTML</strong>.';
	},
	podHelper:function(){
		return new Spacebars.SafeString('<hr/>อันนี้ก็เป็นอีกตัวอย่างหนึ่งที่ใช้ helper ร่วมกับ Spacebars.SafeString');
	},

    dataContextHelper:function(){
        return {
            someText:'ทดสอบการใช้งาน helper จาก template หลัก.',
            someNested:{
                text:'อันนี้มาจากไฟล์ => "someNested.text"'
            }
        }
    }
});
