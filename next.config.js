module.exports = {
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
