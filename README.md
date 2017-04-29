# node-red-contrib-syno

Node-RED node for synology (based on nodejs syno).

## Install
Run the following npm command in your Node-RED environment.
```
npm install node-red-contrib-syno
```

## Usage
This package add 1 node (DS Audio) in Synology categorie and 1 config node (DS Config) to Node-RED.

DS Audio node expect the following :
* `topic` : A string - What you want to do (ex: `list songs`) - An extra help is given in the edit dialog. 
* `payload`: An object - Specific data depending of the topic - An extra help is given in the edit dialog.


DS Audio node comprises the following options:

* **Topic**: What you want to do (ex: `list songs`) - An extra help is given in the edit dialog.
* **Payload**: Specific data depending of the topic - An extra help is given in the edit dialog.

## License
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
