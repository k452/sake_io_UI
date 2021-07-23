import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ReactLoading from 'react-loading'

const Verification: React.FC = () => {
  const router = useRouter()

  const [isOK, setIsOK] = useState(false)

  useEffect(() => {
    console.log(router.query)
    setTimeout(() => { //TODO: ワンタイムキーをDBに照合する処理を書く
      setIsOK(true)
    }, 2000)
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto mt-28 text-center">
          {isOK ?
            <>
              <p className="leading-relaxed text-lg">アカウントの作成が完了しました</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">ログインは
                <Link href="/signin" as="/signin"><a className="text-indigo-300 hover:text-indigo-600">こちら
                </a></Link>から
              </h2>
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

export default Verification
