import 'dart:html';
import 'dart:math' as math;
import 'Point.dart';

class Circle {
  CanvasElement canvasElement;
  Point origin;
  int radius;
  int step;
  String color;
  bool isMoving;
  int directionX;
  int directionY;

  Circle(
      {this.canvasElement,
      this.origin,
      this.radius = 10,
      this.color = 'green',
      this.step = 10}) {
    directionX = 1;
    directionY = 1;
  }

  void render() {
    canvasElement.context2D
      ..beginPath()
      ..arc(origin.x, origin.y, radius, 0, 2 * math.pi, false)
      ..fillStyle = color
      ..fill()
      ..closePath();
  }

  void move() {
    origin.x += step * directionX;
    origin.y += step * directionY;

    if ((origin.x + radius) > canvasElement.width || origin.x - radius < 0) {
      directionX *= -1;
    }

    if ((origin.y + radius) > canvasElement.height || origin.y - radius < 0) {
      directionY *= -1;
    }
  }
}
