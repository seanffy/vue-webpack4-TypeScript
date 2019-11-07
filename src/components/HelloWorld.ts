import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  template: require('./HelloWorld.html').default
})
export default class HelloWorld extends Vue {
  msg:string = '123'

  created() {
    this.$axios.post('http://www.baidu.com',{
      id: 123
    }).then((ret)=>{
      console.log('ret',ret)
    })
  }
}