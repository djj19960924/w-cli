import test from '@/component/test/test'
import './index.css'
import img from '@/img.png'
document.querySelector('#img').src = img
console.log(img)
console.log(test)
console.log('hello')
console.log('12345')
new Promise((resolve, reject) => {
  resolve(456)
}).then(res => {
  console.log(res)
})
let arr = [1,2,3]
arr.map(item => {
  console.log(item)
})
class Ren {
  constructor() {
    console.log('ren')
  }
}
const r = new Ren()