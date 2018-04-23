import imgSetting from './imgSetting'

const compatibleImg = (imgsStr) => {
  // const imgs = JSON.parse(imgsStr);
  // if (imgs[0] && imgs[0].url){
  //   return imgs[0].url;
  // } else {
    return imgSetting.DEFAULT_IMAGE;
  // }
}
export default {
  compatibleImg
}