//shape code
var shapes = [
    oneShape = {
        htmlCode: '<div></div>',
        width: 40,
        height: 40,
        shapeCount: 1,
        shapeColor: '#9860f3',
        shapeName: 'oneShape',
        emptyGrids: []
    },
    fourBlock = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>',
        width: 80,
        height: 80,
        shapeCount: 4,
        shapeColor: '#5cbee4',
        shapeName: 'fourBlock',
        emptyGrids: []
    },
    nineBlock = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>',
        width: 120,
        height: 120,
        shapeCount: 9,
        shapeColor: '#ffc63e',
        shapeName: 'nineBlock',
        emptyGrids: []
    },
    twoV = {
        htmlCode: '<div></div>' +
            '<div></div>',
        width: 40,
        height: 80,
        shapeCount: 2,
        shapeColor: '#e76a82',
        shapeName: 'twoV',
        emptyGrids: []
    },
    threeV = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div></div>',
        width: 40,
        height: 120,
        shapeCount: 3,
        shapeColor: '#f8843f',
        shapeName: 'threeV',
        emptyGrids: []
    },
    fourV = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>',
        width: 40,
        height: 160,
        shapeCount: 4,
        shapeColor: '#f8843f',
        shapeName: 'fourV',
        emptyGrids: []
    },
    fiveV = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>',
        width: 40,
        height: 200,
        shapeCount: 5,
        shapeColor: '#ffc63e',
        shapeName: 'fiveV',
        emptyGrids: []
    },
    twoH = {
        htmlCode: '<div></div>' +
            '<div></div>',
        width: 80,
        height: 40,
        shapeCount: 2,
        shapeColor: '#98dc55',
        shapeName: 'twoH',
        emptyGrids: []
    },
    threeH = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div></div>',
        width: 120,
        height: 40,
        shapeCount: 3,
        shapeColor: '#f8843f',
        shapeName: 'threeH',
        emptyGrids: []
    },
    fourH = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>',
        width: 160,
        height: 40,
        shapeCount: 4,
        shapeColor: '#7bbb29',
        shapeName: 'fiveV',
        emptyGrids: []
    },
    fiveH = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>',
        width: 200,
        height: 40,
        shapeCount: 5,
        shapeColor: '#ffc63e',
        shapeName: 'fiveH',
        emptyGrids: []
    },
    leftopen = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div ></div>' +
            '<div style="position: absolute;top: 40px;right: 0;"></div>' +
            '<div style="position: absolute;top: 80px;right: 0;"></div>',
        width: 120,
        height: 120,
        shapeCount: 5,
        shapeColor: '#e76a82',
        shapeName: 'leftopen',
        emptyGrids: [3, 4, 6, 7]
    },
    rightopen = {
        htmlCode: '<div></div>' +
            '<div></div>' +
            '<div ></div>' +
            '<div style="position: absolute;top: 40px;left: 0;"></div>' +
            '<div style="position: absolute;top: 80px;left: 0;"></div>',
        width: 120,
        height: 120,
        shapeCount: 5,
        shapeColor: '#5cbee4',
        shapeName: 'rightopen',
        emptyGrids: [4, 5, 7, 8]
    }

];

// console.log(shapes.rightopen);

// get documents
var mArea = document.getElementById('m-area');
var mSt = document.getElementById('m-st');
var oUl = document.getElementById('gridList');
var grids = oUl.getElementsByTagName('li');
var oGpb = document.getElementById('g-pb');

var divCount = 3;
var gridWidth = 40;
var gridHeight = 40;
var blockWidth = 40;
var blockHeight = 40;

setBlock();

// set the grids status
for (var i = 0; i < grids.length; i++) {
    grids[i].status = false;
}

//menu click events
var MenuBtn = document.getElementById('menuBtn');
var oMenu = document.getElementById('menu');
var oMenuReplay = document.getElementById('menureplay');
var oContinue = document.getElementById('continue');
var oBlack = document.getElementById('black');

MenuBtn.onclick = function() {
    oMenu.style.display = 'block';
    oBlack.style.display = 'block';
}

oMenuReplay.onclick = function() {
    location.reload();
}

oContinue.onclick = function() {
    oMenu.style.display = 'none';
    oBlack.style.display = 'none';
}

//Merge objects
function mergeObj(origin, result, cover) {
    for (var key in origin) {
        if (origin.hasOwnProperty(key) && (!result.hasOwnProperty(key) || cover)) {
            result[key] = origin[key];
        }
    }
}

