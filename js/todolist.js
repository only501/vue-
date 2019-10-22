var vm = new Vue({
    el:'#app',
    data:{
        inp:'',
        list:[],
        list1:[],

    },
    
    methods:{
     add:function(){
      if(!this.inp) return
      this.list.push({
        title:this.inp,
        time:Date.now()
    })
         this.inp = '';
     },
     re:function(i,type){
        if(type === '1'){
        this.list.splice(i,1)
        }else{
        this.list1.splice(i,1)
        }
     },
     me:function(i,type){
      if(type==='1'){
          var res = this.list.splice(i,1)
          this.list1.push(res[0])
      }else{
        var res = this.list1.splice(i,1)
          this.list.push(res[0])  
      }
     }
    }
})