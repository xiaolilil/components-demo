export const scrollTo = (ident: string) => {
  let el: any = document.getElementById(ident)
  // console.log(ident, el)
  if (el) {
    console.log('123', 123)
    window.scrollTo({
      //滚动到元素位置
      //top: this.$refs[元素].offsetTop,//offsetTop 相对于offsetparent 定位,当有定位时，不准确。
      // top: el.getBoundingClientRect().top + window.scrollY - 100, //推荐使用，getBoundingClientRect 相对于当前视口的位置
      //top: 400//滚动到指定距离
      //top: 0,//滚动到顶部
      top: document.documentElement.scrollHeight, //滚动到底部
      behavior: 'smooth', // 平滑滚动
    })
  }
}
