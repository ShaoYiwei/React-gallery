require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = ((imageDatasArry)=> {
  for (let i = 0, j = imageDatasArry.length; i < j; i++) {
    let singleImageData = imageDatasArry[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArry[i] = singleImageData;
  }
  return imageDatasArry;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section></section>
        <nav></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
