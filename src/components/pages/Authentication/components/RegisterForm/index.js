import { List } from '../../../../common/List/index.js'
import { Header } from '../Header/index.js'
import { Input } from '../Input/index.js'
import { Label } from '../Label/index.js'
import { Button } from '../Button/index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { Composite } from '../../../../common/Composite/index.js'
import { HideButton } from '../HideButton/index.js'
import { Tip } from '../Tip/index.js'
import { Raw } from '../../../../atoms/Raw/index.js'

export class RegisterForm extends Composite {
  constructor (options = {}) {
    const hideButton = new HideButton(() => {
      passwordInput.element.type = passwordInput.element.type === 'text' ? 'password' : 'text'
    })

    let errorMessage = ''
    const errorLabel = new Raw('<p class="error-label"><p>')

    const newsCheckboxState = false
    const agreementCheckboxState = false

    let usernameValid = false
    let emailValid = false
    let passwordValid = false

    const usernameInput = new Input({
      placeholder: 'Имя пользователя',
      rightDecorator: new Tip('Имя должно состоять из 3-16 символов и может содержать буквы, цифры, символы и пробелы.'),
      onChanged: (text) => {
        const usernameRegex = /^.{3,16}$/
        if (!usernameRegex.test(text)) {
          usernameValid = false
          errorMessage = 'Имя не соответствует требованиям.'
        } else {
          usernameValid = true
          errorMessage = ''
        }
        errorLabel.element.textContent = errorMessage
      },
    })

    const emailInput = new Input({
      placeholder: 'E-mail',
      onChanged: (text) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(text)) {
          emailValid = false
          errorMessage = 'Введите корректный E-mail.'
        } else {
          emailValid = true
          errorMessage = ''
        }
        errorLabel.element.textContent = errorMessage
      },
    })

    const passwordInput = new Input({
      placeholder: 'Введите пароль',
      rightDecorator: new List(hideButton, new Tip('Пароль должен содержать не менее 7 символов, не менее 1 цифры, не менее 1 буквы и не должны содержать пробелы.<br><br><br><br> Если вы забудете пароль, мы можем восстановить его с помощью вашего мобильного телефона')),
      onChanged: (text) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[^\s]{7,}$/
        if (!passwordRegex.test(text)) {
          passwordValid = false
          errorMessage = 'Пароль не соответствует требованиям.'
        } else {
          passwordValid = true
          errorMessage = ''
        }
        errorLabel.element.textContent = errorMessage
      },
    })
    passwordInput.element.type = 'password'

    super(
      new Wrap(
        new List(
          new Header('РЕГИСТРАЦИЯ'),
          new Wrap(
            new List(
              usernameInput,
              new Label('*')
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-name'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Wrap(
            new List(
              emailInput,
              new Label('*')
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-email'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Wrap(
            new List(
              passwordInput,
              new Label('*')
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-password'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Wrap(
            new Wrap(
              new List(
                new Label('Регистрируясь вы соглашаетесь с &nbsp'),
                new Clickable(
                  new Label('Пользовательским соглашением'),
                  {
                    onClick: async () => {
                      if (options.onSwitchToAgreement) {
                        await options.onSwitchToAgreement()
                      }
                    },
                  }
                )
              ),
              {
                wrap: (container) => {
                  const element = document.createElement('div')
                  element.className = 'register-form-agreement-link'
                  container.appendChild(element)
                  return element
                },
              }
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-agreement-check'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Clickable(
            new Button({
              text: 'СОЗДАТЬ АККАУНТ',
              color: 'red',
            }),
            {
              onClick: async () => {
                if (usernameValid && emailValid && passwordValid && agreementCheckboxState) {
                  if (options.onRegister) {
                    const registerData = {
                      username: usernameInput.element.value,
                      email: emailInput.element.value,
                      password: passwordInput.element.value,
                      sendNews: newsCheckboxState,
                    }
                    await options.onRegister(registerData)
                    errorMessage = ''
                  }
                } else {
                  if (!usernameValid && !emailValid && !passwordValid && !agreementCheckboxState) {
                    errorMessage = 'Заполните корректно все поля.'
                  }
                  if (usernameValid && emailValid && passwordValid && !agreementCheckboxState) {
                    errorMessage = 'Вы должны принять условия пользовательского соглашения.'
                  }
                  errorLabel.element.textContent = errorMessage
                }
              },
            }
          ),
          errorLabel,
          new Wrap(
            new List(
              new Label('Есть аккаунт?'),
              new Clickable(
                new Label('ВОЙТИ'),
                {
                  onClick: async () => {
                    if (options.onSwitchToLogin) {
                      await options.onSwitchToLogin()
                    }
                  },
                }
              )
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-login'
                container.appendChild(element)
                return element
              },
            }
          )
        ),
        {
          wrap: (container) => {
            const formElement = document.createElement('div')
            formElement.className = 'register-form'
            container.appendChild(formElement)
            return formElement
          },
        }
      )
    )
  }
}
