import { Raw } from '../../../../atoms/Raw/index.js'

export class DiceIcon {
  constructor () {
    this.element = new Raw(`<div class="pages-dice-icon">
    <svg fill="black" fill-opacity="0.4" height="30px" width="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <g>
      <path d="M232.389,171.905c-5.603-5.603-13.051-8.688-20.974-8.688c-7.923,0-15.372,3.085-20.973,8.688c-5.604,5.603-8.689,13.052-8.689,20.975c0,7.923,3.085,15.373,8.688,20.974c5.603,5.603,13.051,8.688,20.974,8.688c7.923,0,15.372-3.085,20.975-8.688C243.955,202.288,243.955,183.471,232.389,171.905z M221.172,202.636c-2.606,2.605-6.071,4.04-9.757,4.04c-3.686,0-7.15-1.434-9.756-4.04s-4.04-6.071-4.04-9.756s1.434-7.15,4.04-9.756c2.605-2.606,6.07-4.04,9.755-4.04s7.151,1.435,9.756,4.04C226.55,188.503,226.55,197.257,221.172,202.636z"></path>
      <path d="M342.739,61.555c-11.564-11.566-30.384-11.566-41.949,0c-11.565,11.566-11.565,30.384,0.001,41.95c5.782,5.784,13.378,8.674,20.974,8.674s15.192-2.891,20.974-8.674c5.604-5.602,8.689-13.051,8.689-20.974C351.428,74.606,348.342,67.156,342.739,61.555z M331.521,92.286c-5.381,5.378-14.134,5.38-19.513,0c-5.38-5.38-5.38-14.133,0-19.513c5.381-5.378,14.132-5.378,19.513,0c2.606,2.606,4.04,6.071,4.04,9.756S334.127,89.68,331.521,92.286z"></path>
      <path d="M342.739,282.255c-11.564-11.566-30.384-11.566-41.949,0c-11.565,11.565-11.565,30.384,0.001,41.95c5.782,5.784,13.378,8.674,20.974,8.674s15.192-2.891,20.975-8.674c5.603-5.603,8.688-13.052,8.688-20.975C351.428,295.306,348.342,287.856,342.739,282.255z M331.521,312.986c-5.381,5.378-14.132,5.377-19.513,0c-5.38-5.38-5.38-14.133,0-19.513c5.381-5.378,14.132-5.378,19.513,0c2.606,2.606,4.04,6.071,4.04,9.756S334.126,310.38,331.521,312.986z"></path>
      <path d="M453.089,171.905c-5.603-5.603-13.051-8.688-20.974-8.688c-7.923,0-15.372,3.085-20.973,8.688c-5.604,5.603-8.689,13.052-8.689,20.975c0,7.923,3.085,15.373,8.688,20.974c5.603,5.603,13.051,8.688,20.974,8.688c7.923,0,15.372-3.085,20.976-8.688C464.655,202.288,464.655,183.471,453.089,171.905z M441.872,202.636c-2.606,2.605-6.071,4.04-9.757,4.04s-7.15-1.434-9.756-4.04c-2.606-2.606-4.04-6.071-4.04-9.756s1.434-7.15,4.04-9.756c2.605-2.606,6.07-4.04,9.755-4.04c3.685,0,7.151,1.435,9.756,4.04C447.25,188.503,447.25,197.257,441.872,202.636z"></path>
      <path d="M144.069,335.625c-16.356,0-29.662,13.307-29.662,29.662s13.306,29.662,29.662,29.662s29.664-13.306,29.664-29.662C173.732,348.932,160.425,335.625,144.069,335.625z M144.069,379.084c-7.607,0-13.797-6.189-13.797-13.797c0-7.607,6.19-13.797,13.797-13.797c7.608,0,13.798,6.19,13.798,13.797S151.677,379.084,144.069,379.084z"></path>
      <path d="M66.04,257.595c-16.356,0-29.664,13.306-29.664,29.662c0,16.355,13.307,29.662,29.664,29.662c16.355,0,29.661-13.306,29.662-29.662C95.703,270.902,82.397,257.595,66.04,257.595z M66.04,301.054c-7.608,0-13.798-6.19-13.798-13.797c0-7.607,6.19-13.797,13.798-13.797c7.607,0,13.796,6.19,13.797,13.797C79.837,294.865,73.647,301.054,66.04,301.054z"></path>
      <path d="M222.097,257.595c-16.356,0-29.662,13.306-29.662,29.662c0,16.355,13.306,29.662,29.662,29.662s29.664-13.306,29.664-29.662C251.761,270.902,238.454,257.595,222.097,257.595z M222.097,301.054c-7.607,0-13.797-6.19-13.797-13.797c0-7.607,6.19-13.797,13.797-13.797c7.609,0,13.798,6.19,13.798,13.797C235.895,294.865,229.705,301.054,222.097,301.054z"></path>
      <path d="M66.04,413.654c-16.356,0-29.664,13.307-29.664,29.662c0,16.355,13.307,29.662,29.664,29.662c16.355,0,29.662-13.307,29.662-29.662C95.703,426.961,82.397,413.654,66.04,413.654z M66.04,457.112c-7.608,0-13.798-6.19-13.798-13.797c0-7.607,6.19-13.797,13.798-13.797c7.607,0,13.797,6.19,13.797,13.797C79.837,450.922,73.647,457.112,66.04,457.112z"></path>
      <path d="M222.097,413.654c-16.356,0-29.662,13.307-29.662,29.662c0,16.355,13.306,29.662,29.662,29.662s29.664-13.307,29.664-29.662C251.761,426.961,238.454,413.654,222.097,413.654z M222.097,457.112c-7.607,0-13.797-6.19-13.797-13.797c0-7.607,6.19-13.797,13.797-13.797c7.609,0,13.798,6.19,13.798,13.797C235.895,450.922,229.705,457.112,222.097,457.112z"></path>
      <path d="M502.449,169.82L344.824,12.196c-6.159-6.16-14.35-9.552-23.06-9.552c-8.711,0-16.901,3.392-23.06,9.551L141.081,169.82c-6.16,6.159-9.552,14.349-9.552,23.06c0.001,8.711,3.393,16.901,9.552,23.06l5.277,5.277H32.612C14.63,221.217,0,235.847,0,253.83v222.914c0,17.982,14.63,32.612,32.612,32.612h222.914c17.982,0,32.611-14.63,32.611-32.612V362.997l10.567,10.567c6.158,6.159,14.348,9.551,23.059,9.552c0.001,0,0.002,0,0.003,0c8.709,0,16.899-3.392,23.059-9.552L502.448,215.94c6.16-6.159,9.552-14.349,9.552-23.06S508.608,175.98,502.449,169.82z M272.272,476.743c0,9.234-7.513,16.747-16.746,16.747H32.612c-9.234,0-16.747-7.513-16.747-16.747V253.83c0-9.234,7.513-16.747,16.747-16.747h222.914c9.233,0,16.746,7.513,16.746,16.747V476.743z M491.23,204.722L333.606,362.345c-3.164,3.164-7.368,4.905-11.84,4.905c-4.474,0-8.68-1.742-11.841-4.905l-21.786-21.785V253.83c0-16.859-12.859-30.771-29.283-32.444c-1.095-0.111-2.205-0.168-3.33-0.168h-86.731l-16.496-16.496c-3.163-3.164-4.906-7.369-4.906-11.842s1.741-8.679,4.906-11.841L309.924,23.415c3.161-3.163,7.367-4.905,11.84-4.905c4.473,0,8.678,1.742,11.841,4.905l157.623,157.623c3.164,3.164,4.906,7.369,4.906,11.842S494.393,201.559,491.23,204.722z"></path>
    </g>
    </svg>
    </div>`)
  }

  mount (container) {
    this.element.mount(container)
  }

  unmount () {
    this.element.unmount()
  }
}
