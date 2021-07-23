import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

const SendingMail: React.FC = () => {
  const [isOK, setIsOK] = useState(false)

  useEffect(() => {
    setTimeout(() => { //TODO: メール送信する処理を書く
      setIsOK(true)
    }, 2000)
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto mt-28 text-center">
          {isOK ?
            <>
              <p className="leading-relaxed text-lg">確認メールを送信しました</p>
              <p className="leading-relaxed text-lg">メールに記載されているリンクからメールアドレスの確認を行ってください</p>
            </>
            :
            <ReactLoading
              type="spinningBubbles"
              color="#cccccc"
              className="leading-relaxed m-auto"
            />
          }
        </div>
      </div>
    </section>
  )
}

export default SendingMail
