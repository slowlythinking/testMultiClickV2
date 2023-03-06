<template>
  <div class="btn1" @touchstart.native="posClick">{{ d1 }}</div>
  <div class="btn2" @touchstart.native="posClick">{{ d2 }}</div>
  <div class="btn3" @touchstart.native="posClick">{{ d3 }}</div>
  <div class="btn4" @touchstart.native="posClick">{{ d4 }}</div>
  <div class="btn5" @touchstart.native="posClick">{{ d5 }}</div>
</template>
<script setup>
import { ref, getCurrentInstance, onMounted, toRefs   } from 'vue'
import interact from 'interactjs'
import Hammer from 'hammerjs'

onMounted(()=>{
    // Get a reference to an element
    var square1 = document.querySelector('.btn1');
    var square2 = document.querySelector('.btn2');
    var square3 = document.querySelector('.btn3');
    hmm(square1)
    hmm(square2)
    hmm(square3)

})

function hmm (obj) {
    // Create a manager to manager the element
    var manager = new Hammer.Manager(obj);

    // Create a recognizer
    var Press = new Hammer.Press({
      time: 500
    });

    // Add the recognizer to the manager
    manager.add(Press);

    // Subscribe to desired event
    manager.on('press', function(e) {
      e.target.classList.toggle('expand');
    });
}

function posClick (e) {
  e.preventDefault()
  var name = e.target.className
  if (name == "btn1") {
    d1.value = name
    console.log(d1)
  }
  if (name == "btn2") {
    d2.value = name
  }
  if (name == "btn3") {
    d3.value = name
  }
  if (name == "btn4") {
    d4.value = name
  }
  if (name == "btn5") {
    d5.value = name
  }
}
const url = ref("https://bobobq.cn:18081/#/")
var d1 = ref("1")
var d2 = ref("2")
var d3 = ref("3")
var d4 = ref("4")
var d5 = ref("5")
</script>
<style lang="scss" scoped>

</style>
<style lang="scss">
body {
  width: 3840px;
  height: 1080px;
}
.center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.square {
  width: 90px;
  height: 90px;
  background-color: #689F38;
  transition: transform 300ms ease-out;
}

.expand {
  transform: scale(2.5);
}

.pos1,.pos2,.pos3 {
  border: 1px solid red;
  position: absolute;
  width:1200px;
  height: 750px;
}
.pos1 {
  top: 50px;
  left:60px;
}
.pos2 {
  top: 50px;
  left:1320px;
}
.pos3 {
  top: 50px;
  left:2580px;
}

.btn1,.btn2,.btn3, .btn4, .btn5{
  border: 1px solid rgb(179, 255, 0);
  position: absolute;
  width:60px;
  height: 160px;
  &:active {
    background-color:aqua;
  }
}
.btn1 {
  top: 850px;
  //left:630px;
  left:300px;
}
.btn2 {
  top: 850px;
  //left:1890px;
  left:500px;
}
.btn3 {
  top: 850px;
  //left:3150px;
  left:700px;
}
.btn4 {
  top: 850px;
  //left:3150px;
  left:900px;
}
.btn5 {
  top: 850px;
  //left:3150px;
  left:1100px;
}
</style>
