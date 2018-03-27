//创建Ajax核心对象的函数
function getXHR() {
    var xhr = null;
    if (window.XMLHttpRequest) {
        //其它浏览器
        xhr = new XMLHttpRequest();
    } else {
        //IE
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }
    return xhr;
}

//创建解析XML的解析器内容,返回可以解析的内容
function getXmlDoc(xml) {
    var parser, xmlDoc;
    if (window.DOMParser) {
        //其它浏览器
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(xml, "application/xml");
    } else {
        //IE
        parser = new ActiveXObject("Microsoft.XMLDOM");
        parser.async = false;
        xmlDoc = parser.loadXML(xml);
    }
    return xmlDoc;
}