//set block
function setBlock() {
    // var allShapes = [nineBlock, fiveV, leftopen, rightopen];
    var shapeCode = null,
        oShapeDiv = null,
        oShape = null;

    for (var i = 0; i < divCount; i++) {
        shapeCode = shapes[Math.floor(Math.random() * shapes.length)];
        oShape = document.getElementById('shape' + (i + 1));
        oShapeDiv = oShape.getElementsByTagName('div');
        mergeObj(shapeCode, oShape, true); //把自定义的形状属性与从html获取的元素的属性合并，使元素获得自定义属性

        oShape.style.width = shapeCode.width + 'px';
        oShape.style.height = shapeCode.height + 'px';
        oShape.style.top = '0';
        oShape.style.left = (200 - shapeCode.width) / 2 + i * 233 + 'px';
        oShape.innerHTML = shapeCode.htmlCode;
        oShape.setAttribute('data-name', shapeCode.shapeName);
        // oShape.emptyGrids = shapeCode.emptyGrids; //empty grids number
        // oShape.shapeColor = shapeCode.shapeColor;
        for (var j = 0; j < oShapeDiv.length; j++) {
            oShapeDiv[j].style.background = shapeCode.shapeColor;
        }

        dragBlock(oShape); //add the drag even
    }
}

//drag block
function dragBlock(elm) {
    elm.onmousedown = function(e) {
        e = e || window.event;
        var oX = e.clientX - this.offsetLeft;
        var oY = e.clientY - this.offsetTop;
        var _this = this;
        var maxX = 10 - _this.offsetWidth / blockWidth;
        var maxY = 10 - _this.offsetHeight / blockHeight;
        var oldX = _this.currentStyle ? _this.currentStyle.left : getComputedStyle(_this).left;
        var oldY = _this.currentStyle ? _this.currentStyle.top : getComputedStyle(_this).top;
        var posX = 0,
            posY = 0,
            shi = 0,
            ge = 0;
        var areaFlag = false;
        var usableGrids = [];
        var removeNum = 0;
        if (this.setCapture) { //ie下全局捕获以阻止默认事件
            this.setCapture();
        }

        document.onmousemove = function(e) {
            e = e || window.event;

            _this.style.left = e.clientX - oX + 'px';
            _this.style.top = e.clientY - oY + 'px';

            posX = Math.floor((_this.offsetLeft - 150 + gridWidth / 2) / gridWidth);
            posY = Math.floor((_this.offsetTop + 450 + gridHeight / 2) / gridHeight);
            shi = _this.offsetHeight / gridHeight + posY;
            ge = _this.offsetWidth / gridWidth + posX;

            //在画布中描出形状(也可以用eval())
            usableGrids.splice(0, usableGrids.length);
            for (var i = posY; i < shi; i++) {
                for (var j = posX; j < ge; j++) {
                    if (grids[i * 10 + j]) {
                        usableGrids.push(grids[i * 10 + j]);
                    }
                }
            }
            for (var i = 0; i < elm.emptyGrids.length; i++) {
                usableGrids[elm.emptyGrids[i]] = '';
            }

            // 可移动范围
            if (posX >= 0 && posY >= 0 && posX <= maxX && posY <= maxY) {
                areaFlag = true;
                checkArea(_this, usableGrids, false);
            } else {
                areaFlag = false;
                for (var i = 0; i < grids.length; i++) {
                    if (!grids[i].status) {
                        grids[i].style.backgroundColor = 'white';
                    }
                }
            }
        }

        document.onmouseup = function() {
            if (elm.releaseCapture) {
                elm.releaseCapture();
            }

            //在可放置的位置放置形状，不可放置的范围形状会回到原来位置
            if (areaFlag && checkArea(_this, usableGrids, true)) {
                putDown(_this, usableGrids);
                removeNum = scanGrids();
                recordScore(_this, removeNum);

                divCount--;
                if (divCount == 0) {
                    divCount = 3;
                    setBlock();
                }
                gameOver();
            } else {
                _this.style.top = oldY;
                _this.style.left = oldX;
            }

            document.onmousemove = null;
            document.onmouseup = null;
        }

        return false; //非ie下不能阻止默认事件
    }
}

// show the putdown area
function checkArea(elm, gridsAry, putflag) {

    var statusFlag = true;

    for (var i = 0; i < gridsAry.length; i++) {
        if (gridsAry[i] && gridsAry[i].status) {
            statusFlag = false;
            break;
        }
    }

    if (!putflag) {
        for (var i = 0; i < grids.length; i++) {
            if (!grids[i].status) {
                grids[i].style.backgroundColor = 'white';
            }
        }
        if (statusFlag) {
            for (var i = 0; i < gridsAry.length; i++) {
                if (gridsAry[i]) {
                    gridsAry[i].style.backgroundColor = elm.shapeColor;
                }
            }
        }
    }

    return statusFlag;
}

