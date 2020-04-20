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
  bool _shouldPlayInLoop;
  int fps;
  double quality;
  String format;
  int _recordIntervalID;
  int _playRequestAnimationID;
  double _now;
  double _then;
  double _delta;
  double _interval;
  Iterator imagesIterator;

  CanvasPlayer(
      {CanvasElement canvasElement,
      CanvasElement targetCanvasElement,
      int fps = 24,
      double quality = 0.5,
      String format = 'jpeg'}) {
    this.format = format;
    this.canvasElement = canvasElement;
    this.targetCanvasElement = targetCanvasElement;
    this.quality = quality;

    image = ImageElement(src: '');
    image.onLoad.listen(_render);

    _shouldPlayInLoop = false;
    isRecording = false;
    isPlaying = false;
    _now = _then = DateTime.now().millisecondsSinceEpoch.toDouble();
    _frames = [];
    setFps(fps);
  }

  void record() {
    isRecording = true;
    _recordLoop(window.performance.now());
  }

  void _recordLoop(num id) {
    _recordIntervalID = window.requestAnimationFrame(_recordLoop);

    _now = new DateTime.now().millisecondsSinceEpoch.toDouble();
    _delta = _now - _then;

    if (_delta > _interval) {
      print(canvasElement);
      _frames.add(canvasElement.toDataUrl(FORMAT[format], quality));
      _then = _now - (_delta % _interval);
    }
  }

  void _playLoop(num id) {
    if (!isRecording && _frames.isNotEmpty) {
      _playRequestAnimationID = window.requestAnimationFrame(_playLoop);

      _now = new DateTime.now().millisecondsSinceEpoch.toDouble();
      _delta = _now - _then;

      if (_delta > _interval) {
        // update time stuffs
        bool hasNext = imagesIterator.moveNext();
        if (hasNext) {
          image.src = imagesIterator.current;
        } else if (_shouldPlayInLoop && !hasNext) {
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
    _shouldPlayInLoop = shouldPlayInLoop;
    isPlaying = true;
    _playLoop(window.performance.now());
  }

  // set the fps
  void setFps(int fps) {
    fps = fps;
    _interval = (1000 / fps).toDouble();
  }

  // jpg or png
  void setFormat(String format) {
    this.format = FORMAT[format.toLowerCase()];
  }

  // set the quality of the record: values between 0 and 1
  void setQuality(double quality) {
    this.quality = quality;
  }

  void setShouldPlayInLoop(bool should) {
    _shouldPlayInLoop = should;
  }
}
