# Canvas Rounded Rectangle
## Geometry type for [canvas-tree](https://www.npmjs.com/package/canvas-tree)

### Creates Path2D object represented circle

#### Installation

```bash
    $ npm install --save canvas-circle
```

#### Usage

```javascript

    import circle from 'canvas-circle';
    import createCanvas from 'canvas-tree';

    const style = {
        top: 60,
        left: 80,
        radius: 10,
        stroke: '#3333ff',
        fill: '#fffaaa',
        strokeWidth: 2,
        hover: {
            stroke: '#ff3333'
        }
    }

    const $canvas = document.getElementById('canvas');

    // as geometry type for canvas-tree
    const canvas = createCanvas($canvas);

    canvas.update({
        children: [
            {
                geometry: circle,
                children: [],
                style
            }
        ]
    });

    // standalone
    const path = circle(style);
    const ctx = $canvas.getContext('2d');
    ctx.lineWidth = style.strokeWidth;
    ctx.strokeStyle = style.stroke;
    ctx.fill =  style.fill;
    ctx.fill(path);
    ctx.stroke(path);
    // if(ctx.isPointInPath(path, x, y)) ... etc...

```
