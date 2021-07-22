module.exports = {
  axios: {
    credentials: true
  },
  images: {
    // Todo: 画像アップロード機能が完成したら削除
    domains: ['prtimes.jp', 'mycraftbeers.com', 'jp.sake-times.com', 'www.kirishima.co.jp', 'www.hepa-w.jp']
  },
  async rewrites() {
    return [
      // 以下はダイナミックルーティング時にルートにリダイレクトする処理
      // 開発でDynamicRouting等、SSR的なことをしたくない場合に用いる
      // {
      //   source: "/:any*",
      //   destination: "/",
      // },
    ]
  }
}
