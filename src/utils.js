module.exports = {

    randomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    randomFloat: function(min, max) {
        return Math.random() * (max - min) + min;
    },

    drawVect: function(ctx, cStart, cEnd, opts={}) {
        ctx.strokeStyle=opts.color??'yellow';
        ctx.lineWidth=opts.width??0.1;
        ctx.beginPath();
        ctx.moveTo(cStart.x, cStart.y);
        ctx.lineTo(cEnd.x, cEnd.y);
        ctx.stroke();
        ctx.closePath();
    },

    drawText: function(ctx, coords, text, opts={}) {
        ctx.fillStyle="black";
        ctx.font = `${opts.size??'48px'} ${opts.font??'serif'}`;
        ctx.fillText(text, coords.x, coords.y);
    },

    rotate: function(speed, angle) {
        return {
            x: speed.x * Math.cos(angle) - speed.y * Math.sin(angle),
            y: speed.x * Math.sin(angle) + speed.y * Math.cos(angle)
        };
    }
}