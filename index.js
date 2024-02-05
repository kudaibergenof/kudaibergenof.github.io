var okna = new Konva.Layer();
    var width = window.innerWidth;
    var height = window.innerHeight;
    let scale = 1.25;
    

    var k;
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: width,
    height: height,
    draggable: true
  });
  

window.addEventListener('wheel', (e) => {

    var oldScale = stage.scaleX();
    var mousePointTo = {
        x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
        y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };
    var newScale = e.deltaY > 0 ? oldScale * scale : oldScale / scale;
    stage.scale({ x: newScale, y: newScale });
    var newPos = {
        x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
        y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    };
    stage.position(newPos);
    stage.batchDraw();
});


class PvcWindow {
    constructor (w, h, angle) {
        let top = null
        let left = null
        console.log(okna.length)
        // if (okna.length == 0) {
        //     top = 0;
        //     left = 0;
        // } else {
        //     // top = parseInt(okna[okna.length-1].rightSideCoords[0])
        //     left = parseInt(okna[okna.length-1].rightSideCoords[0])
        //     // top = 0
        //     // left = 1000
            
        // }

        left = 0;
        top = 0;
        w += left;
        h += top;
        
        this.globalWidth = w;
        this.globalHeight = h;
        this.PvcWindow = new Konva.Group({
        });
        this.topSideCoords = [left, top, w, top, w-angle, top+angle, left+angle, top+angle]
        this.leftSideCoords = [left, top, left, h, left+angle, h-angle, left+angle, top+angle]
        this.bottomSideCoords = [left, h, w, h, w-angle, h-angle, left+angle, h-angle]
        // this.rightSideCoords = [w, 0, w, h, w-angle, h-angle, w-angle, angle]
        this.rightSideCoords = [w, h, w-angle, h-angle, w-angle, top+angle, w, top]
        this.glassCoords = [left+angle, top+angle, left+angle, h-angle, w-angle, h-angle, w-angle, top+angle]

        this.PvcWindow.add(
            new Konva.Line({
                points: this.topSideCoords,
                fill: '#fff',
                name: 'profile',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )
        
        this.PvcWindow.add(
            new Konva.Line({
                points: this.bottomSideCoords,
                fill: '#fff',
                name: 'profile',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )
        this.PvcWindow.add(
            new Konva.Line({
                points: this.leftSideCoords,
                fill: '#fff',
                name: 'profile',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )
        this.PvcWindow.add(
            new Konva.Line({
                points: this.glassCoords,
                fill: '#9fd1ff',
                name: 'glass',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )
        this.PvcWindow.add(
            new Konva.Line({
                points: this.rightSideCoords,
                fill: '#fff',
                name: 'profile',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )

       okna.add(this.PvcWindow)

        // for (var v of this.PvcWindow) {
        //     v.on('click', this.onclick)
        // }
        // for (var v of this.PvcWindow) {
        //     v.on('dblclick', this.ondblclick)
        // }

        stage.add(okna)



        this.PvcWindow.children.forEach(v => {
            v.on('click', this.onclick)
        });
    }


    divide() {
        this.PvcWindow.add(
            new Konva.Line({
                points: [this.globalWidth/2-45/2, 0+45, this.globalWidth/2+45/2, 0+45, this.globalWidth/2+45/2, this.globalHeight-45, this.globalWidth/2-45/2, this.globalHeight-45],
                fill: '#fff',
                name: 'profile',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              }).on('click', this.changeLeft)
        )
        okna.draw()

        // this.PvcWindow.children.forEach(v => {
        //     v.on('click', this.onclick)
        // });
    }


    changeLeft() {
        var left = parseInt(document.querySelector('#left').value)
        this.attrs.points = [left, 45, left+45, 45, left+45, 800-45, left, 800-45]
        okna.draw()
        console.log(this)
        k = this;
    }


    update(w, h, angle) {
        let top = null
        let left = null
        console.log(okna.length)
        // if (okna.length == 0) {
        //     top = 0;
        //     left = 0;
        // } else {
        //     // top = parseInt(okna[okna.length-1].rightSideCoords[0])
        //     left = parseInt(okna[okna.length-1].rightSideCoords[0])
        //     // top = 0
        //     // left = 1000
            
        // }

        left = 0;
        top = 0;
        w += left;
        h += top;
        this.globalWidth = w;
        this.globalHeight = h;
        this.PvcWindow.removeChildren()
        this.topSideCoords = [left, top, w, top, w-angle, top+angle, left+angle, top+angle]
        this.leftSideCoords = [left, top, left, h, left+angle, h-angle, left+angle, top+angle]
        this.bottomSideCoords = [left, h, w, h, w-angle, h-angle, left+angle, h-angle]
        // this.rightSideCoords = [w, 0, w, h, w-angle, h-angle, w-angle, angle]
        this.rightSideCoords = [w, h, w-angle, h-angle, w-angle, top+angle, w, top]
        this.glassCoords = [left+angle, top+angle, left+angle, h-angle, w-angle, h-angle, w-angle, top+angle]
        console.log(this.PvcWindow)
        this.PvcWindow.add(
            new Konva.Line({
                points: this.topSideCoords,
                fill: '#fff',
                name: 'profile',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )
        
        this.PvcWindow.add(
            new Konva.Line({
                points: this.bottomSideCoords,
                fill: '#fff',
                name: 'profile',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )
        this.PvcWindow.add(
            new Konva.Line({
                points: this.leftSideCoords,
                fill: '#fff',
                name: 'profile',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )
        this.PvcWindow.add(
            new Konva.Line({
                points: this.glassCoords,
                fill: '#9fd1ff',
                name: 'glass',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )
        this.PvcWindow.add(
            new Konva.Line({
                points: this.rightSideCoords,
                fill: '#fff',
                name: 'profile',
                stroke: '#000',
                strokeWidth: 1,
                draggable: false,
                closed: true,
                dash:[]
              })
        )
       console.log(this.PvcWindow)
    }

    onclick(v) {
        console.log(this)
        // // event.preventDefault()
        // console.log(this)
        // console.log(this.name)
        // if (this.attrs.name == 'glass') {
        //     var fill = this.attrs.fill == '#3d85c6' ? '#9fd1ff' : '#3d85c6';
        //     this.attrs.fill = fill;
        //     for (var v of this.parent.children) {
        //         console.log(v)
        //         if (v.attrs.name == 'profile') {
        //             v.attrs.fill = '#fff';
        //         }
        //         v.draw()
        //     }
        // } else {
        //     for (var v of this.parent.children) {
        //         console.log(v)
        //         if (v.attrs.name == 'glass') {
        //             v.attrs.fill = '#9fd1ff';
        //         }
        //         v.draw()
        //     }
        //     var fill = this.attrs.fill == '#3d85c6' ? '#fff' : '#3d85c6';
        //     this.attrs.fill = fill;
        // }
        // this.draw()
    }

    ondblclick() {
        // event.preventDefault()
        console.log(this)
        console.log(this.attrs.name)
        console.log(this.parent.children)
        var fill = this.attrs.fill == '#3d85c6' ? '#fff' : '#3d85c6';
        if (this.attrs.name != 'glass') {
            for (var v of this.parent.children) {
                console.log(v)
                if (v.attrs.name == 'glass') {
                    console.log('glass')
                } else {
                    
                    v.attrs.fill = fill;
                    console.log(fill)
                }
                v.draw()
            }
            this.draw()
        }
        
    }
}

var okno1 = new PvcWindow(700, 800, 45)

var saveSize = document.querySelector('#saveSize')
var divide = document.querySelector('#divide')


divide.addEventListener('click', function() {
    okno1.divide()
})

saveSize.addEventListener('click', function() {
    var customWidth = parseInt(document.querySelector('#width').value)
    var customHeight = parseInt(document.querySelector('#height').value)
    okno1.update(customWidth, customHeight, 45)
})

