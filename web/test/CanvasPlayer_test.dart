import 'package:test/test.dart';
import 'dart:html';
import '../lib/CanvasPlayer.dart';

void main() {
  test('CanvasPlayer should instantiate correctly', () {
    var recordCanvas = document.createElement('canvas');
    var playerCanvas = document.createElement('canvas');
    var cp = CanvasPlayer(
        canvasElement: recordCanvas,
        targetCanvasElement: playerCanvas,
        fps: 30,
        format: 'png',
        quality: 0.9);
    expect(cp.fps, equals(30));
  }, skip: false);
}
