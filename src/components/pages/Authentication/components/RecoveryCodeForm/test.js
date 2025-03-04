import { RecoveryCodeForm } from './index.js'
import { Background } from '../Background/index.js'

new Background(
  new RecoveryCodeForm({
    email: 'test@mail.com',
    timeout: 2,
    onSubmit: (options) => {
      console.log(`code: ${options.code}`)
    },
    onCancel: () => {
      console.log('button clicked')
    },
    onTimeout: () => {
      console.log('time out')
    }
  })
).mount(document.getElementById('root'))
