// 用来封装通用函数

// 通过id获取页面元素
function my$(id) {
    return document.getElementById(id);
}

// 根据选择器选择页面元素
function selector$(selector) {
    return document.querySelectorAll(selector);
}

// 设置文本内容兼容性函数
function setInnerText(ele, text) {
    if (ele.innerText) { // 如果没有innerText属性,返回undefined 
        ele.innerText = text;
    } else {
        ele.textContent = text;
    }
}

// 获取文本内容兼容性函数
function getInnerText(ele) {
    if (ele.innerText) { // 如果没有innerText属性,返回undefined 
        return ele.innerText;
    } else {
        return ele.textContent;
    }
}

// 封装拆分cookie字符串的方法
function splitCookieStr(cookieStr) {
    // 创建对象,用来存储拆分出来的cookie的值
    var cookieObj = {};

    // 根据分号才分出来一个数组
    var firstArr = cookieStr.split(";");
    // trim() 去除字符串的前后空格
    // 继续拆分 firstArr数组里面的每个字符串
    for (var i = 0; i < firstArr.length; i++) {
        var secondArr = firstArr[i].split("=");
        cookieObj[secondArr[0].trim()] = secondArr[1];
    }
    return cookieObj;
}

// firstElementChild兼容性处理
function getFirstElementChild(element) {
    var node, nodes = element.childNodes,
        i = 0;
    while (node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

// lastElementChild兼容性处理
function getLastElementChild(element) {
    var node, nodes = element.childNodes,
        i = nodes.length - 1;
    while (node = nodes[i--]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

// nextElementSibling兼容性处理
function getNextElementSibling(element) {
    var el = element;
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}

// previousElementSibling兼容性处理
function getPreviousElementSibling(element) {
    var el = element;
    while (el = el.previousSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}

// 添加事件的兼容性处理
function addEventListener(element, type, fn) {
    if (element.addEventListener) {
        element.addEventListener(type, fn);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, fn)
    } else {
        element["on" + type] = fn;
    }
}

// 移除事件的兼容性处理
function removeEventListener(element, type, fn) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fn);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, fn)
    } else {
        element["on" + type] = null;
    }
}


// 封装获取滚动出去的距离的函数
function getScroll() {
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    }
}

// 封装获取页面坐标的函数,必须用在事件函数里面,依赖于event对象
function getPage(e) {
    e = e || window.event;
    var pageX = e.pageX || getScroll().scrollLeft + e.clientX;
    var pageY = e.pageY || getScroll().scrollTop + e.clientY;
    return {
        pageX: pageX,
        pageY: pageY
    }
}

// 阻止冒泡的兼容性写法,使用该方法之前,可以不用对event对象进行兼容性处理
function stopBubble(e) {
    e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

// 阻止事件的默认行为的兼容性写法
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}