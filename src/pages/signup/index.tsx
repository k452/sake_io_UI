import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'

let router

const Signup: React.FC = () => {
  router = useRouter()
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<Form.signup>({
    mode: 'onChange'
  })

  return (
    <div className="mt-20 h-full w-full max-w-l">
      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name">
          名前
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            autoComplete="true"
            {...register('name', {
              required: true,
              pattern: /^([a-zA-Z0-9]{8,})$/i
            })}
          />
          {errors.name && <p className="text-red-500 text-xs italic">8文字以上の半角英数字のみ使用可能です</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mail">
          メールアドレス
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="mail"
            type="email"
            autoComplete="true"
            {...register('mail', {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
            })}
          />
          {errors.mail && <p className="text-red-500 text-xs italic">メールアドレスが不適切です</p>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pass"
          >
          パスワード
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="pass"
            type="password"
            {...register('pass', {
              required: true,
              // pattern: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i
            })}
          />
          {errors.pass && <p className="text-red-500 text-xs italic">パスワードが不適切です</p>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pass2"
          >
          パスワード(確認用)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="pass2"
            type="password"
            {...register('pass2', {
              required: true,
              validate: {
                matchesPreviousPassword: (value) => {
                  const { pass } = getValues()
                  return pass === value || 'パスワードが一致しません'
                }
              },
              // pattern: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i
            })}
          />
          {errors.pass2 && <p className="text-red-500 text-xs italic">{ errors.pass2.message }</p>}
        </div>
        <div className="flex items-center justify-between">
          <input
            className="cursor-pointer bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="登録"
          />
        </div>
      </form>
    </div>
  )
}

const onSubmit: SubmitHandler<Form.signup> = (data: Form.signup) => {
  if (data.pass === data.pass2) {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('mail', data.mail)
    formData.append('pass', data.pass)
    axios.post(`${process.env.NEXT_PUBLIC_AUTH_BASE}signup`, formData)
      .then(res => {
        console.log(res)
        router.push('/signup/sendingMail')
      })
      .catch(err => {
        console.error(err)
      })
  } else {
    console.error('確認用パスワードが一致しません')
  }
}

export default Signup
