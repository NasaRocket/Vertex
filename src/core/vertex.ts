
export class Vertex {
  constructor(private ctx:  CanvasRenderingContext2D) {
    this.render();
  }

  render = () => {
    this.drawHead();
    this.drawEars();
    this.drawEyes();
    this.drawNose();
    this.drawMouth();
    this.drawBody();
    this.drawLegs();
    this.drawTail();
  }

  drawHead() {
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 50, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawEars() {
    this.ctx.beginPath();
    this.ctx.moveTo(70, 70);
    this.ctx.lineTo(50, 50);
    this.ctx.lineTo(70, 80);
    this.ctx.moveTo(130, 70);
    this.ctx.lineTo(150, 50);
    this.ctx.lineTo(130, 80);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawEyes() {
    this.ctx.beginPath();
    this.ctx.arc(80, 90, 5, 0, Math.PI * 2);
    this.ctx.arc(120, 90, 5, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawNose() {
    this.ctx.beginPath();
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(100, 110);
    this.ctx.lineTo(90, 110);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawMouth() {
    this.ctx.beginPath();
    this.ctx.moveTo(90, 110);
    this.ctx.lineTo(80, 115);
    this.ctx.moveTo(90, 110);
    this.ctx.lineTo(80, 105);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawBody() {
    this.ctx.beginPath();
    this.ctx.moveTo(100, 150);
    this.ctx.lineTo(100, 200);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawLegs() {
    this.ctx.beginPath();
    this.ctx.moveTo(80, 200);
    this.ctx.lineTo(80, 250);
    this.ctx.moveTo(120, 200);
    this.ctx.lineTo(120, 250);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawTail() {
    this.ctx.beginPath();
    this.ctx.moveTo(130, 150);
    this.ctx.lineTo(170, 130);
    this.ctx.closePath();
    this.ctx.stroke();
  }
}