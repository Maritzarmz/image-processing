var MathImg = /** @class */ (function () {
    function MathImg() {
    }
    MathImg.toGray = function (img) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        var prom;
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = 0; j < img.getWidth(); j++) {
                prom = (arrImage[0][i][j] + arrImage[1][i][j] + arrImage[2][i][j]) / 3;
                sal[0][i][j] = prom;
                sal[1][i][j] = prom;
                sal[2][i][j] = prom;
            }
        }
        return sal;
    };
    MathImg.toNegative = function (img) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = 0; j < img.getWidth(); j++) {
                sal[0][i][j] = 255 - arrImage[0][i][j];
                sal[1][i][j] = 255 - arrImage[1][i][j];
                sal[2][i][j] = 255 - arrImage[2][i][j];
            }
        }
        return sal;
    };
    MathImg.toRed = function (img) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = 0; j < img.getWidth(); j++) {
                sal[0][i][j] = arrImage[0][i][j];
                sal[1][i][j] = 0;
                sal[2][i][j] = 0;
            }
        }
        return sal;
    };
    MathImg.toGreen = function (img) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = 0; j < img.getWidth(); j++) {
                sal[0][i][j] = 0;
                sal[1][i][j] = arrImage[1][i][j];
                sal[2][i][j] = 0;
            }
        }
        return sal;
    };
    MathImg.toBlue = function (img) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = 0; j < img.getWidth(); j++) {
                sal[0][i][j] = 0;
                sal[1][i][j] = 0;
                sal[2][i][j] = arrImage[2][i][j];
            }
        }
        return sal;
    };
    MathImg.correctionGamma = function (img, factores) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = 0; j < img.getWidth(); j++) {
                sal[0][i][j] = this.funcionGamma(arrImage[0][i][j], factores[0]);
                sal[1][i][j] = this.funcionGamma(arrImage[1][i][j], factores[1]);
                sal[2][i][j] = this.funcionGamma(arrImage[2][i][j], factores[2]);
            }
        }
        return sal;
    };
    MathImg.funcionGamma = function (pixel, factor) {
        return Math.min(255 * Math.pow(pixel / 250, factor), 255);
    };
    MathImg.initArray = function (width, height) {
        var arrImage = new Array(3);
        arrImage[0] = new Array(height);
        arrImage[1] = new Array(height);
        arrImage[2] = new Array(height);
        for (var i = 0; i < height; i++) {
            arrImage[0][i] = new Array(width);
            arrImage[1][i] = new Array(width);
            arrImage[2][i] = new Array(width);
        }
        return arrImage;
    };
    MathImg.toUmbral = function (img, umbral) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        var prom;
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = 0; j < img.getWidth(); j++) {
                prom = (arrImage[0][i][j] + arrImage[1][i][j] + arrImage[2][i][j]) / 3;
                sal[0][i][j] = prom > umbral ? 255 : 0;
                sal[1][i][j] = prom > umbral ? 255 : 0;
                sal[2][i][j] = prom > umbral ? 255 : 0;
            }
        }
        return sal;
    };
    MathImg.toDesfaceX = function (img, des) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        var fila = arrImage[0].length, cols = arrImage[0][0].length;
        /*-------------------------------- */
        for (var i = 0; i < fila; i++) {
            for (var j = 0; j < cols; j++) {
                sal[1][i][j] = arrImage[1][i][j];
                if ((j - des) >= 0) {
                    sal[0][i][j] = arrImage[0][i][j - des];
                }
                else {
                    sal[0][i][j] = arrImage[0][i][j];
                }
                if ((j + des) < cols) {
                    sal[2][i][j] = arrImage[2][i][j + des];
                }
                else {
                    sal[2][i][j] = arrImage[2][i][j];
                }
            }
        }
        return sal;
    };
    MathImg.toDesfaceY = function (img, desy) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        var fila = arrImage[0].length, cols = arrImage[0][0].length;
        for (var i = 0; i < fila; i++) {
            for (var j = 0; j < cols; j++) {
                sal[1][i][j] = arrImage[1][i][j];
                if ((i - desy) >= 0) {
                    sal[0][i][j] = arrImage[0][i - desy][j];
                }
                else {
                    sal[0][i][j] = arrImage[0][i][j];
                }
                if ((i + desy) < cols) {
                    sal[2][i][j] = arrImage[2][i + desy][j];
                }
                else {
                    sal[2][i][j] = arrImage[2][i][j];
                }
            }
        }
        return sal;
    };
    return MathImg;
}());
export { MathImg };