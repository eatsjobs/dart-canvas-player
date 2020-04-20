import 'dart:html';

import './lib/App.dart';

void main() {
  var app = App();
  app.drawInputCanvas(window.performance.now());
}
