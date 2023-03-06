<template>
  <div id="posid1" class="pos1" @click="posClick">
    <!-- <iframe
      id="embed1"
      @click="posClick"
      :src="url"
      frameborder="0"
      class="pc iframe"
      scrolling="auto"
    ></iframe> -->
  </div>
  <div id="posid2" class="pos2" @click="posClick">
    <!-- <iframe
      id="embed2"
      @click="posClick"
      :src="url"
      frameborder="0"
      class="pc iframe"
      scrolling="auto"
    ></iframe> -->
  </div>
  <div id="posid3" class="pos3" @click="posClick">
    <!-- <iframe
      id="embed3"
      @click="posClick"
      :src="url"
      frameborder="0"
      class="pc iframe"
      scrolling="auto"
    ></iframe> -->
  </div>
  <div id="pos1t" class="bg1"></div>
  <div id="pos2t" class="bg2"></div>
  <div id="pos3t" class="bg3"></div>
  <div class="btn1" @click="posClick"></div>
  <div class="btn2" @click="posClick"></div>
  <div class="btn3"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import interact from "interactjs";
import Hammer from "hammerjs";
import G6 from '@antv/g6';

var gplot = null; // 拓扑图实例
var gplot1 = null; // 拓扑图实例
var gplot2 = null; // 拓扑图实例
var gplotData = {
  // 点集
  nodes: [
    {
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
      size: 60,
      x: 50, // Number，可选，节点位置的 x 值
      y: 50, // Number，可选，节点位置的 y 值
    },
    {
      id: 'node2',
      size: 60,
      x: 250,
      y: 50,
    },
    {
      id: 'node3',
      size: 60,
      x: 250,
      y: 250,
    },
    {
      id: 'node4',
      size: 60,
      x: 50,
      y: 250,
    }
  ],
  // 边集
  edges: [
    {
      source: 'node1', // String，必须，起始点 id
      target: 'node2', // String，必须，目标点 id
    },
    {
      source: 'node2',
      target: 'node3',
    },
    {
      source: 'node3',
      target: 'node4',
    },
    {
      source: 'node4',
      target: 'node1',
    },
  ]
}
var gplotData1 = {
  // 点集
  nodes: [
    {
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
      size: 60,
      x: 50, // Number，可选，节点位置的 x 值
      y: 50, // Number，可选，节点位置的 y 值
    },
    {
      id: 'node2',
      size: 60,
      x: 250,
      y: 50,
    },
    {
      id: 'node3',
      size: 60,
      x: 250,
      y: 250,
    },
    {
      id: 'node4',
      size: 60,
      x: 50,
      y: 250,
    }
  ],
  // 边集
  edges: [
    {
      source: 'node1', // String，必须，起始点 id
      target: 'node2', // String，必须，目标点 id
    },
    {
      source: 'node2',
      target: 'node3',
    },
    {
      source: 'node3',
      target: 'node4',
    },
    {
      source: 'node4',
      target: 'node1',
    },
  ]
}
var gplotData2 = {
  // 点集
  nodes: [
    {
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
      size: 60,
      x: 50, // Number，可选，节点位置的 x 值
      y: 50, // Number，可选，节点位置的 y 值
    },
    {
      id: 'node2',
      size: 60,
      x: 250,
      y: 50,
    },
    {
      id: 'node3',
      size: 60,
      x: 250,
      y: 250,
    },
    {
      id: 'node4',
      size: 60,
      x: 50,
      y: 250,
    }
  ],
  // 边集
  edges: [
    {
      source: 'node1', // String，必须，起始点 id
      target: 'node2', // String，必须，目标点 id
    },
    {
      source: 'node2',
      target: 'node3',
    },
    {
      source: 'node3',
      target: 'node4',
    },
    {
      source: 'node4',
      target: 'node1',
    },
  ]
}
function drawing2() {
  gplot2 = new G6.Graph({
    container: "posid3", // String | HTMLElement，必须，容器 id 或容器本身
    width: 800, // 设置画布宽度。 Number，必须
    height: 500, /// 设置画布高度。Number，必须
    // 交互模式 https://g6.antv.vision/zh/docs/manual/middle/states/mode
    modes: {
      // 内置 Behavior https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior#%E5%86%85%E7%BD%AE-behavior
      // default: ['zoom-canvas', 'drag-canvas', 'drag-node', 'brush-select']
      default: ['drag-node']
    },
    nodeStateStyles: {
      // 鼠标经过到节点上
      hover: {
        fill: 'yellow'
      },
      // 鼠标点击节点
      click: {
        stroke: 'red',
        lineWidth: 3
      }
    }
  })

  /**
   * graph.read(data)
   * 接收数据，并进行渲染，read 方法的功能相当于 data 和 render 方法的结合。
   * 官方文档：https://g6.antv.vision/zh/docs/api/graphFunc/data#graphreaddata
   * 
   * 等同于
   * graph.data(data.value)
   * graph.render()
   */
  gplot2.read(gplotData2)

  // this.gplot2.on('元素:事件名', event => {})

  // 点击画布事件
  gplot2.on('canvas:click', event => {
    // console.log(event)

    // 点击画布时，取消所有节点样式
    const nodes = gplot2.findAllByState('node', 'click')
    nodes.forEach(node => {
      gplot2.setItemState(node, 'click', false)
    })
  })

  // 点击节点事件
  gplot2.on('node:click', event => {
    // console.log(event)

    // 先取消其他节点样式
    const nodes = gplot2.findAllByState('node', 'click')
    nodes.forEach(node => {
      gplot2.setItemState(node, 'click', false)
    })

    // 设置当前被点击节点的样式
    gplot2.setItemState(event.item, 'click', true)
  })

  // 鼠标经过节点事件
  gplot2.on('node:mouseenter', event => {
    // console.log(event)
    gplot2.setItemState(event.item, 'hover', true)
  })

  // 鼠标移除节点事件
  gplot2.on('node:mouseleave', event => {
    // console.log(event)
    gplot2.setItemState(event.item, 'hover', false)
  })
};
function drawing1() {
  gplot1 = new G6.Graph({
    container: "posid2", // String | HTMLElement，必须，容器 id 或容器本身
    width: 800, // 设置画布宽度。 Number，必须
    height: 500, /// 设置画布高度。Number，必须
    // 交互模式 https://g6.antv.vision/zh/docs/manual/middle/states/mode
    modes: {
      // 内置 Behavior https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior#%E5%86%85%E7%BD%AE-behavior
      // default: ['zoom-canvas', 'drag-canvas', 'drag-node', 'brush-select']
      default: ['drag-node']
    },
    nodeStateStyles: {
      // 鼠标经过到节点上
      hover: {
        fill: 'yellow'
      },
      // 鼠标点击节点
      click: {
        stroke: 'red',
        lineWidth: 3
      }
    }
  })

  /**
   * graph.read(data)
   * 接收数据，并进行渲染，read 方法的功能相当于 data 和 render 方法的结合。
   * 官方文档：https://g6.antv.vision/zh/docs/api/graphFunc/data#graphreaddata
   * 
   * 等同于
   * graph.data(data.value)
   * graph.render()
   */
  gplot1.read(gplotData1)

  // this.gplot1.on('元素:事件名', event => {})

  // 点击画布事件
  gplot1.on('canvas:click', event => {
    // console.log(event)

    // 点击画布时，取消所有节点样式
    const nodes = gplot1.findAllByState('node', 'click')
    nodes.forEach(node => {
      gplot1.setItemState(node, 'click', false)
    })
  })

  // 点击节点事件
  gplot1.on('node:click', event => {
    // console.log(event)

    // 先取消其他节点样式
    const nodes = gplot1.findAllByState('node', 'click')
    nodes.forEach(node => {
      gplot1.setItemState(node, 'click', false)
    })

    // 设置当前被点击节点的样式
    gplot1.setItemState(event.item, 'click', true)
  })

  // 鼠标经过节点事件
  gplot1.on('node:mouseenter', event => {
    // console.log(event)
    gplot1.setItemState(event.item, 'hover', true)
  })

  // 鼠标移除节点事件
  gplot1.on('node:mouseleave', event => {
    // console.log(event)
    gplot1.setItemState(event.item, 'hover', false)
  })
};