// check the grids
function putDown(elm, gridsAry) {

    for (var i = 0; i < gridsAry.length; i++) {
        if (gridsAry[i]) {
            gridsAry[i].style.backgroundColor = elm.shapeColor;
            gridsAry[i].status = true;
        }
    }

    elm.innerHTML = '';
    elm.setAttribute('data-name', '');


}

// scan the grids is full?
function scanGrids() {
    var fullGrids = [];
    var fullcount = 0;
    for (var i = 0; i < 10; i++) { //行扫
        for (var j = 0; j < 10; j++) {
            if (grids[i * 10 + j].status) {
                fullGrids.push(grids[i * 10 + j]);
            }
        }
        if (fullGrids.length == 10) {
            for (var k = 0; k < fullGrids.length; k++) {
                fullGrids[k].style.backgroundColor = 'white';
                fullGrids[k].status = false;
            }
            fullcount++;
        }

        fullGrids.splice(0, fullGrids.length);
    }

    for (var j = 0; j < 10; j++) { //列扫
        for (var i = 0; i < 10; i++) {
            if (grids[i * 10 + j].status) {
                fullGrids.push(grids[i * 10 + j]);
            }
        }
        if (fullGrids.length == 10) {
            for (var k = 0; k < fullGrids.length; k++) {
                fullGrids[k].style.backgroundColor = 'white';
                fullGrids[k].status = false;
            }

            fullcount++;
        }

        fullGrids.splice(0, fullGrids.length);
    }

    return fullcount;

}

// game over
function gameOver() {
    if (divCount != 0) {
        var shapeDiv = document.getElementsByClassName('shapediv');
        var objShape = null; //存放有同名字形状的对象
        var usableGrids = []; //预放置格子的数组

        for (var k = 0; k < shapeDiv.length; k++) {
            var testshi = 0,
                testge = 0,
                usableGridsLength = 0; //一个预放置格子数组中可以放置的格子数
            var overFlag = true; //游戏结束标志

            if (shapeDiv[k].getAttribute('data-name')) { //剩下的形状才进行扫描可放区域
                objShape = eval(shapeDiv[k].getAttribute('data-name')); //eval函数，将括号中字符串转成js代码执行！！！非常方便！！！

                for (var testposY = 0; testposY < (10 - objShape.height / gridHeight); testposY++) { //一个个格子进行扫描
                    for (var testposX = 0; testposX < (10 - objShape.width / gridWidth); testposX++) {
                        testshi = objShape.height / gridHeight + testposY;
                        testge = objShape.width / gridWidth + testposX;

                        usableGridsLength = 0;
                        usableGrids.splice(0, usableGrids.length);
                        for (var i = testposY; i < testshi; i++) {
                            for (var j = testposX; j < testge; j++) { //将第一个格子延伸，得到跟形状一致的数组
                                if (grids[i * 10 + j]) {
                                    usableGrids.push(grids[i * 10 + j]);
                                }
                            }
                        }
                        for (var i = 0; i < objShape.emptyGrids.length; i++) {
                            usableGrids[objShape.emptyGrids[i]] = '';
                        }

                        for (var i = 0; i < usableGrids.length; i++) {
                            if (usableGrids[i] && usableGrids[i].status) {
                                //如果在预放置的格子中，有的一个已经被放了东西，则这组格子都不可以放置新的形状，跳出循环
                                break;
                            } else if (usableGrids[i] && !usableGrids[i].status) {
                                usableGridsLength++;
                            }
                        }
                        if (usableGridsLength == objShape.shapeCount) { //当被测的预放置格子区域可以放置的格子数等于形状的格子数，则游戏继续，不用继续扫描
                            overFlag = false;
                            break;
                        } else {
                            overFlag = true;
                        }
                    }

                    if (!overFlag) {
                        break;
                    }
                }
            }

            if (!overFlag) {
                break;
            }
        }
        if (!overFlag) {
            console.log('游戏继续');
        } else {
            console.log('游戏结束');
            var oGameover = document.getElementById('gameover');
            var oClose = document.getElementById('close');
            var oReplay = document.getElementById('replay');

            oGameover.style.display = 'block';
            oClose.onclick = function() {
                oGameover.style.display = 'none';
            }

            oReplay.onclick = function() {
                location.reload();
            }
        }
    }
}

//Record the score
function recordScore(elm, removeNum) {
    var oScore = document.getElementById('scorenum');
    var oldscore = oScore.innerHTML;
    if (removeNum == 0) {
        oScore.innerHTML = '' + (parseInt(oldscore) + elm.shapeCount * 2) + '';
    } else {
        oScore.innerHTML = '' + ((parseInt(oldscore) + elm.shapeCount * 2) + (removeNum * 11)) + '';
    }
}
