/*
 * @Author: your name
 * @Date: 2021-10-22 20:16:02
 * @LastEditTime: 2021-10-22 21:43:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\store\mutations.js
 */
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
