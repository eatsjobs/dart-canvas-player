import 'package:js/js_util.dart';
import 'package:test/test.dart';
import 'dart:html';
import '../lib/CanvasPlayer.dart';

void main() {
  test('CanvasPlayer should instantiate correctly', () {
    var mock = document.createElement('canvas');
    var cp = CanvasPlayer(
        canvasElement: document.createElement('canvas'),
        targetCanvasElement: document.createElement('canvas'),
        fps: 30,
        format: 'png',
        quality: 0.9);
    expect(cp.fps, equals(30));
  });
}
