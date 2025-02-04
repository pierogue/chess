import { List } from '../../../../common/List/index.js'
import { Header } from '../Header/index.js'
import { Input } from '../Input/index.js'
import { Checkbox } from '../Checkbox/index.js'
import { Label } from '../Label/index.js'
import { Button } from '../Button/index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { Composite } from '../../../../common/Composite/index.js'
import { HideButton } from '../HideButton/index.js'

export class LoginForm extends Composite {
  constructor (options = {}) {
    const hideButton = new HideButton(() => {
      passwordInput.element.type = passwordInput.element.type === 'text' ? 'password' : 'text'
    })

    const passwordInput = new Input({
      placeholder: 'Пароль',
      rightDecorator: hideButton,
    })
    passwordInput.element.type = 'password'

    let checkboxState = false

    super(
      new Wrap(
        new List(
          new Header('ВХОД'),
          new Input({ placeholder: 'E-mail' }),
          passwordInput,
          new Wrap(
            new List(
              new Checkbox({
                onChanged: (checked) => {
                  checkboxState = checked
                }
              }),
              new Label('Запомнить пароль'),
              new Clickable(
                new Label('Забыли пароль?'), {
                  onClick: () => {
                    if (options.onForgotPasswordClick) {
                      options.onForgotPasswordClick()
                    }
                  }
                }
              )
            ), {
              wrap: (container) => {
                const passElement = document.createElement('div')
                passElement.className = 'login-form-pass-opt'
                container.appendChild(passElement)
                return passElement
              }
            }
          ),
          new Clickable(
            new Button({
              text: 'РЕГИСТРАЦИЯ',
              color: 'red',
            }), {
              onClick: async () => {
                if (options.onRegButtonClick) {
                  await options.onRegButtonClick()
                }
              }
            }
          ),
          new Clickable(
            new Button({
              text: 'ВХОД',
              color: 'green',
            }), {
              onClick: async () => {
                if (options.onLoginButtonClick) {
                  await options.onLoginButtonClick(checkboxState)
                }
              }
            }
          )
        ), {
          wrap: (container) => {
            const formElement = document.createElement('div')
            formElement.className = 'login-form'
            container.appendChild(formElement)
            return formElement
          }
        }
      )
    )
  }
}
