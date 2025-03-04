import { Text } from '../../atoms/Text/index.js'
import { ShowHide } from './index.js'

const component = new ShowHide(new Text('Hello World!'))
component.mount(document.getElementById('root'))

async function test () {
  while (true) {
    component.show()
    await new Promise(resolve => setTimeout(resolve, 1000))
    component.hide()
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

test()
