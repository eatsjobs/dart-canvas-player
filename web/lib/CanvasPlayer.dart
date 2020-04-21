import 'dart:html';
import 'dart:core';

final Map<String, String> FORMAT = const {
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'png': 'image/png',
};

class CanvasPlayer {
  List<String> _frames;
  CanvasElement canvasElement;
  CanvasElement targetCanvasElement;
  ImageElement image;
  bool isRecording;
  bool isPlaying;
  bool shouldPlayInLoop;
  int _fps;
  double quality;
  int _recordIntervalID;
  int _playRequestAnimationID;
  double _now;
  double _then;
  double _delta;
  double _interval;
  Iterator imagesIterator;
  String _format;

  // jpg or png
  set format(String format) {
    _format = FORMAT[format.toLowerCase()];
  }

  String get format {
    return _format;
  }

  set fps(int fps) {
    _fps = fps;
    _interval = (1000 / _fps).toDouble();
  }

  int get fps {
    return _fps;
  }

  CanvasPlayer({
    this.canvasElement,
    this.targetCanvasElement,
    quality,
    String format,
    fps = 30,
  }) {
    this.format = format;
    this.fps = fps;
    this.quality = 0.5;
    image = ImageElement(src: '');
    image.onLoad.listen(_render);

    shouldPlayInLoop = false;
    isRecording = false;
    isPlaying = false;
    _now = _then = DateTime.now().millisecondsSinceEpoch.toDouble();
    _frames = [];
  }

  void record() {
    isRecording = true;
    _recordLoop(window.performance.now());
  }

  void _recordLoop(num id) {
    _recordIntervalID = window.requestAnimationFrame((id) => _recordLoop(id));

    _now = DateTime.now().millisecondsSinceEpoch.toDouble();
    _delta = _now - _then;

    if (_delta > _interval) {
      print(canvasElement);
      _frames.add(canvasElement.toDataUrl(format, quality));
      _then = _now - (_delta % _interval);
    }
  }

  void _playLoop(num id) {
    if (!isRecording && _frames.isNotEmpty) {
      _playRequestAnimationID =
          window.requestAnimationFrame((id) => _playLoop(id));

      _now = new DateTime.now().millisecondsSinceEpoch.toDouble();
      _delta = _now - _then;

      if (_delta > _interval) {
        // update time stuffs
        bool hasNext = imagesIterator.moveNext();
        if (hasNext) {
          image.src = imagesIterator.current;
        } else if (shouldPlayInLoop && !hasNext) {
          imagesIterator = _frames.iterator;
        }
        // Just `then = now` is not enough.
        // Lets say we set fps at 10 which means
        // each frame must take 100ms
        // Now frame executes in 16ms (60fps) so
        // the loop iterates 7 times (16*7 = 112ms) until
        // delta > interval === true
        // Eventually this lowers down the FPS as
        // 112*10 = 1120ms (NOT 1000ms).
        // So we have to get rid of that extra 12ms
        // by subtracting delta (112) % interval (100).
        // Hope that makes sense.
        _then = _now - (_delta % _interval);
      }
    }
  }

  // render image in target canvas
  void _render(Event event) {
    targetCanvasElement.context2D
      ..clearRect(0, 0, targetCanvasElement.width, targetCanvasElement.height)
      ..drawImage(image, 0, 0);
  }

  // get base64 strings images
  List<String> getImages() {
    if (!isRecording) {
      return List.from(_frames);
    }
    return [];
  }

  // stop recording from the input canvas
  void stopRecord() {
    if (isRecording && _recordIntervalID != null) {
      window.cancelAnimationFrame(_recordIntervalID);
      isRecording = false;
      _recordIntervalID = null;
      imagesIterator = _frames.iterator;
    }
  }

  // stop play the target canvas
  void stopPlay() {
    if (isPlaying && _playRequestAnimationID != null) {
      window.cancelAnimationFrame(_playRequestAnimationID);
      isPlaying = false;
      _playRequestAnimationID = null;
    }
  }

  // clear the _frames List
  void clearBuffer() {
    _frames = [];
    imagesIterator = _frames.iterator;
  }

  // play in the target canvas
  void play({bool shouldPlayInLoop}) {
    shouldPlayInLoop = shouldPlayInLoop;
    isPlaying = true;
    _playLoop(window.performance.now());
  }
}
