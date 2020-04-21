import 'dart:html';

import 'CanvasPlayer.dart';
import 'Circle.dart';
import 'Point.dart';

class App {
  InputElement fpsInputElement;
  CheckboxInputElement shouldPlayInLoopCheckbox;
  CanvasElement recordCanvasElement;
  CanvasElement playingCanvasElement;
  List<InputElement> formatRadios;
  InputElement qualityRange;
  CanvasPlayer canvasPlayer;
  List<Circle> circles = [];
  int inputRequestFrameId;
  App() {
    recordCanvasElement = querySelector('#toRecord');
    playingCanvasElement = querySelector('#playCanvas');

    fpsInputElement = document.querySelector('input#fps');
    shouldPlayInLoopCheckbox = document.querySelector('input#loop');
    formatRadios = document.querySelectorAll('input[name=format]');
    qualityRange = document.querySelectorAll('input[name=quality]')[0];

    canvasPlayer = CanvasPlayer(
      fps: 30,
      canvasElement: recordCanvasElement,
      targetCanvasElement: playingCanvasElement,
      quality: 0.1,
      format: 'png',
    );

    shouldPlayInLoopCheckbox.onChange.listen((Event e) {
      canvasPlayer.shouldPlayInLoop = (e.currentTarget as InputElement).checked;
    });

    circles.add(Circle(
        canvasElement: recordCanvasElement,
        origin: Point(x: 100, y: 100),
        step: 1,
        color: 'red'));
    circles.add(Circle(
        canvasElement: recordCanvasElement,
        origin: Point(x: 100, y: 100),
        step: 5,
        color: 'green'));
    circles.add(Circle(
        canvasElement: recordCanvasElement,
        origin: Point(x: 100, y: 100),
        step: 3,
        color: 'yellow'));
    circles.add(Circle(
        canvasElement: recordCanvasElement,
        origin: Point(x: 100, y: 100),
        step: 8,
        color: 'pink'));
    attachListeners();
  }

  void drawFrameInputCanvas() {
    recordCanvasElement.context2D.clearRect(0, 0, 800, 400);
    circles.forEach((Circle circle) {
      circle.move();
      circle.render();
    });
  }

  void drawInputCanvas(num id) {
    inputRequestFrameId = window.requestAnimationFrame(drawInputCanvas);
    drawFrameInputCanvas();
  }

  void _handlerFormatRadio(Event e) {
    canvasPlayer.format = (e.currentTarget as InputElement).value;
  }

  void attachListeners() {
    formatRadios.forEach(
        (InputElement radio) => radio.onClick.listen(_handlerFormatRadio));

    qualityRange.onChange.listen((Event e) {
      double _quality = (e.currentTarget as InputElement).valueAsNumber;
      print(_quality);
      canvasPlayer.quality = _quality;
    });

    fpsInputElement.onChange.listen((Event e) {
      canvasPlayer.fps = (e.currentTarget as InputElement).valueAsNumber;
    });

    recordCanvasElement.onMouseDown.listen((e) {
      canvasPlayer
        ..clearBuffer()
        ..record();
      recordCanvasElement.classes.add('recording');
    });

    recordCanvasElement.onMouseUp.listen((e) {
      recordCanvasElement.classes.remove('recording');

      canvasPlayer
        ..stopRecord()
        ..play(shouldPlayInLoop: shouldPlayInLoopCheckbox.checked);
    });
  }
}
