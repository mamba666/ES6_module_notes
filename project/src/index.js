import "./css/1.css"
import "./css/2.less"
import APP from "./components/app.vue"
import Vue from "vue"

let vm = new Vue({
  el: "#app",
  render: h => h(APP)
})
// import "./css/3.sass"
window.onload = function () {
  let li = document.getElementsByTagName("li")
  for (let i = 0; i < li.length; i++) {
    if (i % 2 == 0) {
      li[i].style.background = "yellow"
    } else {
      li[i].style.background = "blue"
    }
  }
}

class Person {
  static info = "aaa"
}
console.log(Person.info)