function drawing() {
  gplot = new G6.Graph({
    container: "posid1", // String | HTMLElement，必须，容器 id 或容器本身
    width: 800, // 设置画布宽度。 Number，必须
    height: 500, /// 设置画布高度。Number，必须
    // 交互模式 https://g6.antv.vision/zh/docs/manual/middle/states/mode
    modes: {
      // 内置 Behavior https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior#%E5%86%85%E7%BD%AE-behavior
      // default: ['zoom-canvas', 'drag-canvas', 'drag-node', 'brush-select']
      default: ['drag-node']
    },
    nodeStateStyles: {
      // 鼠标经过到节点上
      hover: {
        fill: 'yellow'
      },
      // 鼠标点击节点
      click: {
        stroke: 'red',
        lineWidth: 3
      }
    }
  })

  /**
   * graph.read(data)
   * 接收数据，并进行渲染，read 方法的功能相当于 data 和 render 方法的结合。
   * 官方文档：https://g6.antv.vision/zh/docs/api/graphFunc/data#graphreaddata
   * 
   * 等同于
   * graph.data(data.value)
   * graph.render()
   */
  gplot.read(gplotData)

  // this.gplot.on('元素:事件名', event => {})

  // 点击画布事件
  gplot.on('canvas:click', event => {
    // console.log(event)

    // 点击画布时，取消所有节点样式
    const nodes = gplot.findAllByState('node', 'click')
    nodes.forEach(node => {
      gplot.setItemState(node, 'click', false)
    })
  })

  // 点击节点事件
  gplot.on('node:click', event => {
    // console.log(event)

    // 先取消其他节点样式
    const nodes = gplot.findAllByState('node', 'click')
    nodes.forEach(node => {
      gplot.setItemState(node, 'click', false)
    })

    // 设置当前被点击节点的样式
    gplot.setItemState(event.item, 'click', true)
  })

  // 鼠标经过节点事件
  gplot.on('node:mouseenter', event => {
    // console.log(event)
    gplot.setItemState(event.item, 'hover', true)
  })

  // 鼠标移除节点事件
  gplot.on('node:mouseleave', event => {
    // console.log(event)
    gplot.setItemState(event.item, 'hover', false)
  })
};

