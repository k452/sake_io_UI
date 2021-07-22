import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useRouter } from 'next/router'

let router

const Signin: React.FC = () => {
  router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<Form.signin>({
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
        <div className="flex items-center justify-between">
          <input
            className="cursor-pointer bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="ログイン"
          />
        </div>
      </form>
      <button onClick={cookieCheck} >getAll</button>
    </div>
  )
}

const onSubmit: SubmitHandler<Form.signin> = (data: Form.signin) => {
  const formData = new FormData()
  formData.append('mail', data.mail)
  formData.append('pass', data.pass)
  axios.post(`${process.env.NEXT_PUBLIC_AUTH_BASE}login`, formData)
    .then(res => {
      console.log(res)
      //router.push('/')
    })
    .catch(err => {
      console.error(err)
    })
}

const cookieCheck = () => {
  // const client = axios.create({ withCredentials: true })
  axios.get(`${process.env.NEXT_PUBLIC_AUTH_BASE}all`, { withCredentials: true })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
}

export default Signin