Object.prototype.toDirString = function () {
  var output = [];
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      var value = this[key];
      if (Array.isArray(value)) {
        value = "Array(" + value.length + "):" + value;
      } else if (value instanceof HTMLElement) {
        value = value + " (" + value.outerHTML.substring(0, 50) + "...)";
      }
      output.push(key + ": " + value);
    }
  }
  return output.join("\n");
};

function addHammer(el, textpane) {
  var mc = new Hammer(el, { multiUser: true });
  mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
  mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
  mc.get("pinch").set({ enable: true });
  mc.get("rotate").set({ enable: true });
  var infopane = document.querySelector(textpane)

  mc.on("swipe pan press pinch rotate tap doubletap", function (ev) {
    ev.preventDefault();
    // el.innerText = ev.pointers;
    var jsonStr = JSON.stringify(ev);
    // el.innerText = jsonStr;
    infopane.innerText = ev.toDirString();
    console.log("获取的数据:", ev);
  });
}

onMounted(() => {
  const url = ref("https://bobobq.cn:18081/#/");

  // addHammer(document.querySelector(".pos1"), ".bg1");
  // addHammer(document.querySelector(".pos2"), ".bg2");
  // addHammer(document.querySelector(".pos3"), ".bg3");

  drawing();
  drawing1();
  drawing2();
});

function posClick(event) {
  console.log("in");
  event.preventDefault();
}
</script>
<style lang="scss" scoped>
.bg1,
.bg2,
.bg3 {
  border: 1px solid red;
  position: absolute;
  width: 1200px;
  height: 750px;
  top: 850px;
}

.pos1,
.pos2,
.pos3 {
  border: 1px solid red;
  position: absolute;
  width: 1200px;
  height: 750px;
}

.bg1 {
  left: 60px;
}

.bg2 {
  left: 1320px;
}

.bg3 {
  left: 2580px;
}

.pos1 {
  top: 50px;
  left: 60px;
}

.pos2 {
  top: 50px;
  left: 1320px;
}

.pos3 {
  top: 50px;
  left: 2580px;
}

.btn1,
.btn2,
.btn3 {
  border: 1px solid rgb(179, 255, 0);
  position: absolute;
  width: 60px;
  height: 60px;

  &:active {
    background-color: aqua;
  }
}

.btn1 {
  top: 1600px;
  //left:630px;
  left: 300px;
}

.btn2 {
  top: 1600px;
  //left:1890px;
  left: 500px;
}

.btn3 {
  top: 1600px;
  //left:3150px;
  left: 700px;
}

.iframe {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: calc(100%);
  background: #fff;
  overflow-y: hidden;
}

.switch-bg {
  background-color: #f40;
}
</style>
<style>
body {
  width: 3840px;
  height: 1080px;
}
</style>
